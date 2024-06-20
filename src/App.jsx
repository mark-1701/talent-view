import { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { HumanResourcesPermissions } from './utils/AccessPermissions';
import ProtectedRoute from './routes/ProtectedRoute'
import Login from './pages/Login/Login';
import Employees from './pages/HumanResources/pages/Employees/Employees';
import HumanResourcesRoute from './routes/HumanResourcesRoute'
import Benefits from './pages/HumanResources/pages/Benefits/Benefits';
import Productivities from './pages/HumanResources/pages/Productivities/Productivities';
import EmploymentStatuses from './pages/HumanResources/pages/EmploymentStatuses/EmploymentStatuses';
import Payrolls from './pages/HumanResources/pages/Payrolls/Payrolls';
import Positions from './pages/HumanResources/pages/Positions/Positions';
import Departments from './pages/HumanResources/pages/Departments/Departments';

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
        <Route path="employees" element={<HumanResourcesRoute selectedLink={'empleados'} module={<Employees />} />} />
        <Route path="benefits" element={<HumanResourcesRoute selectedLink={'beneficios'} module={<Benefits />} />} />
        <Route path="productivities" element={<HumanResourcesRoute selectedLink={'productividad'} module={<Productivities />} />} />
        <Route path="employment-statuses" element={<HumanResourcesRoute selectedLink={'estado de empleado'} module={<EmploymentStatuses />} />} />
        <Route path="payrolls" element={<HumanResourcesRoute selectedLink={'nomina'} module={<Payrolls />} />} />
        <Route path="positions" element={<HumanResourcesRoute selectedLink={'puestos'} module={<Positions />} />} />
        <Route path="departments" element={<HumanResourcesRoute selectedLink={'departamentos'} module={<Departments />} />} />
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
