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
exports.CategoryRepository = void 0;
const common_1 = require("@nestjs/common");
const db_service_1 = require("../common/config/database/db.service");
const read_category_dto_1 = require("./dto/read-category.dto");
let CategoryRepository = class CategoryRepository {
    Db;
    constructor(Db) {
        this.Db = Db;
    }
    async getCategoryByID(id) {
        try {
            const sql = 'SELECT * FROM category where id = $1';
            const params = [id];
            const result = await this.Db.queryToModel(read_category_dto_1.ReadCategoryDto, sql, params);
            return result;
        }
        catch (error) {
            throw error;
        }
    }
    async getCategoryByName(name) {
        try {
            const sql = 'SELECT * FROM category where name = $1';
            const params = [name];
            const result = await this.Db.queryToModel(read_category_dto_1.ReadCategoryDto, sql, params);
            return result;
        }
        catch (error) {
            throw error;
        }
    }
    async getCategories() {
        try {
            const sql = 'SELECT * FROM category';
            const result = await this.Db.queryToModel(read_category_dto_1.ReadCategoryDto, sql);
            return result;
        }
        catch (error) {
            throw error;
        }
    }
    async insertCategory(createCategoryDto) {
        const { name } = createCategoryDto;
        console.log("call ", name);
        const sql = 'INSERT INTO category (name) VALUES ($1)';
        const params = [name];
        try {
            await this.Db.executeNonQuery(sql, params);
            return "Insert Successful";
        }
        catch (error) {
            throw error;
        }
    }
    async updateCategory(id, updateCategoryDto) {
        const { name } = updateCategoryDto;
        const sql = 'UPDATE category SET name = $1 where id = $2';
        const params = [name, id];
        try {
            await this.Db.executeNonQuery(sql, params);
            return 'Update successful!';
        }
        catch (error) {
            throw error;
        }
    }
    async deleteCategory(id) {
        const sql = 'DELETE FROM category WHERE id = $1';
        const params = [id];
        try {
            await this.Db.executeNonQuery(sql, params);
            return 'Delete successful!';
        }
        catch (error) {
            throw error;
        }
    }
};
CategoryRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [db_service_1.DbService])
], CategoryRepository);
exports.CategoryRepository = CategoryRepository;
//# sourceMappingURL=category.repository.js.map