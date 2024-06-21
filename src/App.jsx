import { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { HumanResourcesPermissions, AdministrationPermissions } from './utils/AccessPermissions';
import ProtectedRoute from './routes/ProtectedRoute'
import Login from './pages/Login/Login';
import HumanResourcesRoute from './routes/HumanResourcesRoute'
import AdministrationRoute from './routes/AdministrationRoute'
import HumanResourcesEmployees from './pages/HumanResources/pages/Employees/Employees';
import HumanResourcesBenefits from './pages/HumanResources/pages/Benefits/Benefits';
import HumanResourcesProductivities from './pages/HumanResources/pages/Productivities/Productivities';
import HumanResourcesEmploymentStatuses from './pages/HumanResources/pages/EmploymentStatuses/EmploymentStatuses';
import HumanResourcesPayrolls from './pages/HumanResources/pages/Payrolls/Payrolls';
import HumanResourcesPositions from './pages/HumanResources/pages/Positions/Positions';
import HumanResourcesDepartments from './pages/HumanResources/pages/Departments/Departments';

import AdministrationEmployees from './pages/Administration/pages/Employees/Employees';
import AdministrationBenefits from './pages/Administration/pages/Benefits/Benefits';
import AdministrationProductivities from './pages/Administration/pages/Productivities/Productivities';
import AdministrationEmploymentStatuses from './pages/Administration/pages/EmploymentStatuses/EmploymentStatuses';
import AdministrationPayrolls from './pages/Administration/pages/Payrolls/Payrolls';
import AdministrationPositions from './pages/Administration/pages/Positions/Positions';
import AdministrationDepartments from './pages/Administration/pages/Departments/Departments';

function App() {
  const [sessionUser, setSessionUser] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const storedSession = JSON.parse(localStorage.getItem('session'));
    if (storedSession) setSessionUser(storedSession); 
    setIsLoading(false);
  }, []);
  if (isLoading) return <div>Cargando...</div>;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login setSessionUser={setSessionUser} />} />
        <Route path="/login" element={<Login setSessionUser={setSessionUser} />} />
      <Route path='/human-resources' element={<ProtectedRoute isAllowed={HumanResourcesPermissions(sessionUser)} />}>
        <Route path="" element={<Navigate to="employees" />} />
        <Route path="employees" element={<HumanResourcesRoute selectedLink={'empleados'} module={<HumanResourcesEmployees />} />} />
        <Route path="benefits" element={<HumanResourcesRoute selectedLink={'beneficios'} module={<HumanResourcesBenefits />} />} />
        <Route path="productivities" element={<HumanResourcesRoute selectedLink={'productividad'} module={<HumanResourcesProductivities />} />} />
        <Route path="employment-statuses" element={<HumanResourcesRoute selectedLink={'estado de empleado'} module={<HumanResourcesEmploymentStatuses />} />} />
        <Route path="payrolls" element={<HumanResourcesRoute selectedLink={'nomina'} module={<HumanResourcesPayrolls />} />} />
        {/* <Route path="positions" element={<HumanResourcesRoute selectedLink={'puestos'} module={<HumanResourcesPositions />} />} />
        <Route path="departments" element={<HumanResourcesRoute selectedLink={'departamentos'} module={<HumanResourcesDepartments />} />} /> */}
      </Route>

      <Route path='/administration' element={<ProtectedRoute isAllowed={AdministrationPermissions(sessionUser)} />}>
        <Route path="" element={<Navigate to="employees" />} />
        <Route path="employees" element={<AdministrationRoute selectedLink={'empleados'} module={<AdministrationEmployees />} />} />
        <Route path="benefits" element={<AdministrationRoute selectedLink={'beneficios'} module={<AdministrationBenefits />} />} />
        <Route path="productivities" element={<AdministrationRoute selectedLink={'productividad'} module={<AdministrationProductivities />} />} />
        <Route path="employment-statuses" element={<AdministrationRoute selectedLink={'estado de empleado'} module={<AdministrationEmploymentStatuses />} />} />
        <Route path="payrolls" element={<AdministrationRoute selectedLink={'nomina'} module={<AdministrationPayrolls />} />} />
        <Route path="positions" element={<AdministrationRoute selectedLink={'puestos'} module={<AdministrationPositions />} />} />
        <Route path="departments" element={<AdministrationRoute selectedLink={'departamentos'} module={<AdministrationDepartments />} />} />
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
