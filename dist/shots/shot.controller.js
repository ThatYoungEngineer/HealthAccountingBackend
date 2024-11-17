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
exports.ShotController = void 0;
const common_1 = require("@nestjs/common");
const get_shot_usecase_1 = __importDefault(require("./usecases/get-shot.usecase"));
const create_shot_usecase_1 = __importDefault(require("./usecases/create-shot.usecase"));
const update_shot_usecase_1 = __importDefault(require("./usecases/update-shot.usecase"));
const delete_shot_usecase_1 = __importDefault(require("./usecases/delete-shot.usecase"));
const update_shot_dto_1 = require("./dto/update-shot.dto");
let ShotController = class ShotController {
    getShotUseCase;
    createShotUseCase;
    updateShotUseCase;
    deleteShotUseCase;
    constructor(getShotUseCase, createShotUseCase, updateShotUseCase, deleteShotUseCase) {
        this.getShotUseCase = getShotUseCase;
        this.createShotUseCase = createShotUseCase;
        this.updateShotUseCase = updateShotUseCase;
        this.deleteShotUseCase = deleteShotUseCase;
    }
    async get() {
        return this.getShotUseCase.getShots();
    }
    async getByCategoryID(category_id) {
        return this.getShotUseCase.getShotsByCategoryID(category_id);
    }
    async post(createShotDto) {
        try {
            return await this.createShotUseCase.createShot(createShotDto);
        }
        catch (error) {
            return error;
        }
    }
    async put(id, category_id, updateShotDto) {
        try {
            return await this.updateShotUseCase.updateShot(id, category_id, updateShotDto);
        }
        catch (error) {
            return 'Error during update:' + error;
        }
    }
    async deete(id, category_id) {
        try {
            return await this.deleteShotUseCase.deleteShot(id, category_id);
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
], ShotController.prototype, "get", null);
__decorate([
    (0, common_1.Get)('getByCategoryID/:category_id'),
    __param(0, (0, common_1.Param)('category_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ShotController.prototype, "getByCategoryID", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], ShotController.prototype, "post", null);
__decorate([
    (0, common_1.Put)(':id/:category_id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('category_id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, update_shot_dto_1.UpdateShotDto]),
    __metadata("design:returntype", Promise)
], ShotController.prototype, "put", null);
__decorate([
    (0, common_1.Delete)(':id/:category_id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('category_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], ShotController.prototype, "deete", null);
ShotController = __decorate([
    (0, common_1.Controller)('shots'),
    __metadata("design:paramtypes", [get_shot_usecase_1.default, create_shot_usecase_1.default,
        update_shot_usecase_1.default, delete_shot_usecase_1.default])
], ShotController);
exports.ShotController = ShotController;
//# sourceMappingURL=shot.controller.js.map