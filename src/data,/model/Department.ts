import {model, Model, Schema} from "mongoose";
import {IDepartment} from "./interface";

export class Department {
    private department_model = Model<IDepartment>;
    constructor() {
        const departmentSchema = new Schema<IDepartment>(
            {
                name: {
                    type: String,
                    required: true,
                    unique: true
                },
                employees: [{
                    type: Schema.Types.ObjectId,
                    ref: 'Employee'
                }]
            },
            { timestamps: true }
        );
        this.department_model = model<IDepartment>('Department', departmentSchema);
    }
}