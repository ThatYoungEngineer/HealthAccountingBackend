/// <reference types="node" />
import 'dotenv/config';
declare function encrypt(data: string, _key?: Buffer, _iv?: Buffer): string;
declare function decrypt(encryptedData?: string): string;
declare function sign(params: any, secretKey: string): string;
export { encrypt, decrypt, sign };
