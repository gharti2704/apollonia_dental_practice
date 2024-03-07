import { Model } from 'mongoose';
import { IEmployee, IEmployeeModel } from '../../data,/model/interface';
import { IEmployeeService } from '../interface/IEmployeeService';

export class EmployeeService implements IEmployeeService {
  private employee_model: Model<IEmployeeModel>;

  constructor(employeeModel: Model<IEmployeeModel>) {
    this.employee_model = employeeModel;
  }

  public addEmployee = async (employee: IEmployee): Promise<IEmployee> => {
    return (await this.employee_model.create(employee)).toObject();
  };

  public removeEmployee = async (employeeId: string): Promise<IEmployee> => {
    const employee = await this.employee_model.findByIdAndDelete(employeeId);
    if (!employee) {
      throw new Error('Employee not found');
    }
    return employee.toObject();
  };

  public updateEmployee = async (employee: IEmployee): Promise<IEmployee> => {
    const updatedEmployee = await this.employee_model.findByIdAndUpdate(
      employee.id,
      employee,
      {
        new: true,
      }
    );

    if (!updatedEmployee) {
      throw new Error('Employee not found');
    }

    return updatedEmployee.toObject();
  };

  public getEmployee = async (employeeId: string): Promise<IEmployee> => {
    const employee = await this.employee_model.findById(employeeId);
    if (!employee) {
      throw new Error('Employee not found');
    }
    return employee.toObject();
  };

  public getAllEmployees = async (): Promise<IEmployee[]> => {
    return await this.employee_model.find();
  };
}
