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
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const app = (0, express_1.default)();
const clint = new client_1.PrismaClient();
app.get("/users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield clint.user.findMany();
    res.json({
        users
    });
}));
app.get("/todos/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const user = yield clint.user.findFirst({
        where: {
            id: parseInt(id),
        },
        select: {
            todos: true,
            username: true,
            password: true,
        }
    });
    res.json({
        user
    });
}));
app.listen(3000);
function getUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield clint.user.findFirst({
            where: {
                id: 1,
            },
        });
        console.log(user);
    });
}
getUser();
