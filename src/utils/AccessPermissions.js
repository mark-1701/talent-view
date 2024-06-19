export const HumanResourcesPermissions = employee => {
  if (!employee) return false;
  const allowedRoles = ['Administration', 'HR Specialist'];
  return allowedRoles.includes(employee.position.name);
};
