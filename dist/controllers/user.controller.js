"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllUserController = GetAllUserController;
exports.GetContactController = GetContactController;
const user_service_1 = require("../services/user.service");
function GetAllUserController(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const users = yield (0, user_service_1.GetAllUserService)();
            res.status(200).send({
                message: `Get all user success`,
                data: users,
            });
        }
        catch (err) {
            next(err);
        }
    });
}
function GetContactController(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const contact = yield (0, user_service_1.GetContactService)();
            res.status(200).send({
                message: `Get contact success`,
                data: contact,
            });
        }
        catch (err) {
            next(err);
        }
    });
}
