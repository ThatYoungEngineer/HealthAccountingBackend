import { QueueOptions } from './queue-options.type';
export default class QueueService {
    private options;
    private connectionPromise;
    private connection;
    constructor(options: QueueOptions);
    sendToQueue(queueName: string, message: string): Promise<boolean>;
}
