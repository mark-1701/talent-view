import { useState, useEffect } from 'react';
import Modal from '../../../../components/common/Modal';
import { getData } from '../../../../data/api';
import pLimit from 'p-limit';
import ProductivityTable from './components/ProductivityTable';
import CreateProductivityForm from './components/CreateProductivityForm';
import ViewProductivityForm from './components/ViewProductivityForm';
import UpdateProductivityForm from './components/UpdateProductivityForm';

const limit = pLimit(1);

const Productivities = () => {
  const [data, setData] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [viewModalState, setViewModalState] = useState(false);
  const [createModalState, setCreateModalState] = useState(false);
  const [updateModalState, setUpdateModalState] = useState(false);
  const [selectedElement, setSelectedElement] = useState({});

  // funciones y useEffects
  useEffect(() => {
    const fetchData = async () => {
      const endpoints = ['productivity', 'employee'];
      const tasks = endpoints.map(endpoint => limit(() => getData(endpoint)));
      const [productivityData, employeeData] = await Promise.all(tasks);
      setData(productivityData);
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
      <h1 className="title">Tabla de Productividad</h1>
      <button
        className="btn mb-4"
        onClick={() => {
          toggleCreateModalState();
        }}
      >
        Crear Productividad
      </button>
      <ProductivityTable
        data={data}
        setSelectedElement={setSelectedElement}
        toggleViewModalState={toggleViewModalState}
        toggleUpdateModalState={toggleUpdateModalState}
      />

      {/* Ventanas Modales */}
      <Modal
        modalState={createModalState}
        toggleModalState={toggleCreateModalState}
        title={'Crear Productividad'}
        form={<CreateProductivityForm employees={employees} />}
      />
      <Modal
        modalState={updateModalState}
        toggleModalState={toggleUpdateModalState}
        title={'Actualizar Productividad'}
        form={
          <UpdateProductivityForm
            employees={employees}
            selectedElement={selectedElement}
          />
        }
      />
      <Modal
        modalState={viewModalState}
        toggleModalState={toggleViewModalState}
        title={'Ver Productividad'}
        form={
          <ViewProductivityForm
            selectedElement={selectedElement}
            toggleModalState={toggleViewModalState}
          />
        }
      />
    </div>
  );
};

export default Productivities;
