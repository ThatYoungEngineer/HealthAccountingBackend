import { Inject, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import mysql, { RowDataPacket } from 'mysql2';
import { PoolConnection } from 'mysql2/promise';
import { PaginatedResult } from './database.types';
import { Pool, QueryResult } from 'pg';
import {
  generatePaginatedSql,
  generatePaginatedSqlGroupBy,
} from 'src/common/helpers/sql.helper';
import {
  DATABASE_CONFIG_OPTIONS,
  DatabaseOptions,
} from './database-options.type';

@Injectable()
export class DbService {
  private readonly pool: Pool;

  constructor(@Inject(DATABASE_CONFIG_OPTIONS) private options: DatabaseOptions) {
    this.pool = new Pool({
      user: this.options.username || process.env.DB_USER,
      host: this.options.host || process.env.DB_HOST,
      database: this.options.database || process.env.DB_NAME,
      password: this.options.password || process.env.DB_PASSWORD,
      port: this.options.port || parseInt(process.env.DB_PORT, 10), // Ensure the port is a number
      ssl: {
        rejectUnauthorized: false, // Disable certificate validation (for development)
      },
    });
  }

  async onModuleInit() {
    try {
      await this.pool.query('SELECT 1');
      console.log('Database connected successfully!');
    } catch (error) {
      console.error('Database connection failed:', error);
    }
  }

  // private pool: mysql.Pool;
  // constructor(
  //   @Inject(DATABASE_CONFIG_OPTIONS) private options: DatabaseOptions,
  // ) {
  //   this.pool = mysql.createPool({
  //     host: this.options.host,
  //     port: this.options.port,
  //     user: this.options.username,
  //     password: this.options.password,
  //     database: this.options.database,
  //     connectionLimit: this.options.connectionLimit,
  //     waitForConnections: true,
  //     queueLimit: 0,
  //     multipleStatements: true,
  //     decimalNumbers: true,
  //     supportBigNumbers: true,
  //     bigNumberStrings: true,
  //   });
  // }

  private mapToModel<T>(type: new () => T, rows: RowDataPacket[]): T[] {
    const ret: T[] = [];
    if (rows?.length) {
      const obj = new type();
      const properties = Object.getOwnPropertyNames(obj);
      rows.forEach((e) => {
        const toObj = {};
        properties.forEach((prop) => {
          if (e.hasOwnProperty(prop)) toObj[prop] = e[prop];
        });
        ret.push(toObj as T);
      });
    }
    return ret;
  }

  // async executeNonQuery(sql: string, params?: any[] | null): Promise<RowDataPacket[]> {
  //   const promisePool = this.pool.promise();
  //   const con = await promisePool.getConnection();
  //   let retRows: RowDataPacket[];
  //   await con
  //     .execute(sql, params)
  //     .then(([rows]) => {
  //       retRows = rows as unknown as RowDataPacket[];
  //     })
  //     .catch((error) => {
  //       throw error;
  //     })
  //     .finally(() => con.release());

  //   return retRows;
  // }
  // async executeNonQuery(sql: string, params?: any[] | null): Promise<RowDataPacket[]> {
  //   const client = await this.pool.connect();
  //   try {
  //     const result = await client.executeNonQuery(sql, params);
  //     console.log(result);
  //     return result.rows as unknown as RowDataPacket[];
  //   } catch (error) {
  //     console.error('Error executing query:', error);
  //     throw error;
  //   } finally {
  //     client.release();
  //   }

  // }
  async executeNonQuery(sql: string, params?: any[] | null): Promise<void> {
    const con = await this.pool.connect();
    try {
      await con.query(sql, params);
    } catch (error) {
      console.error('Error executing non-query:', error);
      throw error;
    } finally {
      con.release();
    }
  }
  async queryToModel<T>(
    type: new () => T,
    sql: string,
    params?: any[] | null,
  ): Promise<T[]> {
    const con = await this.pool.connect();
  
    try {
      const result: QueryResult = await con.query(sql, params);
  
      // Check if the result has 'rows' property and it is an array
      if (result.rows && Array.isArray(result.rows)) {
        const retRows = result.rows as unknown as RowDataPacket[];
  
        const ret = this.mapToModel(type, retRows);
        return ret;
      } else {
        // Handle the case where the result does not have the expected structure
        throw new Error('Unexpected result structure');
      }
    } catch (error) {
      console.error('Error executing query:', error);
      throw error;
    } finally {
      con.release();
    }
  }

  async queryToModelPaginated<T>(
    type: new () => T,
    selectString: string,
    fromString: string,
    whereString: string,
    page = 1,
    rowsPerPage = 20,
    params?: any[] | null,
    groupByString = '',
    orderByString = '',
  ): Promise<PaginatedResult<T>> {
    let ret: any;
    const promisePool = this.pool.promise();
    const con = await promisePool.getConnection();
    let sql = '';

    if (groupByString) {
      sql = generatePaginatedSqlGroupBy(
        selectString,
        fromString,
        whereString,
        groupByString,
        orderByString,
        page,
        rowsPerPage,
      );
    } else {
      sql = generatePaginatedSql(
        selectString,
        fromString,
        whereString,
        page,
        rowsPerPage,
      );
    }

    if (params) {
      params = params.concat(params);
    }
    await con
      .query<RowDataPacket[][]>(sql, params)
      .then(([rows]) => {
        const res: PaginatedResult<T> = {
          Rows: this.mapToModel(type, rows[1]),
          TotalCount: rows[0][0].totalRows,
        };
        ret = res;
      })
      .catch((error) => {
        throw error;
      })
      .finally(() => con.release());

    return ret;
  }

  async execute(sql: string, params?: any[] | null, bulk?: boolean | false) {
    const promisePool = this.pool.promise();
    const con = await promisePool.getConnection();
    let ret: any;
    if (!bulk) {
      await con
        .execute(sql, params)
        .then(([rows]) => {
          ret = rows;
        })
        .catch((error) => {
          throw error;
        })
        .finally(() => con.release());
    } else {
      await con
        .executeNonQuery(sql, params)
        .then(([rows]) => {
          ret = rows;
        })
        .catch((error) => {
          throw error;
        })
        .finally(() => con.release());
    }

    return ret;
  }

  async getTransactionConnection() {
    const promisePool = this.pool.promise();
    const con = await promisePool.getConnection();
    await con.beginTransaction().catch((error) => {
      con.release();
      throw error;
    });
    return con;
  }

  // async executeTransaction(
  //   con: PoolConnection,
  //   sql: string,
  //   params?: any[] | null,
  //   bulk?: boolean | false,
  // ) {
  //   let ret: any;
  //   if (!bulk) {
  //     await con
  //       .execute(sql, params)
  //       .then(([rows]) => {
  //         ret = rows;
  //       })
  //       .catch((error) => {
  //         con.rollback();
  //         con.release();
  //         throw error;
  //       });
  //   } else {
  //     await con
  //       .executeNonQuery(sql, params)
  //       .then(([rows]) => {
  //         ret = rows;
  //       })
  //       .catch((error) => {
  //         con.rollback();
  //         con.release();
  //         throw error;
  //       });
  //   }

  //   return ret;
  // }

  async commitTransactionConnection(con: PoolConnection) {
    await con
      .commit()
      .catch((error) => {
        con.rollback();
        throw error;
      })
      .finally(() => con.release());
  }
}
