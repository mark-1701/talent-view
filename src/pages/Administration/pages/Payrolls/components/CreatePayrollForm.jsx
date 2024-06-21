import { createData } from '../../../../../data/api';
const CreatePayrollForm = ({ employees }) => {
  const createPayroll = async e => {
    const formData = new FormData(e.target);
    const response = await createData('payroll', formData);
    window.location.reload();
  };
  return (
    <form
      className="flex flex-col gap-8"
      method="POST"
      onSubmit={e => {
        e.preventDefault();
        createPayroll(e);
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
        <label htmlFor="start_period" className="label">
          Fecha de Inicio:
        </label>
        <input
          type="date"
          id="start_period"
          name="start_period"
          className="minimal-input"
          required
        />
      </div>
      <div>
        <label htmlFor="end_period" className="label">
          Fecha de Finalización:
        </label>
        <input
          type="date"
          id="end_period"
          name="end_period"
          className="minimal-input"
          required
        />
      </div>
      <div>
        <label htmlFor="gross_salary" className="label">
          Salario Bruto:
        </label>
        <input
          type="number"
          id="gross_salary"
          name="gross_salary"
          className="input"
          required
        />
      </div>
      <div>
        <label htmlFor="deductions" className="label">
          Deducciones:
        </label>
        <input
          type="number"
          id="deductions"
          name="deductions"
          className="input"
          required
        />
      </div>
      <div>
        <label htmlFor="net_salary" className="label">
          Salario Neto:
        </label>
        <input
          type="number"
          id="net_salary"
          name="net_salary"
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

export default CreatePayrollForm;
