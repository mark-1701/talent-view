import { useState, useEffect } from 'react';
import Modal from '../../../../components/common/Modal';
import { getData } from '../../../../data/api';
import pLimit from 'p-limit';
import BenefitTable from './components/BenefitTable';
import CreateBenefitForm from './components/CreateBenefitForm';
import ViewBenefitForm from './components/ViewBenefitForm';
import UpdateBenefitForm from './components/UpdateBenefitForm';

const limit = pLimit(1);

const Benefits = () => {
  const [data, setData] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [viewModalState, setViewModalState] = useState(false);
  const [createModalState, setCreateModalState] = useState(false);
  const [updateModalState, setUpdateModalState] = useState(false);
  const [selectedElement, setSelectedElement] = useState({});

  // funciones y useEffects
  useEffect(() => {
    const fetchData = async () => {
      const endpoints = ['benefit', 'employee'];
      const tasks = endpoints.map(endpoint => limit(() => getData(endpoint)));
      const [benefitData, employeeData] = await Promise.all(tasks);
      setData(benefitData);
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
      <h1 className="title">Tabla Beneficios</h1>
      <button
        className="btn mb-4"
        onClick={() => {
          toggleCreateModalState();
        }}
      >
        Crear Beneficio
      </button>
      <BenefitTable
        data={data}
        setSelectedElement={setSelectedElement}
        toggleViewModalState={toggleViewModalState}
        toggleUpdateModalState={toggleUpdateModalState}
      />

      {/* Ventanas Modales */}
      <Modal
        modalState={createModalState}
        toggleModalState={toggleCreateModalState}
        title={'Crear Beneficio'}
        form={<CreateBenefitForm employees={employees} />}
      />
      <Modal
        modalState={updateModalState}
        toggleModalState={toggleUpdateModalState}
        title={'Actualizar Beneficio'}
        form={
          <UpdateBenefitForm
            employees={employees}
            selectedElement={selectedElement}
          />
        }
      />
      <Modal
        modalState={viewModalState}
        toggleModalState={toggleViewModalState}
        title={'Ver Beneficio'}
        form={
          <ViewBenefitForm
            selectedElement={selectedElement}
            toggleModalState={toggleViewModalState}
          />
        }
      />
    </div>
  );
};

export default Benefits;
