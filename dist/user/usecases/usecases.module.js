"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsecasesModule = void 0;
const common_1 = require("@nestjs/common");
const user_repository_1 = require("../user.repository");
const create_user_usecase_1 = __importDefault(require("./create-user.usecase"));
const jwt_1 = require("@nestjs/jwt");
const get_user_usecase_1 = __importDefault(require("./get-user.usecase"));
let UsecasesModule = class UsecasesModule {
};
UsecasesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.register({
                secret: 'your-secret-key',
                signOptions: { expiresIn: '1h' },
            }),
        ],
        providers: [user_repository_1.UserRepository, create_user_usecase_1.default, get_user_usecase_1.default],
        exports: [create_user_usecase_1.default, get_user_usecase_1.default],
    })
], UsecasesModule);
exports.UsecasesModule = UsecasesModule;
//# sourceMappingURL=usecases.module.js.map