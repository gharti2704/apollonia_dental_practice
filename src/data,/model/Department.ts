import { model, Model, Schema } from 'mongoose';
import { IDepartmentModel } from './interface';

export class Department {
  private department_model = Model<IDepartmentModel>;
  constructor() {
    const departmentSchema = new Schema<IDepartmentModel>(
      {
        name: {
          type: String,
          required: true,
          unique: true,
        },
        employees: [
          {
            type: Schema.Types.ObjectId,
            ref: 'Employee',
          },
        ],
      },
      { timestamps: true }
    );
    this.department_model = model<IDepartmentModel>(
      'Department',
      departmentSchema
    );
  }
}
