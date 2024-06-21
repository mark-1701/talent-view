import { useState, useEffect } from 'react';
import { updateData } from '../../../../../data/api';
const UpdateProductivityForm = ({ employees, selectedElement }) => {
  const [selectedEmployee, setSelectedEmployee] = useState(undefined);
  useEffect(() => {
    setSelectedEmployee(selectedElement?.employee?.id);
  }, [selectedElement]);
  const updateProductivity = async e => {
    const formData = new FormData(e.target);
    const id = formData.get('id');
    formData.append('_method', 'put');
    const response = await updateData('productivity', id, formData);
    window.location.reload();
  };
  return (
    <form
      className="flex flex-col gap-8"
      method="POST"
      onSubmit={e => {
        e.preventDefault();
        updateProductivity(e);
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
        <label htmlFor="hours_worked" className="label">
          Horas trabajadas:
        </label>
        <input
          type="number"
          id="hours_worked"
          name="hours_worked"
          className="input"
          defaultValue={selectedElement?.hours_worked}
          required
        />
      </div>
      <div>
        <label htmlFor="productivity_score" className="label">
          Puntaje de productividad:
        </label>
        <input
          type="number"
          id="productivity_score"
          name="productivity_score"
          className="input"
          defaultValue={selectedElement?.productivity_score}
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

export default UpdateProductivityForm