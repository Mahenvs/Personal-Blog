"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const edge_1 = require("@prisma/client/edge");
const extension_accelerate_1 = require("@prisma/extension-accelerate");
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    const prisma = new edge_1.PrismaClient({
        datasourceUrl: process.env.DATABASE_URL,
    }).$extends((0, extension_accelerate_1.withAccelerate)());
    // prisma.$connect()
    res.send("Success");
});
app.post('/api/v1/user/signup', (req, res) => {
    res.send("Success1");
});
app.post('/api/v1/user/signin', (req, res) => {
    res.send("Success2");
});
app.post('/api/v1/blog', (req, res) => {
    res.send("Success");
});
app.put('/api/v1/blog', (req, res) => {
});
app.get('/api/v1/blog/:id', (req, res) => {
});
app.post('/post', (req, res) => {
    res.json("Final response");
});
app.listen(port, () => {
    console.log("Listening on port ", port);
});
//# sourceMappingURL=index.js.map