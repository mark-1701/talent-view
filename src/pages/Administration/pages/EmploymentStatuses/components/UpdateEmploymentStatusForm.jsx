import { useState, useEffect } from 'react';
import { updateData } from '../../../../../data/api';

const UpdateEmploymentStatusForm = ({ employees, selectedElement }) => {
  const [selectedEmployee, setSelectedEmployee] = useState(undefined);
  const [selectedStatusType, setSelectedStatusType] = useState(undefined);
  useEffect(() => {
    setSelectedEmployee(selectedElement?.employee?.id);
    setSelectedStatusType(selectedElement?.status_type);
  }, [selectedElement]);
  const updateEmploymentStatus = async e => {
    const formData = new FormData(e.target);
    const id = formData.get('id');
    formData.append('_method', 'put');
    const response = await updateData('employment_status', id, formData);
    window.location.reload();
  };
  return (
    <form
    className="flex flex-col gap-8"
    method="POST"
    onSubmit={e => {
      e.preventDefault();
      updateEmploymentStatus(e);
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
        required
      >
        {employees.map(employee => (
          <option key={employee.id} value={employee.id}>
            {employee.first_name}
          </option>
        ))}
      </select>
    </div>
    <div>
      <label htmlFor="status_type" className="label">
        Tipo de estado:
      </label>
      <select
        type="text"
        id="status_type"
        name="status_type"
        className="minimal-input"
        value={selectedStatusType}
        onChange={e => setSelectedStatusType(e.target.value)}
        required
      >
        <option value="hired">Hired</option>
        <option value="terminated">Terminated</option>
      </select>
    </div>
    <div>
      <label htmlFor="date" className="label">
        Fecha:
      </label>
      <input
        type="date"
        id="date"
        name="date"
        className="minimal-input"
        defaultValue={selectedElement?.date}
        required
      />
    </div>
    <div>
      <label htmlFor="reason" className="label">
        Razón:
      </label>
      <textarea
        type="text"
        id="reason"
        name="reason"
        className="textarea"
        defaultValue={selectedElement?.reason}
        required
      />
    </div>

    <div>
      <button type="submit" className="btn w-full">
        Actualizar
      </button>
    </div>
  </form>
  )
}

export default UpdateEmploymentStatusForm