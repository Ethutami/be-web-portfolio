"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WEB_PRODUCTION_URL = exports.FE_URL = exports.PORT = void 0;
require("dotenv/config");
_a = process.env, exports.PORT = _a.PORT, exports.FE_URL = _a.FE_URL, exports.WEB_PRODUCTION_URL = _a.WEB_PRODUCTION_URL;
