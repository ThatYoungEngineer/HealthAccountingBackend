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
exports.LabsController = void 0;
const common_1 = require("@nestjs/common");
const get_labs_usecase_1 = __importDefault(require("./usecases/get-labs.usecase"));
const create_labs_usecase_1 = __importDefault(require("./usecases/create-labs.usecase"));
const update_labs_usecase_1 = __importDefault(require("./usecases/update-labs.usecase"));
const delete_labs_usecase_1 = __importDefault(require("./usecases/delete-labs.usecase"));
const update_labs_dto_1 = require("./dto/update-labs.dto");
let LabsController = class LabsController {
    getLabsUseCase;
    createLabsUseCase;
    updateLabsUseCase;
    deleteLabsUseCase;
    constructor(getLabsUseCase, createLabsUseCase, updateLabsUseCase, deleteLabsUseCase) {
        this.getLabsUseCase = getLabsUseCase;
        this.createLabsUseCase = createLabsUseCase;
        this.updateLabsUseCase = updateLabsUseCase;
        this.deleteLabsUseCase = deleteLabsUseCase;
    }
    async get() {
        return this.getLabsUseCase.getLabs();
    }
    async getByCategoryID(category_id) {
        return this.getLabsUseCase.getLabsByCategoryID(category_id);
    }
    async post(createLabsDto) {
        try {
            return await this.createLabsUseCase.createLabs(createLabsDto);
        }
        catch (error) {
            return error;
        }
    }
    async put(id, category_id, updateLabsDto) {
        try {
            return await this.updateLabsUseCase.updateLabs(id, category_id, updateLabsDto);
        }
        catch (error) {
            return 'Error during update:' + error;
        }
    }
    async deete(id, category_id) {
        try {
            return await this.deleteLabsUseCase.deleteLabs(id, category_id);
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
], LabsController.prototype, "get", null);
__decorate([
    (0, common_1.Get)('getByCategoryID/:category_id'),
    __param(0, (0, common_1.Param)('category_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LabsController.prototype, "getByCategoryID", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], LabsController.prototype, "post", null);
__decorate([
    (0, common_1.Put)(':id/:category_id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('category_id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, update_labs_dto_1.UpdateLabsDto]),
    __metadata("design:returntype", Promise)
], LabsController.prototype, "put", null);
__decorate([
    (0, common_1.Delete)(':id/:category_id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('category_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], LabsController.prototype, "deete", null);
LabsController = __decorate([
    (0, common_1.Controller)('labs'),
    __metadata("design:paramtypes", [get_labs_usecase_1.default, create_labs_usecase_1.default,
        update_labs_usecase_1.default, delete_labs_usecase_1.default])
], LabsController);
exports.LabsController = LabsController;
//# sourceMappingURL=labs.controller.js.map