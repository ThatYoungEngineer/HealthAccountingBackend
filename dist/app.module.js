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
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const joi_1 = __importDefault(require("joi"));
const database_module_1 = require("./common/config/database/database.module");
const hello_module_1 = require("./hello/hello.module");
const shot_module_1 = require("./shots/shot.module");
const xray_module_1 = require("./xrays/xray.module");
const labs_module_1 = require("./labs/labs.module");
const procedure_module_1 = require("./procedures/procedure.module");
const tests_module_1 = require("./tests/tests.module");
const user_module_1 = require("./user/user.module");
const auth_module_1 = require("./auth/auth.module");
const category_module_1 = require("./category/category.module");
const configValidationSchema = joi_1.default.object({
    NODE_ENV: joi_1.default
        .string()
        .valid('development', 'test', 'sandbox', 'live')
        .required(),
    PORT: joi_1.default.number().required().default(3000),
    DB_HOST: joi_1.default.string().required(),
    DB_USER: joi_1.default.string().required(),
    DB_PASSWORD: joi_1.default.string().required(),
    DB_NAME: joi_1.default.string().required(),
    DB_CONNECTION_LIMIT: joi_1.default.number().required(),
    DB_PORT: joi_1.default.number().required().default(5432),
});
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                validationSchema: configValidationSchema,
            }),
            database_module_1.DatabaseModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: async (configService) => ({
                    host: configService.get('DB_HOST'),
                    port: configService.get('DB_PORT'),
                    database: configService.get('DB_NAME'),
                    username: (configService.get('DB_USER')),
                    password: (configService.get('DB_PASSWORD')),
                    connectionLimit: configService.get('DB_CONNECTION_LIMIT'),
                }),
            }),
            hello_module_1.HelloModule,
            shot_module_1.ShotModule,
            xray_module_1.XrayModule,
            tests_module_1.TestsModule,
            procedure_module_1.ProceduresModule,
            labs_module_1.LabsModule,
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            category_module_1.CategoryModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map