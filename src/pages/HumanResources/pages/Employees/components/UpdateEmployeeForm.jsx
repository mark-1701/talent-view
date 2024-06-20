import { useState, useEffect } from 'react';
import { updateData } from '../../../../../data/api';
const UpdateEmployeeForm = ({ positions, selectedElement }) => {
  const [selectedPosition, setSelectedPosition] = useState(undefined);
  useEffect(() => {
    setSelectedPosition(selectedElement?.position?.id);
  }, [selectedElement]);
  const updateEmployee = async e => {
    const formData = new FormData(e.target);
    const id = formData.get('id');
    formData.append('_method', 'put');
    const response = await updateData('employee', id, formData);
    window.location.reload();
  };

  return (
    <form
      className="flex flex-col gap-8"
      method="POST"
      onSubmit={e => {
        e.preventDefault();
        updateEmployee(e);
      }}
    >
      <div>
        <label htmlFor="id" className="label">
          Nombres:
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
        <label htmlFor="first_name" className="label">
          Nombres:
        </label>
        <input
          type="text"
          id="first_name"
          name="first_name"
          className="input"
          defaultValue={selectedElement?.first_name}
          required
        />
      </div>
      <div>
        <label htmlFor="last_name" className="label">
          Apellidos:
        </label>
        <input
          type="text"
          id="last_name"
          name="last_name"
          className="input"
          defaultValue={selectedElement?.last_name}
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="label">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="input"
          defaultValue={selectedElement?.email}
          required
        />
      </div>
      <div>
        <label htmlFor="password" className="label">
          Contraseña:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="input"
          defaultValue={selectedElement?.password}
          required
        />
      </div>
      <div>
        <label htmlFor="date_of_birth" className="label">
          Fecha Nacimiento:
        </label>
        <input
          type="date"
          id="date_of_birth"
          name="date_of_birth"
          className="minimal-input"
          defaultValue={selectedElement?.date_of_birth}
          required
        />
      </div>
      <div>
        <label htmlFor="hire_date" className="label">
          Fecha de Contratación:
        </label>
        <input
          type="date"
          id="hire_date"
          name="hire_date"
          className="minimal-input"
          defaultValue={selectedElement?.hire_date}
          required
        />
      </div>
      <div>
        <label htmlFor="base_salary" className="label">
          Sueldo Base:
        </label>
        <input
          type="number"
          id="base_salary"
          name="base_salary"
          className="input"
          defaultValue={selectedElement?.base_salary}
          required
        />
      </div>
      <div>
        <label htmlFor="payroll_type" className="label">
          Sueldo Base:
        </label>
        <select
          type="text"
          id="payroll_type"
          name="payroll_type"
          className="minimal-input"
          defaultValue={selectedElement?.payroll_type}
          required
        >
          <option value="mensual">Mensual</option>
          <option value="quincenal">Quincenal</option>
          <option value="semanal">Semanal</option>
        </select>
      </div>

      <div>
        <label htmlFor="position_id" className="label">
          position:
        </label>
        <select
          name="position_id"
          id="position_id"
          className="minimal-input"
          value={selectedPosition}
          onChange={e => setSelectedPosition(e.target.value)}
          required
        >
          {positions.map(position => (
            <option key={position.id} value={position.id}>
              {position.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <button type="submit" className="btn w-full">
          Actualizar
        </button>
      </div>
    </form>
  );
};

export default UpdateEmployeeForm;
