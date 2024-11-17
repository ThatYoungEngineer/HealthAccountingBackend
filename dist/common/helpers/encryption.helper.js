"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sign = exports.decrypt = exports.encrypt = void 0;
const crypto_1 = __importDefault(require("crypto"));
require("dotenv/config");
const { KEY, IV } = process.env;
const algorithm = 'aes-256-cbc';
const key = Buffer.from(KEY, 'hex');
const iv = Buffer.from(IV, 'hex');
function encrypt(data, _key, _iv) {
    if (!data)
        return '';
    const cipher = crypto_1.default.createCipheriv(algorithm, Buffer.from(_key ?? key), _iv ?? iv);
    let encrypted = cipher.update(data);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return encrypted.toString('hex');
}
exports.encrypt = encrypt;
function decrypt(encryptedData) {
    if (!encryptedData)
        return '';
    const encryptedText = Buffer.from(encryptedData, 'hex');
    const decipher = crypto_1.default.createDecipheriv(algorithm, Buffer.from(key), iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
}
exports.decrypt = decrypt;
function sign(params, secretKey) {
    const arrayParams = [];
    Object.entries(params).forEach(([key, value]) => arrayParams.push({ key: key, value: value }));
    const sorted = arrayParams.sort((a, b) => (a.key > b.key ? 1 : -1));
    const signatureString = sorted.map((x) => x.key + '=' + x.value).join('|') + secretKey;
    const signature = crypto_1.default
        .createHash('sha256')
        .update(signatureString)
        .digest('hex');
    return signature;
}
exports.sign = sign;
//# sourceMappingURL=encryption.helper.js.map