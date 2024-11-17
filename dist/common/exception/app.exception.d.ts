import { HttpException, HttpStatus } from '@nestjs/common';
export declare class AppException extends HttpException {
    readonly internalMessage: string;
    readonly externalMessage: string;
    readonly httpStatus: HttpStatus;
    readonly isOperational: boolean;
    constructor(internalMessage: any, externalMessage: any, httpStatus: HttpStatus, isOperational: boolean);
}
