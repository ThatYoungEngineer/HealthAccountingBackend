import { AWSOptions } from './aws-options.type';
export default class AWSService {
    private options;
    private batchWithdrawalBucket;
    private s3Client;
    constructor(options: AWSOptions);
    getBatchWithdrawalFileUrl(fileName: string): Promise<string>;
}
