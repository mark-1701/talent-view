export const HumanResourcesPermissions = employee => {
  if (!employee) return false;
  const allowedRoles = ['HR Specialist', 'Administration'];
  return allowedRoles.includes(employee.position.name);
};

export const AdministrationPermissions = employee => {
  if (!employee) return false;
  return employee.position.name == 'Administration';
};
