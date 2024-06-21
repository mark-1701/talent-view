import { useState, useEffect } from 'react';
import { updateData } from '../../../../../data/api';

const UpdatePayrollForm = ({ employees, selectedElement }) => {
  const [selectedEmployee, setSelectedEmployee] = useState(undefined);
  useEffect(() => {
    setSelectedEmployee(selectedElement?.employee?.id);
  }, [selectedElement]);
  const updatePayroll = async e => {
    const formData = new FormData(e.target);
    const id = formData.get('id');
    formData.append('_method', 'put');
    const response = await updateData('payroll', id, formData);
    window.location.reload();
  };
  return (
    <form
      className="flex flex-col gap-8"
      method="POST"
      onSubmit={e => {
        e.preventDefault();
        updatePayroll(e);
      }}
    >
      <div>
        <label htmlFor="id" className="label">
          Id:
        </label>
        <input
          type="text"
          id="id"
          name="id"
          className="input"
          defaultValue={selectedElement?.id}
          readOnly
          required
        />
      </div>
      <div>
        <label htmlFor="employee_id" className="label">
          Empleado:
        </label>
        <select
          name="employee_id"
          id="employee_id"
          className="minimal-input"
          value={selectedEmployee}
          onChange={e => setSelectedEmployee(e.target.value)}
          readOnly
        >
          {employees.map(employee => (
            <option key={employee.id} value={employee.id}>
              {employee.first_name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="start_period" className="label">
          Fecha de Inicio:
        </label>
        <input
          type="date"
          id="start_period"
          name="start_period"
          className="minimal-input"
          defaultValue={selectedElement?.start_period}
          required
        />
      </div>
      <div>
        <label htmlFor="end_period" className="label">
          Fecha de Finalización:
        </label>
        <input
          type="date"
          id="end_period"
          name="end_period"
          className="minimal-input"
          defaultValue={selectedElement?.end_period}
          required
        />
      </div>
      <div>
        <label htmlFor="gross_salary" className="label">
          Salario Bruto:
        </label>
        <input
          type="number"
          id="gross_salary"
          name="gross_salary"
          className="input"
          defaultValue={selectedElement?.gross_salary}
          required
        />
      </div>
      <div>
        <label htmlFor="deductions" className="label">
          Deducciones:
        </label>
        <input
          type="number"
          id="deductions"
          name="deductions"
          className="input"
          defaultValue={selectedElement?.deductions}
          required
        />
      </div>
      <div>
        <label htmlFor="net_salary" className="label">
          Salario Neto:
        </label>
        <input
          type="number"
          id="net_salary"
          name="net_salary"
          className="input"
          defaultValue={selectedElement?.net_salary}
          required
        />
      </div>
      <div>
        <button type="submit" className="btn w-full">
          Actualizar
        </button>
      </div>
    </form>
  );
};

export default UpdatePayrollForm;
