import { IEmployee } from '../../data,/model/interface';

export interface IEmployeeService {
  addEmployee(employee: IEmployee): Promise<IEmployee>;
  removeEmployee(employeeId: string): Promise<IEmployee>;
  updateEmployee(employee: IEmployee): Promise<IEmployee>;
  getEmployee(employeeId: string): Promise<IEmployee>;
  getAllEmployees(): Promise<IEmployee[]>;
}
