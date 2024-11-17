import { DynamicModule } from '@nestjs/common';
import { AWSAsyncOptions, AWSOptions } from './aws-options.type';
export declare class AWSModule {
    static forRoot(options: AWSOptions): DynamicModule;
    static forRootAsync(options: AWSAsyncOptions): DynamicModule;
}
