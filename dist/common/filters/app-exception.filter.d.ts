import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
export declare class AppExceptionFilter implements ExceptionFilter {
    catch(exception: Error, host: ArgumentsHost): void;
}
