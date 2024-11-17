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
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const cache_options_type_1 = require("./cache-options.type");
const ioredis_1 = require("ioredis");
let CacheService = class CacheService {
    options;
    cacheConn;
    constructor(options) {
        this.options = options;
        if (this.options.environment === 'development') {
            this.cacheConn = new ioredis_1.Redis({
                port: 3000,
                host: this.options.host,
                username: this.options.username,
                password: this.options.password,
                db: this.options.db,
            });
        }
        else {
            this.cacheConn = new ioredis_1.Cluster([{ host: this.options.host, port: this.options.port }], {
                redisOptions: {
                    username: this.options.username,
                    password: this.options.password,
                    db: this.options.db,
                },
            });
        }
    }
    async set(key, value, seconds) {
        const res = await this.cacheConn.set(key, value, 'EX', seconds);
        return res === 'OK';
    }
    async get(key) {
        return await this.cacheConn.get(key);
    }
    async del(key) {
        await this.cacheConn.del([key]);
        return true;
    }
};
CacheService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(cache_options_type_1.CACHE_CONFIG_OPTIONS)),
    __metadata("design:paramtypes", [Object])
], CacheService);
exports.default = CacheService;
//# sourceMappingURL=cache.service.js.map