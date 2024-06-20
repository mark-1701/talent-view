import { useState, useEffect } from 'react';
import { updateData } from '../../../../../data/api';

const UpdateBenefitForm = ({ employees, selectedElement }) => {
  const [selectedEmployee, setSelectedEmployee] = useState(undefined);
  const [selectedBenfitType, setSelectedBenfitType] = useState(undefined);
  useEffect(() => {
    setSelectedEmployee(selectedElement?.employee?.id);
    setSelectedBenfitType(selectedElement?.benefit_type);
  }, [selectedElement]);
  const updateBenefit = async e => {
    const formData = new FormData(e.target);
    const id = formData.get('id');
    formData.append('_method', 'put');
    const response = await updateData('benefit', id, formData);
    window.location.reload();
  };

  return (
    <form
      className="flex flex-col gap-8"
      method="POST"
      onSubmit={e => {
        e.preventDefault();
        updateBenefit(e);
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
        <label htmlFor="benefit_type" className="label">
          Tipo de Beneficio:
        </label>
        <select
          type="text"
          id="benefit_type"
          name="benefit_type"
          className="minimal-input"
          value={selectedBenfitType}
          onChange={e => setSelectedBenfitType(e.target.value)}
          required
        >
          <option value="seguro de salud">Seguro de salud</option>
          <option value="pan de jubilacion">Plan de jubilación</option>
          <option value="dias de vacaciones pagados">
            Días de vacaciones pagados
          </option>
          <option value="desarrollo profesional">Desarrollo profesional</option>
          <option value="bonos de desempenio">bonos de desempeño</option>
        </select>
      </div>
      <div>
        <label htmlFor="description" className="label">
          Descripción:
        </label>
        <textarea
          type="text"
          id="description"
          name="description"
          className="textarea"
          defaultValue={selectedElement?.description}
          required
        />
      </div>
      <div>
        <label htmlFor="grant_date" className="label">
          Fecha de Consesión:
        </label>
        <input
          type="date"
          id="grant_date"
          name="grant_date"
          className="minimal-input"
          defaultValue={selectedElement?.grant_date}
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

export default UpdateBenefitForm;
