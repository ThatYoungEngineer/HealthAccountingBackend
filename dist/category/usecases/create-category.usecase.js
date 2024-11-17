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
const app_exception_1 = require("../../common/exception/app.exception");
const category_repository_1 = require("../category.repository");
const winston_1 = require("winston");
let CreateCategoryUseCase = class CreateCategoryUseCase {
    categoryRepository;
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
    }
    async createCategory(createCategoryDto) {
        let codeExistsException = false;
        try {
            const codeExists = await this.categoryRepository.getCategoryByName(createCategoryDto.name);
            if (codeExists.length > 0) {
                codeExistsException = true;
                throw winston_1.exceptions;
            }
            else {
                const result = await this.categoryRepository.insertCategory(createCategoryDto);
                return result;
            }
        }
        catch (error) {
            console.error('Error creating Category:', error);
            if (codeExistsException) {
                const appException = new app_exception_1.AppException('Bad Request', 'Code Already Exists', common_1.HttpStatus.BAD_REQUEST, true);
                throw appException;
            }
            else {
                const appException = new app_exception_1.AppException('Internal server error', 'An unexpected error occurred', common_1.HttpStatus.INTERNAL_SERVER_ERROR, true);
                throw appException;
            }
        }
    }
};
CreateCategoryUseCase = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [category_repository_1.CategoryRepository])
], CreateCategoryUseCase);
exports.default = CreateCategoryUseCase;
//# sourceMappingURL=create-category.usecase.js.map