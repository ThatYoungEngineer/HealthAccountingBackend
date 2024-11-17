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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomLoggerService = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const winston_1 = require("winston");
require("winston-daily-rotate-file");
const cls_rtracer_1 = __importDefault(require("cls-rtracer"));
const config_1 = require("@nestjs/config");
let CustomLoggerService = class CustomLoggerService {
    logger;
    constructor(configService) {
        const logDir = configService.get('LOG_DIR');
        const logFileName = configService.get('LOG_FILENAME');
        this.logger = nest_winston_1.WinstonModule.createLogger({
            format: winston_1.format.combine(winston_1.format.timestamp(), winston_1.format.json()),
            transports: [
                new winston_1.transports.DailyRotateFile({
                    level: 'info',
                    filename: `${logDir}/${logFileName}-%DATE%.info.log`,
                    datePattern: 'YYYY-MM-DD-HH',
                    zippedArchive: true,
                    maxSize: '20m',
                    maxFiles: '14d',
                }),
                new winston_1.transports.DailyRotateFile({
                    level: 'error',
                    filename: `${logDir}/${logFileName}-%DATE%.error.log`,
                    datePattern: 'YYYY-MM-DD-HH',
                    zippedArchive: true,
                    maxSize: '20m',
                    maxFiles: '14d',
                }),
            ],
        });
    }
    getRequestId() {
        const rid = cls_rtracer_1.default.id();
        return rid;
    }
    log(message, ...optionalParams) {
        const reqId = this.getRequestId();
        if (reqId)
            this.logger.log(message, { reqId: this.getRequestId() });
        else
            this.logger.log(message);
    }
    error(message, ...optionalParams) {
        const reqId = this.getRequestId();
        if (reqId)
            this.logger.error(message, {
                reqId: this.getRequestId(),
                stack: message.stack,
            });
        else
            this.logger.error(message);
    }
    warn(message, ...optionalParams) {
        const reqId = this.getRequestId();
        if (reqId)
            this.logger.log(message, { reqId: this.getRequestId() });
        else
            this.logger.log(message);
    }
    debug(message, ...optionalParams) {
        const reqId = this.getRequestId();
        if (reqId)
            this.logger.debug(message, { reqId: this.getRequestId() });
        else
            this.logger.debug(message);
    }
};
CustomLoggerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], CustomLoggerService);
exports.CustomLoggerService = CustomLoggerService;
//# sourceMappingURL=custom-logger.service.js.map