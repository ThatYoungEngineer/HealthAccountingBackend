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
exports.ProcedureController = void 0;
const common_1 = require("@nestjs/common");
const get_procedure_usecase_1 = __importDefault(require("./usecases/get-procedure.usecase"));
const update_procedure_usecase_1 = __importDefault(require("./usecases/update-procedure.usecase"));
const create_procedure_usecase_1 = __importDefault(require("./usecases/create-procedure.usecase"));
const delete_procedure_usecase_1 = __importDefault(require("./usecases/delete-procedure.usecase"));
const update_procedure_dto_1 = require("./dto/update-procedure.dto");
let ProcedureController = class ProcedureController {
    getProcedureUseCase;
    createProcedureUseCase;
    updateProecdureUseCase;
    deleteProcedureUseCase;
    constructor(getProcedureUseCase, createProcedureUseCase, updateProecdureUseCase, deleteProcedureUseCase) {
        this.getProcedureUseCase = getProcedureUseCase;
        this.createProcedureUseCase = createProcedureUseCase;
        this.updateProecdureUseCase = updateProecdureUseCase;
        this.deleteProcedureUseCase = deleteProcedureUseCase;
    }
    async get() {
        return this.getProcedureUseCase.getProcedures();
    }
    async getByCategoryID(category_id) {
        return this.getProcedureUseCase.getProceduresByCategoryID(category_id);
    }
    async post(createProcedureDto) {
        try {
            return await this.createProcedureUseCase.createProcedure(createProcedureDto);
        }
        catch (error) {
            return error;
        }
    }
    async put(id, category_id, updateProcedureDto) {
        try {
            return await this.updateProecdureUseCase.updateProcedure(id, category_id, updateProcedureDto);
        }
        catch (error) {
            return 'Error during update:' + error;
        }
    }
    async deete(id, category_id) {
        try {
            return await this.deleteProcedureUseCase.deleteProcedure(id, category_id);
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
], ProcedureController.prototype, "get", null);
__decorate([
    (0, common_1.Get)('getByCategoryID/:category_id'),
    __param(0, (0, common_1.Param)('category_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProcedureController.prototype, "getByCategoryID", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], ProcedureController.prototype, "post", null);
__decorate([
    (0, common_1.Put)(':id/:category_id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('category_id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, update_procedure_dto_1.UpdateProcedureDto]),
    __metadata("design:returntype", Promise)
], ProcedureController.prototype, "put", null);
__decorate([
    (0, common_1.Delete)(':id/:category_id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('category_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], ProcedureController.prototype, "deete", null);
ProcedureController = __decorate([
    (0, common_1.Controller)('procedure'),
    __metadata("design:paramtypes", [get_procedure_usecase_1.default, create_procedure_usecase_1.default,
        update_procedure_usecase_1.default, delete_procedure_usecase_1.default])
], ProcedureController);
exports.ProcedureController = ProcedureController;
//# sourceMappingURL=procedure.controller.js.map