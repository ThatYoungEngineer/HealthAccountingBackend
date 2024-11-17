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
exports.UserRepository = void 0;
const common_1 = require("@nestjs/common");
const create_user_dto_1 = require("./dto/create-user.dto");
const db_service_1 = require("../common/config/database/db.service");
const jwt_1 = require("@nestjs/jwt");
let UserRepository = class UserRepository {
    Db;
    jwtService;
    constructor(Db, jwtService) {
        this.Db = Db;
        this.jwtService = jwtService;
    }
    async get() {
        const sql = 'SELECT * FROM user_det';
        const result = await this.Db.executeNonQuery(sql);
        const jsonString = JSON.stringify(result);
        return jsonString;
    }
    async getByEmail(email) {
        const sql = 'SELECT * FROM user_det where email = $1';
        const params = [email];
        const result = await this.Db.queryToModel(create_user_dto_1.CreateUserDto, sql, params);
        return result;
    }
    async getById(id) {
        const sql = 'SELECT * FROM user_det where id = $1';
        const params = [id];
        const result = await this.Db.executeNonQuery(sql, params);
        const jsonString = JSON.stringify(result);
        return jsonString;
    }
    async insert(createUserDto) {
        const { name, email, password } = createUserDto;
        const sql = 'INSERT INTO user_det (name, email, password) VALUES ($1, $2, $3)';
        const params = [name, email, password];
        try {
            await this.Db.executeNonQuery(sql, params);
            return 'Insert successful!';
        }
        catch (error) {
            throw error;
        }
    }
    async update(id, updateUserDto) {
        const { password, confirmPassword } = updateUserDto;
        const sql = 'UPDATE user_det SET password = $1, confirmPassword = $2 where id = $4';
        const params = [password, confirmPassword];
        try {
            await this.Db.executeNonQuery(sql, params);
            return 'Update successful!';
        }
        catch (error) {
            throw error;
        }
    }
    async delete(id) {
        const sql = 'DELETE FROM user_det WHERE id = $1';
        const params = [id];
        try {
            await this.Db.executeNonQuery(sql, params);
            return 'Delete successful!';
        }
        catch (error) {
            throw error;
        }
    }
    async login(user) {
        const payload = { email: user.email, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
};
UserRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [db_service_1.DbService, jwt_1.JwtService])
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map