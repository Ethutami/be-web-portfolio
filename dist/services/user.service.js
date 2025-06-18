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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllUserService = GetAllUserService;
exports.GetContactService = GetContactService;
exports.GetUserByIdServices = GetUserByIdServices;
const db_1 = __importDefault(require("../config/db"));
function GetAllUserService() {
    return __awaiter(this, void 0, void 0, function* () {
        const users = yield db_1.default.users.findMany();
        if (!users)
            throw new Error("No Users Yet");
        return users;
    });
}
function GetContactService() {
    return __awaiter(this, void 0, void 0, function* () {
        const contact = yield db_1.default.contacts.findMany();
        if (!contact)
            throw new Error("No contact yet");
        return contact;
    });
}
function GetUserByIdServices(params) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield db_1.default.users.findUnique({
                where: { id: params }
            });
            if (!user)
                throw new Error(`User not found`);
            return user;
        }
        catch (error) {
            throw error;
        }
    });
}
