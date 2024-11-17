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
var AWSModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSModule = void 0;
const common_1 = require("@nestjs/common");
const aws_options_type_1 = require("./aws-options.type");
const aws_service_1 = __importDefault(require("./aws.service"));
let AWSModule = AWSModule_1 = class AWSModule {
    static forRoot(options) {
        return {
            module: AWSModule_1,
            providers: [
                {
                    provide: aws_options_type_1.AWS_CONFIG_OPTIONS,
                    useValue: options,
                },
                aws_service_1.default,
            ],
            exports: [aws_service_1.default],
        };
    }
    static forRootAsync(options) {
        return {
            module: AWSModule_1,
            imports: options.imports,
            providers: [
                {
                    provide: aws_options_type_1.AWS_CONFIG_OPTIONS,
                    useFactory: options.useFactory,
                    inject: options.inject,
                },
                aws_service_1.default,
            ],
            exports: [aws_service_1.default],
        };
    }
};
AWSModule = AWSModule_1 = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [],
        exports: [],
    })
], AWSModule);
exports.AWSModule = AWSModule;
//# sourceMappingURL=aws.module.js.map