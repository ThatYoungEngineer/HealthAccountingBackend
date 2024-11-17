"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppException = void 0;
const common_1 = require("@nestjs/common");
class AppException extends common_1.HttpException {
    internalMessage;
    externalMessage;
    httpStatus;
    isOperational;
    constructor(internalMessage, externalMessage, httpStatus, isOperational) {
        super(externalMessage, httpStatus);
        this.internalMessage = internalMessage;
        this.externalMessage = externalMessage;
        this.httpStatus = httpStatus;
        this.isOperational = isOperational;
    }
}
exports.AppException = AppException;
//# sourceMappingURL=app.exception.js.map