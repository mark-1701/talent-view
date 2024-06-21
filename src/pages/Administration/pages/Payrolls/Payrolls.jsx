import { useState, useEffect } from 'react';
import Modal from '../../../../components/common/Modal';
import { getData } from '../../../../data/api';
import pLimit from 'p-limit';
import PayrollTable from './components/PayrollTable';
import CreatePayrollForm from './components/CreatePayrollForm';
import ViewPayrollForm from './components/ViewPayrollForm';
import UpdatePayrollForm from './components/UpdatePayrollForm';

const limit = pLimit(1);

const Payrolls = () => {
  const [data, setData] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [viewModalState, setViewModalState] = useState(false);
  const [createModalState, setCreateModalState] = useState(false);
  const [updateModalState, setUpdateModalState] = useState(false);
  const [selectedElement, setSelectedElement] = useState({});

  // funciones y useEffects
  useEffect(() => {
    const fetchData = async () => {
      const endpoints = ['payroll', 'employee'];
      const tasks = endpoints.map(endpoint => limit(() => getData(endpoint)));
      const [payrollData, employeeData] = await Promise.all(tasks);
      setData(payrollData);
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
      <h1 className="title">Tabla Nomina</h1>
      <button
        className="btn mb-4"
        onClick={() => {
          toggleCreateModalState();
        }}
      >
        Crear Nomina
      </button>
      <PayrollTable
        data={data}
        setSelectedElement={setSelectedElement}
        toggleViewModalState={toggleViewModalState}
        toggleUpdateModalState={toggleUpdateModalState}
      />

      {/* Ventanas Modales */}
      <Modal
        modalState={createModalState}
        toggleModalState={toggleCreateModalState}
        title={'Crear Nomina'}
        form={<CreatePayrollForm employees={employees} />}
      />
      <Modal
        modalState={updateModalState}
        toggleModalState={toggleUpdateModalState}
        title={'Actualizar NOmina'}
        form={
          <UpdatePayrollForm
            employees={employees}
            selectedElement={selectedElement}
          />
        }
      />
      <Modal
        modalState={viewModalState}
        toggleModalState={toggleViewModalState}
        title={'Ver Nomina'}
        form={
          <ViewPayrollForm
            selectedElement={selectedElement}
            toggleModalState={toggleViewModalState}
          />
        }
      />
    </div>
  );
};

export default Payrolls;
