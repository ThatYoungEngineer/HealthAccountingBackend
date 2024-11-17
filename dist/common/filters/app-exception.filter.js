"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const app_exception_1 = require("../exception/app.exception");
let AppExceptionFilter = class AppExceptionFilter {
    catch(exception, host) {
        common_1.Logger.error(exception);
        const ctx = host.switchToHttp();
        const request = ctx.getRequest();
        const response = ctx.getResponse();
        let untrustedException = false;
        if (exception instanceof app_exception_1.AppException) {
            const appException = exception;
            response.status(appException.getStatus()).json({
                statusCode: appException.getStatus(),
                message: appException.externalMessage,
            });
            untrustedException = !appException.isOperational;
        }
        else if (exception instanceof common_1.HttpException) {
            response.status(exception.getStatus()).json({
                statusCode: exception.getStatus(),
                message: exception.message,
            });
        }
        else {
            response.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({
                statusCode: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                message: 'Internal Server Error',
            });
            untrustedException = true;
        }
        if (untrustedException) {
            common_1.Logger.error(`Untrusted Exception, Nest Process will exit`);
            process.exit(1);
        }
    }
};
AppExceptionFilter = __decorate([
    (0, common_1.Catch)()
], AppExceptionFilter);
exports.AppExceptionFilter = AppExceptionFilter;
//# sourceMappingURL=app-exception.filter.js.map