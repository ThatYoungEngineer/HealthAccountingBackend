"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var DatabaseModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const db_service_1 = require("./db.service");
const database_options_type_1 = require("./database-options.type");
let DatabaseModule = DatabaseModule_1 = class DatabaseModule {
    static forRoot(options) {
        return {
            module: DatabaseModule_1,
            providers: [
                {
                    provide: database_options_type_1.DATABASE_CONFIG_OPTIONS,
                    useValue: options,
                },
                db_service_1.DbService,
            ],
            exports: [db_service_1.DbService],
        };
    }
    static forRootAsync(options) {
        return {
            module: DatabaseModule_1,
            imports: options.imports,
            providers: [
                {
                    provide: database_options_type_1.DATABASE_CONFIG_OPTIONS,
                    useFactory: options.useFactory,
                    inject: options.inject,
                },
                db_service_1.DbService,
            ],
            exports: [db_service_1.DbService],
        };
    }
};
DatabaseModule = DatabaseModule_1 = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [],
        exports: [],
    })
], DatabaseModule);
exports.DatabaseModule = DatabaseModule;
//# sourceMappingURL=database.module.js.map