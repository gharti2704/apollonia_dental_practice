import {Schema, Document} from "mongoose";

export interface IEmployee extends Document {
    name: string;
    department: Schema.Types.ObjectId;
    patients: Schema.Types.ObjectId[];
    projects: string[];
}

export interface IDepartment extends Document {
    name: string;
    employees: Schema.Types.ObjectId[];
}

export interface IPatient extends Document {
    name: string;
    assignedDoctor: Schema.Types.ObjectId;
}