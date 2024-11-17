"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const cls_rtracer_1 = __importDefault(require("cls-rtracer"));
const helmet_1 = __importDefault(require("helmet"));
const compression_1 = __importDefault(require("compression"));
const app_exception_filter_1 = require("./common/filters/app-exception.filter");
const common_1 = require("@nestjs/common");
const options_middleware_1 = require("./common/middlewares/options.middleware");
BigInt.prototype['toJSON'] = function () {
    return this.toString();
};
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    if (process.env.NODE_ENV === 'development') {
        const allowedOrigins = ['http://localhost:4200', 'http://localhost:4300'];
        const options = {
            origin: allowedOrigins,
            credentials: true,
            preflightContinue: false,
            optionsSuccessStatus: common_1.HttpStatus.OK,
        };
        app.enableCors(options);
    }
    app.use(options_middleware_1.optionsMiddleware);
    app.setGlobalPrefix('api');
    app.use((0, helmet_1.default)());
    app.use((0, compression_1.default)());
    app.use(cls_rtracer_1.default.expressMiddleware({
        useHeader: true,
        headerName: 'x-request-id',
    }));
    app.useGlobalFilters(new app_exception_filter_1.AppExceptionFilter());
    await app.listen(process.env.PORT, () => {
        common_1.Logger.log(`Running on http://localhost:${process.env.PORT}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map