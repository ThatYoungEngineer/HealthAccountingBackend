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
const common_1 = require("@nestjs/common");
const user_repository_1 = require("../user.repository");
let GetUserUseCase = class GetUserUseCase {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async getAllUsers() {
        const result = await this.userRepository.get();
        return result;
    }
    async getUserbyEmail(email) {
        const result = await this.userRepository.getByEmail(email);
        return JSON.parse(JSON.stringify(result[0]));
        ;
    }
    async getUserbyID(id) {
        const result = await this.userRepository.getById(id);
        return result;
    }
};
GetUserUseCase = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository])
], GetUserUseCase);
exports.default = GetUserUseCase;
//# sourceMappingURL=get-user.usecase.js.map