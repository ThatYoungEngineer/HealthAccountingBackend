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
var CacheModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheModule = void 0;
const common_1 = require("@nestjs/common");
const cache_options_type_1 = require("./cache-options.type");
const cache_service_1 = __importDefault(require("./cache.service"));
let CacheModule = CacheModule_1 = class CacheModule {
    static forRoot(options) {
        return {
            module: CacheModule_1,
            providers: [
                {
                    provide: cache_options_type_1.CACHE_CONFIG_OPTIONS,
                    useValue: options,
                },
                cache_service_1.default,
            ],
            exports: [cache_service_1.default],
        };
    }
    static forRootAsync(options) {
        return {
            module: CacheModule_1,
            imports: options.imports,
            providers: [
                {
                    provide: cache_options_type_1.CACHE_CONFIG_OPTIONS,
                    useFactory: options.useFactory,
                    inject: options.inject,
                },
                cache_service_1.default,
            ],
            exports: [cache_service_1.default],
        };
    }
};
CacheModule = CacheModule_1 = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [],
        exports: [],
    })
], CacheModule);
exports.CacheModule = CacheModule;
//# sourceMappingURL=cache.module.js.map