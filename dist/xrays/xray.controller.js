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
exports.XrayController = void 0;
const common_1 = require("@nestjs/common");
const get_xray_usecase_1 = __importDefault(require("./usecases/get-xray.usecase"));
const create_xray_usecase_1 = __importDefault(require("./usecases/create-xray.usecase"));
const update_xray_usecase_1 = __importDefault(require("./usecases/update-xray.usecase"));
const delete_xray_usecase_1 = __importDefault(require("./usecases/delete-xray.usecase"));
const update_xray_dto_1 = require("./dto/update-xray.dto");
let XrayController = class XrayController {
    getXrayUseCase;
    createXrayUseCase;
    updateXrayUseCase;
    deleteXrayUseCase;
    constructor(getXrayUseCase, createXrayUseCase, updateXrayUseCase, deleteXrayUseCase) {
        this.getXrayUseCase = getXrayUseCase;
        this.createXrayUseCase = createXrayUseCase;
        this.updateXrayUseCase = updateXrayUseCase;
        this.deleteXrayUseCase = deleteXrayUseCase;
    }
    async get() {
        return this.getXrayUseCase.getXrays();
    }
    async getByID(id) {
        return this.getXrayUseCase.getXrayByID(id);
    }
    async getByCategoryID(category_id) {
        return this.getXrayUseCase.getXrayByCategoryID(category_id);
    }
    async addXray(createXrayDto) {
        try {
            return await this.createXrayUseCase.createXray(createXrayDto);
        }
        catch (error) {
            return error;
        }
    }
    async put(id, category_id, updateXrayDto) {
        try {
            return await this.updateXrayUseCase.updateXrays(id, category_id, updateXrayDto);
        }
        catch (error) {
            return 'Error during update: ' + error;
        }
    }
    async deete(id, category_id) {
        try {
            return await this.deleteXrayUseCase.deleteXray(id, category_id);
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
], XrayController.prototype, "get", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], XrayController.prototype, "getByID", null);
__decorate([
    (0, common_1.Get)('getByCategoryID/:category_id'),
    __param(0, (0, common_1.Param)('category_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], XrayController.prototype, "getByCategoryID", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], XrayController.prototype, "addXray", null);
__decorate([
    (0, common_1.Put)(':id/:category_id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('category_id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, update_xray_dto_1.UpdateXrayDto]),
    __metadata("design:returntype", Promise)
], XrayController.prototype, "put", null);
__decorate([
    (0, common_1.Delete)(':id/:category_id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('category_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], XrayController.prototype, "deete", null);
XrayController = __decorate([
    (0, common_1.Controller)('xrays'),
    __metadata("design:paramtypes", [get_xray_usecase_1.default, create_xray_usecase_1.default,
        update_xray_usecase_1.default, delete_xray_usecase_1.default])
], XrayController);
exports.XrayController = XrayController;
//# sourceMappingURL=xray.controller.js.map