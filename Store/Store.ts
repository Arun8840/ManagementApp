import {create} from 'zustand';
import {
  Dashboard_CategoriesType,
  EmployeeTypes,
} from '../models/DashboardTypes';
import DashboardCategoies from '../components/Data/dashboardData.json';
import EmployeesData from '../components/Data/employees.json';
interface StateType {
  categories: Dashboard_CategoriesType[];
  employees: EmployeeTypes[];
}

const Dashboard_store = create<StateType>((set, get) => ({
  categories: DashboardCategoies,
  employees: EmployeesData,
}));

export default Dashboard_store;
