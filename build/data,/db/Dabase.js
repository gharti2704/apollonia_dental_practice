"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const mongoose_1 = require("mongoose");
class Database {
    initDb = async () => {
        try {
            console.log(process.env.MONGODB_URI);
            await (0, mongoose_1.connect)(process.env.MONGODB_URI || '');
            console.log('Connected to MongoDB database');
        }
        catch (error) {
            console.log(`Unable to connect to database, error:  ${error}`);
        }
    };
}
exports.Database = Database;
//# sourceMappingURL=Dabase.js.map