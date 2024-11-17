import { PoolConnection } from 'mysql2/promise';
import { PaginatedResult } from './database.types';
import { DatabaseOptions } from './database-options.type';
export declare class DbService {
    private options;
    private readonly pool;
    constructor(options: DatabaseOptions);
    onModuleInit(): Promise<void>;
    private mapToModel;
    executeNonQuery(sql: string, params?: any[] | null): Promise<void>;
    queryToModel<T>(type: new () => T, sql: string, params?: any[] | null): Promise<T[]>;
    queryToModelPaginated<T>(type: new () => T, selectString: string, fromString: string, whereString: string, page?: number, rowsPerPage?: number, params?: any[] | null, groupByString?: string, orderByString?: string): Promise<PaginatedResult<T>>;
    execute(sql: string, params?: any[] | null, bulk?: boolean | false): Promise<any>;
    getTransactionConnection(): Promise<any>;
    commitTransactionConnection(con: PoolConnection): Promise<void>;
}
