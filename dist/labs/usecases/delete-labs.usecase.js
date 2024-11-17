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
const labs_repository_1 = require("../labs.repository");
let DeleteLabsUseCase = class DeleteLabsUseCase {
    labsRepository;
    constructor(labsRepository) {
        this.labsRepository = labsRepository;
    }
    async deleteLabs(id, category_id) {
        try {
            const result = await this.labsRepository.deleteLabs(id, category_id);
            return result;
        }
        catch (error) {
            const appException = new app_exception_1.AppException('Internal server error', 'An unexpected error occurred', common_1.HttpStatus.INTERNAL_SERVER_ERROR, true);
            throw appException;
        }
    }
};
DeleteLabsUseCase = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [labs_repository_1.LabsRepository])
], DeleteLabsUseCase);
exports.default = DeleteLabsUseCase;
//# sourceMappingURL=delete-labs.usecase.js.map