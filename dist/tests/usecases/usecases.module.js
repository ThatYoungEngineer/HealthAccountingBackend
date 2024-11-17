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
const tests_repository_1 = require("../tests.repository");
const get_tests_usecase_1 = __importDefault(require("./get-tests.usecase"));
const create_tests_usecase_1 = __importDefault(require("./create-tests.usecase"));
const delete_tests_usecase_1 = __importDefault(require("./delete-tests.usecase"));
const update_tests_usecase_1 = __importDefault(require("./update-tests.usecase"));
let UsecasesModule = class UsecasesModule {
};
UsecasesModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        providers: [tests_repository_1.TestsRepository, get_tests_usecase_1.default, create_tests_usecase_1.default, delete_tests_usecase_1.default, update_tests_usecase_1.default],
        exports: [get_tests_usecase_1.default, create_tests_usecase_1.default, delete_tests_usecase_1.default, update_tests_usecase_1.default],
    })
], UsecasesModule);
exports.UsecasesModule = UsecasesModule;
//# sourceMappingURL=usecases.module.js.map