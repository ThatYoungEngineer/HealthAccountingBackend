import { DynamicModule } from '@nestjs/common';
import { CacheAsyncOptions, CacheOptions } from './cache-options.type';
export declare class CacheModule {
    static forRoot(options: CacheOptions): DynamicModule;
    static forRootAsync(options: CacheAsyncOptions): DynamicModule;
}
