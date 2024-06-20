const ViewEmployeeForm = ({ selectedElement, toggleModalState }) => {
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
        <label htmlFor="first_name" className="label">
          Nombres:
        </label>
        <input
          type="text"
          id="first_name"
          name="first_name"
          className="input"
          defaultValue={selectedElement?.first_name}
          readOnly
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
          readOnly
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
          readOnly
        />
      </div>
      <div>
        <label htmlFor="password" className="label">
          Contraseña:
        </label>
        <input
          type="text"
          id="password"
          name="password"
          className="input"
          defaultValue={selectedElement?.password}
          readOnly
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
          readOnly
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
          readOnly
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
          readOnly
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
        <select name="position_id" id="position_id" className="minimal-input" readOnly>
          <option>{selectedElement?.position?.name}</option>
        </select>
      </div>
      <div>
        <button type="submit" className="btn w-full">
          Crear
        </button>
      </div>
    </form>
  )
}

export default ViewEmployeeForm