"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const router = (0, express_1.Router)();
router.get("/", user_controller_1.GetAllUserController);
router.get("/contact", user_controller_1.GetContactController);
router.get('/:id', user_controller_1.GetUserByIdController);
exports.default = router;
