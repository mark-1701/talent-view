const ViewPayrollForm = ({ selectedElement, toggleModalState }) => {
  return (
    <form
      className="flex flex-col gap-8"
      method="POST"
      onSubmit={e => {
        e.preventDefault();
        toggleModalState();
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
          readOnly
        >
          <option value="">{selectedElement?.employee?.first_name}</option>
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
          defaultValue={selectedElement?.start_period}
          readOnly
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
          defaultValue={selectedElement?.end_period}
          readOnly
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
          defaultValue={selectedElement?.gross_salary}
          readOnly
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
          defaultValue={selectedElement?.deductions}
          readOnly
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
          defaultValue={selectedElement?.net_salary}
          readOnly
        />
      </div>
      <div>
        <button type="submit" className="btn w-full">
          Cerrar
        </button>
      </div>
    </form>
  )
}

export default ViewPayrollForm