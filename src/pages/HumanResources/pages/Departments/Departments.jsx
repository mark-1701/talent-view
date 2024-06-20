import { useState, useEffect } from 'react';
import Modal from '../../../../components/common/Modal';
import { getData } from '../../../../data/api';
import pLimit from 'p-limit';
import DepartmentTable from './components/DepartmentTable';
import CreateDepartmentForm from './components/CreateDepartmentForm';
import ViewDepartmentForm from './components/ViewDepartmentForm';
import UpdateDepartmentForm from './components/UpdateDepartmentForm';

const limit = pLimit(1);

const Departments = () => {
  const [data, setData] = useState([]);
  const [viewModalState, setViewModalState] = useState(false);
  const [createModalState, setCreateModalState] = useState(false);
  const [updateModalState, setUpdateModalState] = useState(false);
  const [selectedElement, setSelectedElement] = useState({});

  // funciones y useEffects
  useEffect(() => {
    const fetchData = async () => {
      const endpoints = ['department'];
      const tasks = endpoints.map(endpoint => limit(() => getData(endpoint)));
      const [departmentData] = await Promise.all(tasks);
      setData(departmentData);
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
      <h1 className="title">Tabla Departamentos</h1>
      <button
        className="btn mb-4"
        onClick={() => {
          toggleCreateModalState();
        }}
      >
        Crear Departamento
      </button>
      <DepartmentTable
        data={data}
        setSelectedElement={setSelectedElement}
        toggleViewModalState={toggleViewModalState}
        toggleUpdateModalState={toggleUpdateModalState}
      />

      {/* Ventanas Modales */}
      <Modal
        modalState={createModalState}
        toggleModalState={toggleCreateModalState}
        title={'Crear Departamento'}
        form={<CreateDepartmentForm />}
      />
      <Modal
        modalState={updateModalState}
        toggleModalState={toggleUpdateModalState}
        title={'Actualizar Departamento'}
        form={
          <UpdateDepartmentForm
            selectedElement={selectedElement}
          />
        }
      />
      <Modal
        modalState={viewModalState}
        toggleModalState={toggleViewModalState}
        title={'Ver Departamento'}
        form={
          <ViewDepartmentForm
            selectedElement={selectedElement}
            toggleModalState={toggleViewModalState}
          />
        }
      />
    </div>
  );
};

export default Departments;
