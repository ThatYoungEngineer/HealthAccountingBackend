"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const aws_options_type_1 = require("./aws-options.type");
const client_s3_1 = require("@aws-sdk/client-s3");
const s3_request_presigner_1 = require("@aws-sdk/s3-request-presigner");
const mime_types_1 = __importDefault(require("mime-types"));
let AWSService = class AWSService {
    options;
    batchWithdrawalBucket;
    s3Client;
    constructor(options) {
        this.options = options;
        this.s3Client = new client_s3_1.S3Client({
            region: options.region,
            credentials: {
                accessKeyId: options.accessKeyId,
                secretAccessKey: options.secretAccessKey,
            },
        });
        this.batchWithdrawalBucket = options.batchWithdrawalBucket;
    }
    async getBatchWithdrawalFileUrl(fileName) {
        try {
            const headObjectInput = {
                Bucket: this.batchWithdrawalBucket,
                Key: fileName,
            };
            const headObjectCommand = new client_s3_1.HeadObjectCommand(headObjectInput);
            await this.s3Client.send(headObjectCommand);
            const getObjectInput = {
                Bucket: this.batchWithdrawalBucket,
                Key: fileName,
                ResponseContentType: mime_types_1.default.lookup(fileName),
                Expires: 60,
            };
            const getObjectCommand = new client_s3_1.GetObjectCommand(getObjectInput);
            const url = await (0, s3_request_presigner_1.getSignedUrl)(this.s3Client, getObjectCommand);
            return url;
        }
        catch (error) {
            common_1.Logger.error('Unable to get S3 file url ' + fileName + '. Error: ' + error);
            return null;
        }
    }
};
AWSService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(aws_options_type_1.AWS_CONFIG_OPTIONS)),
    __metadata("design:paramtypes", [Object])
], AWSService);
exports.default = AWSService;
//# sourceMappingURL=aws.service.js.map