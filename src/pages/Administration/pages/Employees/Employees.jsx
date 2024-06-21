import { useState, useEffect } from 'react';
import Modal from '../../../../components/common/Modal';
import { getData } from '../../../../data/api';
import pLimit from 'p-limit';
import EmployeeTable from './components/EmployeeTable';
import CreateEmployeeForm from './components/CreateEmployeeForm';
import ViewEmployeeForm from './components/ViewEmployeeForm';
import UpdateEmployeeForm from './components/UpdateEmployeeForm';

const limit = pLimit(1);

const Employees = () => {
  const [data, setData] = useState([]);
  const [positions, setPositions] = useState([]);
  const [viewModalState, setViewModalState] = useState(false);
  const [createModalState, setCreateModalState] = useState(false);
  const [updateModalState, setUpdateModalState] = useState(false);
  const [selectedElement, setSelectedElement] = useState({});

  // funciones y useEffects
  useEffect(() => {
    const fetchData = async () => {
      const endpoints = ['employee', 'position'];
      const tasks = endpoints.map(endpoint => limit(() => getData(endpoint)));
      const [employeeData, positionData] = await Promise.all(tasks);
      setData(employeeData);
      setPositions(positionData);
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
      <h1 className="title">Tabla Empleados</h1>
      <button
        className="btn mb-4"
        onClick={() => {
          toggleCreateModalState();
        }}
      >
        Crear Empleado
      </button>
      <EmployeeTable
        data={data}
        setSelectedElement={setSelectedElement}
        toggleViewModalState={toggleViewModalState}
        toggleUpdateModalState={toggleUpdateModalState}
      />

      {/* Ventanas Modales */}
      <Modal
        modalState={createModalState}
        toggleModalState={toggleCreateModalState}
        title={'Crear Empleado'}
        form={<CreateEmployeeForm positions={positions} />}
      />
      <Modal
        modalState={updateModalState}
        toggleModalState={toggleUpdateModalState}
        title={'Actualizar Empleado'}
        form={
          <UpdateEmployeeForm
            positions={positions}
            selectedElement={selectedElement}
          />
        }
      />
      <Modal
        modalState={viewModalState}
        toggleModalState={toggleViewModalState}
        title={'Ver Empleado'}
        form={
          <ViewEmployeeForm
            selectedElement={selectedElement}
            toggleModalState={toggleViewModalState}
          />
        }
      />
    </div>
  );
};

export default Employees;
