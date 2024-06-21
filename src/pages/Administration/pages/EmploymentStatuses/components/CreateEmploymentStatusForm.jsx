import { createData } from '../../../../../data/api';
const CreateEmploymentStatusForm = ({ employees }) => {
  const createEmploymentStatus = async e => {
    const formData = new FormData(e.target);
    const response = await createData('employment_status', formData);
    window.location.reload();
  };
  return (
    <form
    className="flex flex-col gap-8"
    method="POST"
    onSubmit={e => {
      e.preventDefault();
      createEmploymentStatus(e);
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
      <label htmlFor="status_type" className="label">
        Tipo de estado:
      </label>
      <select
        type="text"
        id="status_type"
        name="status_type"
        className="minimal-input"
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
        required
      />
    </div>

    <div>
      <button type="submit" className="btn w-full">
        Crear
      </button>
    </div>
  </form>
  )
}

export default CreateEmploymentStatusForm