import { createData } from '../../../../../data/api';
const CreateDepartmentForm = () => {
  const createDepartment = async e => {
    const formData = new FormData(e.target);
    const response = await createData('department', formData);
    window.location.reload();
  };
  return (
    <form
      className="flex flex-col gap-8"
      method="POST"
      onSubmit={e => {
        e.preventDefault();
        createDepartment(e);
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

export default CreateDepartmentForm;
