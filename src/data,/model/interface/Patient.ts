import {IPatient} from "./index";
import {model, Model, Schema} from "mongoose";

export class Patient {
    private patient_model = Model<IPatient>;
    constructor() {
        const patientSchema = new Schema<IPatient>(
            {
                name: {
                    type: String,
                    required: true,
                },
                assignedDoctor: {
                    type: Schema.Types.ObjectId,
                    ref: 'Employee',
                    required: true
                }
            },
            { timestamps: true }
        );
        this.patient_model = model<IPatient>('Patient', patientSchema);
    }
}