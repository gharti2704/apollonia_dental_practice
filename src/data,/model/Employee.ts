import {IEmployee} from "./interface";
import {model, Model, Schema} from "mongoose";

export class Employee {
    private employee_model = Model<IEmployee>;
    constructor(){
        const employeeSchema = new Schema<IEmployee>(
            {
                name: {
                    type: String,
                    required: true,
                },
                department: {
                    type: Schema.Types.ObjectId,
                    ref: 'Department',
                    required: true
                },
                patients: [{
                    type: Schema.Types.ObjectId,
                    ref: 'Patient'
                }],
                projects: [{
                    type: String
                }]
            },
            { timestamps: true }
        );
        this.employee_model = model<IEmployee>('Employee', employeeSchema);
    }
}