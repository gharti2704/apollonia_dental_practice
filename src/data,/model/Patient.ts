import { IPatientModel } from './interface/index';
import { model, Model, Schema } from 'mongoose';

export class Patient {
  private patient_model = Model<IPatientModel>;
  constructor() {
    const patientSchema = new Schema<IPatientModel>(
      {
        name: {
          type: String,
          required: true,
        },
        assignedDoctor: {
          type: Schema.Types.ObjectId,
          ref: 'Employee',
          required: true,
        },
      },
      { timestamps: true }
    );
    this.patient_model = model<IPatientModel>('Patient', patientSchema);
  }

  get patientModel(): Model<IPatientModel> {
    return this.patient_model as Model<IPatientModel>;
  }
}
