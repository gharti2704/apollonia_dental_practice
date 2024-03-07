import { Schema, Document } from 'mongoose';

// MODEL INTERFACES
export interface IEmployeeModel extends Document {
  name: string;
  department: Schema.Types.ObjectId;
  patients: Schema.Types.ObjectId[];
  projects: string[];
}

export interface IDepartmentModel extends Document {
  name: string;
  employees: Schema.Types.ObjectId[];
}

export interface IPatientModel extends Document {
  name: string;
  assignedDoctor: Schema.Types.ObjectId;
}

// SERVICE INTERFACES
export interface IEmployee {
  id: string;
  name: string;
  department: string;
  patients?: string[];
  projects?: string[];
}

export interface IDepartment {
  id: string;
  name: string;
  employees?: string[];
}

export interface IPatient {
  id: string;
  name: string;
  assignedDoctor: string;
}
