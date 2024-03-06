export interface User {
  id: number;
  name: string;
  role: Role; 
}
export enum Role {
    Admin = "ADMIN",
    Head_Office ="HEAD_OFFICE",
    Regional_Manager = "REGIONAL_MANAGER",
    Field_Officer = "FIELD_OFFICER",
    Service_provider = "SERVICE_PROVIDER",
    Manufacturer = "MANUFACTURER",
  }  

  export enum Permissions {
    ViewDashboard = 'view_dashboard',
    ManageUsers = 'manage_users',
    ViewReports = 'view_reports',
  }

  export const RolePermissionMapping: Record<string, string[]> = {
    'ADMIN': [Permissions.ViewDashboard, Permissions.ManageUsers, Permissions.ViewReports],
    'HEAD_OFFICE': [Permissions.ViewDashboard, Permissions.ViewReports],
    'REGIONAL_MANAGER': [Permissions.ViewDashboard, Permissions.ViewReports],
    'FIELD_OFFICER': [Permissions.ViewDashboard],
  };