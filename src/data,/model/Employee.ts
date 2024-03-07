import { IEmployeeModel } from './interface';
import { model, Model, Schema } from 'mongoose';

export class Employee {
  private employee_model = Model<IEmployeeModel>;
  constructor() {
    const employeeSchema = new Schema<IEmployeeModel>(
      {
        name: {
          type: String,
          required: true,
        },
        department: {
          type: Schema.Types.ObjectId,
          ref: 'Department',
          required: true,
        },
        patients: [
          {
            type: Schema.Types.ObjectId,
            ref: 'Patient',
          },
        ],
        projects: [
          {
            type: String,
          },
        ],
      },
      { timestamps: true }
    );
    this.employee_model = model<IEmployeeModel>('Employee', employeeSchema);
  }

  get employeeModel(): Model<IEmployeeModel> {
    return this.employee_model as Model<IEmployeeModel>;
  }
}
