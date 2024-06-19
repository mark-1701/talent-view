import { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { HumanResourcesPermissions } from './utils/AccessPermissions';
import ProtectedRoute from './routes/ProtectedRoute'
import Login from './pages/Login/Login';
import Employees from './pages/HumanResources/pages/Employees/Employees';

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
        <Route path="employees" element={<Employees />} />
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
