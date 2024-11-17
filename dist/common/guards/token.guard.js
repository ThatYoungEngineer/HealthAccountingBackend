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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenGuard = void 0;
const common_1 = require("@nestjs/common");
const app_exception_1 = require("../exception/app.exception");
const config_1 = require("@nestjs/config");
let TokenGuard = class TokenGuard {
    configService;
    constructor(configService) {
        this.configService = configService;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const reqToken = request.headers['x-request-api-token'];
        const envToken = this.configService.get('REQUEST_API_TOKEN');
        if (reqToken != envToken)
            throw new app_exception_1.AppException('Invalid Request Token', 'Authentication Error', common_1.HttpStatus.UNAUTHORIZED, true);
        return true;
    }
};
TokenGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], TokenGuard);
exports.TokenGuard = TokenGuard;
//# sourceMappingURL=token.guard.js.map