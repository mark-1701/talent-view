import { useState, useEffect } from 'react';
import { updateData } from '../../../../../data/api';

const UpdatePositionForm = ({ departments, selectedElement }) => {
  const [selectedDepartment, setSelectedDepartment] = useState(undefined);
  useEffect(() => {
    setSelectedDepartment(selectedElement?.department?.id);
  }, [selectedElement]);
  const updatePosition = async e => {
    const formData = new FormData(e.target);
    const id = formData.get('id');
    formData.append('_method', 'put');
    const response = await updateData('position', id, formData);
    window.location.reload();
  };

  return (
    <form
      className="flex flex-col gap-8"
      method="POST"
      onSubmit={e => {
        e.preventDefault();
        updatePosition(e);
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
        <label htmlFor="name" className="label">
          Nombre:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="input"
          defaultValue={selectedElement?.name}
          required
        />
      </div>
      <div>
        <label htmlFor="department_id" className="label">
          Departamento:
        </label>
        <select
          name="department_id"
          id="department_id"
          className="minimal-input"
          value={selectedDepartment}
          onChange={e => setSelectedDepartment(e.target.value)}
          required
        >
          {departments.map(department => (
            <option key={department.id} value={department.id}>
              {department.name}
            </option>
          ))}
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
        <button type="submit" className="btn w-full">
          Actualizar
        </button>
      </div>
    </form>
  );
};

export default UpdatePositionForm;
