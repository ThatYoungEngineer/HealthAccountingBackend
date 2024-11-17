import { DynamicModule } from '@nestjs/common';
import { DatabaseOptions, DatabaseAsyncOptions } from './database-options.type';
export declare class DatabaseModule {
    static forRoot(options: DatabaseOptions): DynamicModule;
    static forRootAsync(options: DatabaseAsyncOptions): DynamicModule;
}
