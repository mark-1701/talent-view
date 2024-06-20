import { createData } from '../../../../../data/api';

const CreateProductivityForm = ({ employees }) => {
  const createProductivity = async e => {
    const formData = new FormData(e.target);
    const response = await createData('productivity', formData);
    window.location.reload();
  };
  return (
    <form
      className="flex flex-col gap-8"
      method="POST"
      onSubmit={e => {
        e.preventDefault();
        createProductivity(e);
      }}
    >
      <div>
        <label htmlFor="employee_id" className="label">
          Empleado:
        </label>
        <select
          name="employee_id"
          id="employee_id"
          className="minimal-input"
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

export default CreateProductivityForm;
