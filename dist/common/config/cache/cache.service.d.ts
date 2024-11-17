import { CacheOptions } from './cache-options.type';
export default class CacheService {
    private options;
    private cacheConn;
    constructor(options: CacheOptions);
    set(key: string, value: string, seconds: number): Promise<boolean>;
    get(key: string): Promise<string>;
    del(key: string): Promise<boolean>;
}
