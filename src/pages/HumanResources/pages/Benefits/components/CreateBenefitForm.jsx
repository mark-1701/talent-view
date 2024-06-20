import { createData } from '../../../../../data/api';
const CreateBenefitForm = ({ employees }) => {
  const createBenefit = async e => {
    const formData = new FormData(e.target);
    const response = await createData('benefit', formData);
    window.location.reload();
  };
  return (
    <form
      className="flex flex-col gap-8"
      method="POST"
      onSubmit={e => {
        e.preventDefault();
        createBenefit(e);
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
        <label htmlFor="benefit_type" className="label">
          Tipo de Beneficio:
        </label>
        <select
          type="text"
          id="benefit_type"
          name="benefit_type"
          className="minimal-input"
          required
        >
          <option value="seguro de salud">Seguro de salud</option>
          <option value="pan de jubilacion">Plan de jubilación</option>
          <option value="dias de vacaciones pagados">Días de vacaciones pagados</option>
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

export default CreateBenefitForm