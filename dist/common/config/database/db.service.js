"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbService = void 0;
const common_1 = require("@nestjs/common");
const pg_1 = require("pg");
const sql_helper_1 = require("../../helpers/sql.helper");
const database_options_type_1 = require("./database-options.type");
let DbService = class DbService {
    options;
    pool;
    constructor(options) {
        this.options = options;
        this.pool = new pg_1.Pool({
            user: this.options.username || process.env.DB_USER,
            host: this.options.host || process.env.DB_HOST,
            database: this.options.database || process.env.DB_NAME,
            password: this.options.password || process.env.DB_PASSWORD,
            port: this.options.port || parseInt(process.env.DB_PORT, 10),
            ssl: {
                rejectUnauthorized: false,
            },
        });
    }
    async onModuleInit() {
        try {
            await this.pool.query('SELECT 1');
            console.log('Database connected successfully!');
        }
        catch (error) {
            console.error('Database connection failed:', error);
        }
    }
    mapToModel(type, rows) {
        const ret = [];
        if (rows?.length) {
            const obj = new type();
            const properties = Object.getOwnPropertyNames(obj);
            rows.forEach((e) => {
                const toObj = {};
                properties.forEach((prop) => {
                    if (e.hasOwnProperty(prop))
                        toObj[prop] = e[prop];
                });
                ret.push(toObj);
            });
        }
        return ret;
    }
    async executeNonQuery(sql, params) {
        const con = await this.pool.connect();
        try {
            await con.query(sql, params);
        }
        catch (error) {
            console.error('Error executing non-query:', error);
            throw error;
        }
        finally {
            con.release();
        }
    }
    async queryToModel(type, sql, params) {
        const con = await this.pool.connect();
        try {
            const result = await con.query(sql, params);
            if (result.rows && Array.isArray(result.rows)) {
                const retRows = result.rows;
                const ret = this.mapToModel(type, retRows);
                return ret;
            }
            else {
                throw new Error('Unexpected result structure');
            }
        }
        catch (error) {
            console.error('Error executing query:', error);
            throw error;
        }
        finally {
            con.release();
        }
    }
    async queryToModelPaginated(type, selectString, fromString, whereString, page = 1, rowsPerPage = 20, params, groupByString = '', orderByString = '') {
        let ret;
        const promisePool = this.pool.promise();
        const con = await promisePool.getConnection();
        let sql = '';
        if (groupByString) {
            sql = (0, sql_helper_1.generatePaginatedSqlGroupBy)(selectString, fromString, whereString, groupByString, orderByString, page, rowsPerPage);
        }
        else {
            sql = (0, sql_helper_1.generatePaginatedSql)(selectString, fromString, whereString, page, rowsPerPage);
        }
        if (params) {
            params = params.concat(params);
        }
        await con
            .query(sql, params)
            .then(([rows]) => {
            const res = {
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
    async execute(sql, params, bulk) {
        const promisePool = this.pool.promise();
        const con = await promisePool.getConnection();
        let ret;
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
        }
        else {
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
    async commitTransactionConnection(con) {
        await con
            .commit()
            .catch((error) => {
            con.rollback();
            throw error;
        })
            .finally(() => con.release());
    }
};
DbService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(database_options_type_1.DATABASE_CONFIG_OPTIONS)),
    __metadata("design:paramtypes", [Object])
], DbService);
exports.DbService = DbService;
//# sourceMappingURL=db.service.js.map