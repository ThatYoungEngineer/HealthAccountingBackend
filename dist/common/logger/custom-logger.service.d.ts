import { LoggerService } from '@nestjs/common';
import 'winston-daily-rotate-file';
import { ConfigService } from '@nestjs/config';
export declare class CustomLoggerService implements LoggerService {
    private logger;
    constructor(configService: ConfigService);
    private getRequestId;
    log(message: any, ...optionalParams: any[]): void;
    error(message: any, ...optionalParams: any[]): void;
    warn(message: any, ...optionalParams: any[]): void;
    debug?(message: any, ...optionalParams: any[]): void;
}
