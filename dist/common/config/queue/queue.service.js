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
const amqplib_1 = __importDefault(require("amqplib"));
const queue_options_type_1 = require("./queue-options.type");
let QueueService = class QueueService {
    options;
    connectionPromise;
    connection;
    constructor(options) {
        this.options = options;
        this.connectionPromise = amqplib_1.default
            .connect({
            protocol: this.options.protocol,
            hostname: this.options.hostname,
            username: this.options.username,
            password: this.options.password,
        })
            .catch((error) => {
            throw error;
        });
    }
    async sendToQueue(queueName, message) {
        if (!this.connection)
            this.connection = await this.connectionPromise;
        const channel = await this.connection.createChannel();
        await channel.assertQueue(queueName, { durable: true });
        return channel.sendToQueue(queueName, Buffer.from(message), {
            contentType: 'application/json',
        });
    }
};
QueueService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(queue_options_type_1.QUEUE_CONFIG_OPTIONS)),
    __metadata("design:paramtypes", [Object])
], QueueService);
exports.default = QueueService;
//# sourceMappingURL=queue.service.js.map