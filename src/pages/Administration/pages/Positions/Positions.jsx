import { useState, useEffect } from 'react';
import Modal from '../../../../components/common/Modal';
import { getData } from '../../../../data/api';
import pLimit from 'p-limit';
import PositionTable from './components/PositionTable';
import CreatePositionForm from './components/CreatePositionForm';
import ViewPositionForm from './components/ViewPositionForm';
import UpdatePositionForm from './components/UpdatePositionForm';

const limit = pLimit(1);

const Positions = () => {
  const [data, setData] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [viewModalState, setViewModalState] = useState(false);
  const [createModalState, setCreateModalState] = useState(false);
  const [updateModalState, setUpdateModalState] = useState(false);
  const [selectedElement, setSelectedElement] = useState({});

  // funciones y useEffects
  useEffect(() => {
    const fetchData = async () => {
      const endpoints = ['position', 'department'];
      const tasks = endpoints.map(endpoint => limit(() => getData(endpoint)));
      const [positionData, departmentData] = await Promise.all(tasks);
      setData(positionData);
      setDepartments(departmentData);
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
      <h1 className="title">Tabla Puestos</h1>
      <button
        className="btn mb-4"
        onClick={() => {
          toggleCreateModalState();
        }}
      >
        Crear Puesto
      </button>
      <PositionTable
        data={data}
        setSelectedElement={setSelectedElement}
        toggleViewModalState={toggleViewModalState}
        toggleUpdateModalState={toggleUpdateModalState}
      />

      {/* Ventanas Modales */}
      <Modal
        modalState={createModalState}
        toggleModalState={toggleCreateModalState}
        title={'Crear Puesto'}
        form={<CreatePositionForm departments={departments} />}
      />
      <Modal
        modalState={updateModalState}
        toggleModalState={toggleUpdateModalState}
        title={'Actualizar Puesto'}
        form={
          <UpdatePositionForm
            departments={departments}
            selectedElement={selectedElement}
          />
        }
      />
      <Modal
        modalState={viewModalState}
        toggleModalState={toggleViewModalState}
        title={'Ver Puesto'}
        form={
          <ViewPositionForm
            selectedElement={selectedElement}
            toggleModalState={toggleViewModalState}
          />
        }
      />
    </div>


    
  )
}

export default Positions