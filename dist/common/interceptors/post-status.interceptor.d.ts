import { CallHandler, ExecutionContext } from '@nestjs/common';
export declare class PostStatusInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): import("rxjs").Observable<any>;
}
