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
exports.CategoryController = void 0;
const common_1 = require("@nestjs/common");
const get_category_usecase_1 = __importDefault(require("./usecases/get-category.usecase"));
const create_category_usecase_1 = __importDefault(require("./usecases/create-category.usecase"));
const update_category_usecase_1 = __importDefault(require("./usecases/update-category.usecase"));
const delete_category_usecase_1 = __importDefault(require("./usecases/delete-category.usecase"));
const create_category_dto_1 = require("./dto/create-category.dto");
const update_category_dto_1 = require("./dto/update-category.dto");
let CategoryController = class CategoryController {
    getCategoryUseCase;
    createCategoryUseCase;
    updateCategoryUseCase;
    deleteCategoryUseCase;
    constructor(getCategoryUseCase, createCategoryUseCase, updateCategoryUseCase, deleteCategoryUseCase) {
        this.getCategoryUseCase = getCategoryUseCase;
        this.createCategoryUseCase = createCategoryUseCase;
        this.updateCategoryUseCase = updateCategoryUseCase;
        this.deleteCategoryUseCase = deleteCategoryUseCase;
    }
    async get() {
        return this.getCategoryUseCase.getCategorys();
    }
    async getByID(id) {
        return this.getCategoryUseCase.getCategoryByID(id);
    }
    async addCategory(createCategoryDto) {
        try {
            var data = await this.createCategoryUseCase.createCategory(createCategoryDto);
            return "1";
        }
        catch (error) {
            return error;
        }
    }
    async put(id, updateCategoryDto) {
        try {
            return await this.updateCategoryUseCase.updateCategorys(id, updateCategoryDto);
        }
        catch (error) {
            return 'Error during update:' + error;
        }
    }
    async deete(id) {
        try {
            return await this.deleteCategoryUseCase.deleteCategory(id);
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
], CategoryController.prototype, "get", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "getByID", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_category_dto_1.CreateCategoryDto]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "addCategory", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_category_dto_1.UpdateCategoryDto]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "put", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "deete", null);
CategoryController = __decorate([
    (0, common_1.Controller)('category'),
    __metadata("design:paramtypes", [get_category_usecase_1.default, create_category_usecase_1.default,
        update_category_usecase_1.default, delete_category_usecase_1.default])
], CategoryController);
exports.CategoryController = CategoryController;
//# sourceMappingURL=category.controller.js.map