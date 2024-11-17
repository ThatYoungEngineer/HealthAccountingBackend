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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestsRepository = void 0;
const common_1 = require("@nestjs/common");
const db_service_1 = require("../common/config/database/db.service");
const read_tests_dto_1 = require("./dto/read-tests.dto");
let TestsRepository = class TestsRepository {
    Db;
    constructor(Db) {
        this.Db = Db;
    }
    async getTests() {
        try {
            const sql = 'SELECT * FROM tstg_det';
            const result = await this.Db.queryToModel(read_tests_dto_1.ReadTestsDto, sql);
            return result;
        }
        catch (error) {
            throw error;
        }
    }
    async getTestByID(id) {
        try {
            const sql = 'SELECT * FROM tstg_det where id = $1';
            const params = [id];
            const result = await this.Db.queryToModel(read_tests_dto_1.ReadTestsDto, sql, params);
            return result;
        }
        catch (error) {
            throw error;
        }
    }
    async getTestsByCategoryID(category_id) {
        try {
            const sql = 'SELECT * FROM tstg_det where category_id = $1';
            const params = [category_id];
            const result = await this.Db.queryToModel(read_tests_dto_1.ReadTestsDto, sql, params);
            return result;
        }
        catch (error) {
            throw error;
        }
    }
    async insertTest(createTestsDto) {
        try {
            if (createTestsDto.length === 0) {
                return null;
            }
            const valuesPlaceholder = createTestsDto.map((_, index) => `($${index * 4 + 1}, $${index * 4 + 2}, $${index * 4 + 3}, $${index * 4 + 4})`).join(', ');
            const sql = `
        INSERT INTO tstg_det (name, price, code, category_id)
        VALUES ${valuesPlaceholder}
      `;
            const params = createTestsDto.flatMap(({ name, price, code, category_id }) => [name, price, code, category_id]);
            await this.Db.executeNonQuery(sql, params);
            return 'Insert Successful';
        }
        catch (error) {
            throw error;
        }
    }
    async findExistingTestCode(code) {
        try {
            const sql = 'SELECT * FROM tstg_det where code = $1';
            const params = [code];
            const result = await this.Db.queryToModel(read_tests_dto_1.ReadTestsDto, sql, params);
            return result.length > 0 ? true : false;
        }
        catch (error) {
            throw error;
        }
    }
    async updateTest(id, category_id, updateTestsDto) {
        const { name, price, code } = updateTestsDto[0];
        const sql = 'UPDATE tstg_det SET name = $1, price = $2, code = $3 where id = $4 and category_id = $5';
        const params = [name, price, code, id, category_id];
        try {
            await this.Db.executeNonQuery(sql, params);
            return 'Update successful!';
        }
        catch (error) {
            throw error;
        }
    }
    async deleteTest(id, category_id) {
        const sql = 'DELETE FROM tstg_det WHERE id = $1 and category_id = $2';
        const params = [id, category_id];
        try {
            await this.Db.executeNonQuery(sql, params);
            return 'Delete successful!';
        }
        catch (error) {
            throw error;
        }
    }
};
TestsRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [db_service_1.DbService])
], TestsRepository);
exports.TestsRepository = TestsRepository;
//# sourceMappingURL=tests.repository.js.map