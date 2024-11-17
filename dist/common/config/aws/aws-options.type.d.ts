import { ModuleMetadata } from '@nestjs/common';
import { FactoryProvider } from '@nestjs/common/interfaces/modules/provider.interface';
declare const AWS_CONFIG_OPTIONS = "AWS_CONFIG_OPTIONS";
interface AWSOptions {
    region: string;
    accessKeyId: string;
    secretAccessKey: string;
    batchWithdrawalBucket: string;
}
type AWSAsyncOptions = Pick<ModuleMetadata, 'imports'> & Pick<FactoryProvider<AWSOptions>, 'useFactory' | 'inject'>;
export { AWS_CONFIG_OPTIONS, AWSOptions, AWSAsyncOptions };
