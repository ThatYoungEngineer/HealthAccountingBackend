"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.optionsMiddleware = void 0;
const common_1 = require("@nestjs/common");
function optionsMiddleware(req, res, next) {
    if (req.method == 'OPTIONS') {
        res.status(common_1.HttpStatus.OK);
        res.set({
            'Content-Type': 'text/plain',
            'Content-Length': '0',
        });
        res.send();
        res.end();
    }
    else
        next();
}
exports.optionsMiddleware = optionsMiddleware;
//# sourceMappingURL=options.middleware.js.map