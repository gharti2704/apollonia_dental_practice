import { Database } from './db/Dabase';
import { Employee } from './model/Employee';

export const db = new Database();
export const employeeModel = new Employee().employeeModel;
