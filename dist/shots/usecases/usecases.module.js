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
const shot_repository_1 = require("../shot.repository");
const get_shot_usecase_1 = __importDefault(require("./get-shot.usecase"));
const create_shot_usecase_1 = __importDefault(require("./create-shot.usecase"));
const delete_shot_usecase_1 = __importDefault(require("./delete-shot.usecase"));
const update_shot_usecase_1 = __importDefault(require("./update-shot.usecase"));
let UsecasesModule = class UsecasesModule {
};
UsecasesModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        providers: [shot_repository_1.ShotRepository, get_shot_usecase_1.default, create_shot_usecase_1.default, delete_shot_usecase_1.default, update_shot_usecase_1.default],
        exports: [get_shot_usecase_1.default, create_shot_usecase_1.default, delete_shot_usecase_1.default, update_shot_usecase_1.default],
    })
], UsecasesModule);
exports.UsecasesModule = UsecasesModule;
//# sourceMappingURL=usecases.module.js.map