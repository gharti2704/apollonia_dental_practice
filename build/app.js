"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
// import router from './route/auth.js';
// import { db } from './data/index.js';
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, morgan_1.default)('dev'));
// app.use(cors());
if (process.env.NODE_ENV === 'development') {
    app.use((0, cors_1.default)({
        origin: process.env.DEVELOPMENT_CLIENT_URL,
    }));
}
else if (process.env.NODE_ENV === 'production') {
    app.use((0, cors_1.default)({
        origin: process.env.PRODUCTION_CLIENT_URL,
    }));
}
// app.use('/api/auth', router);
app.get('/api', (req, res) => {
    res.send('Hello World');
});
app.post('/api/department', (req, res) => {
    const department = req.body;
    console.log(department);
    res.send({ message: 'Department created', department });
});
app.post('/api/employee', (req, res) => {
    const employee = req.body;
    console.log(employee);
    res.send({ message: 'Employee created', employee });
});
const port = process.env.PORT || 8000;
app.listen(port, async () => {
    console.log(`Server is running on http://localhost:${port} - ${process.env.NODE_ENV} mode`);
    // await db.initDb();
});
//# sourceMappingURL=app.js.map