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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const create_user_dto_1 = require("./dto/create-user.dto");
const user_repository_1 = require("./user.repository");
const passport_1 = require("@nestjs/passport");
const create_user_usecase_1 = __importDefault(require("./usecases/create-user.usecase"));
const get_user_usecase_1 = __importDefault(require("./usecases/get-user.usecase"));
let UserController = class UserController {
    userRepository;
    createUserUseCase;
    getUserUseCase;
    constructor(userRepository, createUserUseCase, getUserUseCase) {
        this.userRepository = userRepository;
        this.createUserUseCase = createUserUseCase;
        this.getUserUseCase = getUserUseCase;
    }
    getUsers() {
        return this.userRepository.get();
    }
    async store(createUserDto, res) {
        if (createUserDto.email != null &&
            createUserDto.password != null &&
            createUserDto.name != null) {
            if (createUserDto.password == createUserDto.confirmPassword) {
                await this.getUserUseCase.getUserbyEmail(createUserDto.email).then(async (data) => {
                    if (data) {
                        res.status(common_1.HttpStatus.FORBIDDEN).send({
                            message: 'Email Already Exists.',
                        });
                        return res;
                    }
                    else {
                        const saltOrRounds = 10;
                        this.createUserUseCase.execute(createUserDto).then((obj) => {
                            res.status(common_1.HttpStatus.OK).send({
                                message: 'User Successfully Added.',
                            });
                        });
                    }
                });
            }
            else if (createUserDto.password != createUserDto.confirmPassword) {
                res.status(common_1.HttpStatus.FORBIDDEN).send({
                    message: 'Password Not Matched.',
                });
            }
            else {
                res.status(common_1.HttpStatus.BAD_REQUEST).send({
                    message: 'There is an Error while creating this user. Please Try Again.',
                });
            }
        }
        return res;
    }
    async login(req) {
        return this.userRepository.login(req.user);
    }
    getUser(userId) {
        return this.getUserUseCase.getUserbyID(userId);
    }
    deleteUser(userId) {
        return this.userRepository.delete(userId);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getUsers", null);
__decorate([
    (0, common_1.Post)('/signUp'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "store", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('local')),
    (0, common_1.Post)('/login'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "login", null);
__decorate([
    (0, common_1.Get)('/:userId'),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getUser", null);
__decorate([
    (0, common_1.Delete)('/:userId'),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "deleteUser", null);
UserController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_repository_1.UserRepository, create_user_usecase_1.default,
        get_user_usecase_1.default])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map