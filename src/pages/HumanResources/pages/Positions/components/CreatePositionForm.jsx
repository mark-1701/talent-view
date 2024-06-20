import { createData } from '../../../../../data/api';
const CreatePositionForm = ({ departments }) => {
  const createPosition = async e => {
    const formData = new FormData(e.target);
    const response = await createData('position', formData);
    window.location.reload();
  };
  return (
    <form
      className="flex flex-col gap-8"
      method="POST"
      onSubmit={e => {
        e.preventDefault();
        createPosition(e);
      }}
    >
      <div>
        <label htmlFor="name" className="label">
          Nombre:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="input"
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
          required
        />
      </div>
      <div>
        <button type="submit" className="btn w-full">
          Crear
        </button>
      </div>
    </form>
  );
};

export default CreatePositionForm;
