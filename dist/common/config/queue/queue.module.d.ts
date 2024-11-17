import { DynamicModule } from '@nestjs/common';
import { QueueAsyncOptions, QueueOptions } from './queue-options.type';
export declare class QueueModule {
    static forRoot(options: QueueOptions): DynamicModule;
    static forRootAsync(options: QueueAsyncOptions): DynamicModule;
}
