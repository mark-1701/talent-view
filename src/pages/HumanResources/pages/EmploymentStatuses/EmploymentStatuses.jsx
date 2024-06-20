import { useState, useEffect } from 'react';
import Modal from '../../../../components/common/Modal';
import { getData } from '../../../../data/api';
import pLimit from 'p-limit';
import EmploymentStatusTable from './components/EmploymentStatusTable';
import CreateEmploymentStatusForm from './components/CreateEmploymentStatusForm';
import ViewEmploymentStatusForm from './components/ViewEmploymentStatusForm';
import UpdateEmploymentStatusForm from './components/UpdateEmploymentStatusForm';

const limit = pLimit(1);

const EmploymentStatuses = () => {
  const [data, setData] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [viewModalState, setViewModalState] = useState(false);
  const [createModalState, setCreateModalState] = useState(false);
  const [updateModalState, setUpdateModalState] = useState(false);
  const [selectedElement, setSelectedElement] = useState({});

  // funciones y useEffects
  useEffect(() => {
    const fetchData = async () => {
      const endpoints = ['employment_status', 'employee'];
      const tasks = endpoints.map(endpoint => limit(() => getData(endpoint)));
      const [employmentStatusData, employeeData] = await Promise.all(tasks);
      setData(employmentStatusData);
      setEmployees(employeeData);
    };
    fetchData();
  }, []);

  const toggleCreateModalState = () =>
    createModalState ? setCreateModalState(false) : setCreateModalState(true);
  const toggleUpdateModalState = () =>
    updateModalState ? setUpdateModalState(false) : setUpdateModalState(true);
  const toggleViewModalState = () =>
    viewModalState ? setViewModalState(false) : setViewModalState(true);
  return (
    <div>
      <h1 className="title">Tabla Estado de Empleados</h1>
      <button
        className="btn mb-4"
        onClick={() => {
          toggleCreateModalState();
        }}
      >
        Crear estado para empleado
      </button>
      <EmploymentStatusTable
        data={data}
        setSelectedElement={setSelectedElement}
        toggleViewModalState={toggleViewModalState}
        toggleUpdateModalState={toggleUpdateModalState}
      />

      {/* Ventanas Modales */}
      <Modal
        modalState={createModalState}
        toggleModalState={toggleCreateModalState}
        title={'Crear Estado de Empleado'}
        form={<CreateEmploymentStatusForm employees={employees} />}
      />
      <Modal
        modalState={updateModalState}
        toggleModalState={toggleUpdateModalState}
        title={'Actualizar Estado de Empleado'}
        form={
          <UpdateEmploymentStatusForm
            employees={employees}
            selectedElement={selectedElement}
          />
        }
      />
      <Modal
        modalState={viewModalState}
        toggleModalState={toggleViewModalState}
        title={'Ver Estado de Empleado'}
        form={
          <ViewEmploymentStatusForm
            selectedElement={selectedElement}
            toggleModalState={toggleViewModalState}
          />
        }
      />
    </div>
  )
}

export default EmploymentStatuses