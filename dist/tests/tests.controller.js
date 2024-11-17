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
exports.TestsController = void 0;
const common_1 = require("@nestjs/common");
const get_tests_usecase_1 = __importDefault(require("./usecases/get-tests.usecase"));
const create_tests_usecase_1 = __importDefault(require("./usecases/create-tests.usecase"));
const update_tests_usecase_1 = __importDefault(require("./usecases/update-tests.usecase"));
const delete_tests_usecase_1 = __importDefault(require("./usecases/delete-tests.usecase"));
const update_tests_dto_1 = require("./dto/update-tests.dto");
let TestsController = class TestsController {
    getTestsUseCase;
    createTestsUseCase;
    updateTestsUseCase;
    deleteTestsUseCase;
    constructor(getTestsUseCase, createTestsUseCase, updateTestsUseCase, deleteTestsUseCase) {
        this.getTestsUseCase = getTestsUseCase;
        this.createTestsUseCase = createTestsUseCase;
        this.updateTestsUseCase = updateTestsUseCase;
        this.deleteTestsUseCase = deleteTestsUseCase;
    }
    async get() {
        return this.getTestsUseCase.getTests();
    }
    async getByCategoryID(category_id) {
        return this.getTestsUseCase.getTestsByCategoryID(category_id);
    }
    async post(createTestsDto) {
        try {
            return await this.createTestsUseCase.createTest(createTestsDto);
        }
        catch (error) {
            return error;
        }
    }
    async put(id, category_id, updateTestsDto) {
        try {
            return await this.updateTestsUseCase.updateTest(id, category_id, updateTestsDto);
        }
        catch (error) {
            return 'Error during update:' + error;
        }
    }
    async deete(id, category_id) {
        try {
            return await this.deleteTestsUseCase.deleteTest(id, category_id);
        }
        catch (error) {
            return 'Error during delete:' + error;
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TestsController.prototype, "get", null);
__decorate([
    (0, common_1.Get)('getByCategoryID/:category_id'),
    __param(0, (0, common_1.Param)('category_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TestsController.prototype, "getByCategoryID", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], TestsController.prototype, "post", null);
__decorate([
    (0, common_1.Put)(':id/:category_id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('category_id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, update_tests_dto_1.UpdateTestsDto]),
    __metadata("design:returntype", Promise)
], TestsController.prototype, "put", null);
__decorate([
    (0, common_1.Delete)(':id/:category_id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('category_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], TestsController.prototype, "deete", null);
TestsController = __decorate([
    (0, common_1.Controller)('tests'),
    __metadata("design:paramtypes", [get_tests_usecase_1.default, create_tests_usecase_1.default,
        update_tests_usecase_1.default, delete_tests_usecase_1.default])
], TestsController);
exports.TestsController = TestsController;
//# sourceMappingURL=tests.controller.js.map