const ViewBenefitForm = ({ selectedElement, toggleModalState }) => {
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
          defaultValue={selectedElement?.employee?.first_name}
          readOnly
        >
          <option value="">{selectedElement?.employee?.first_name}</option>
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
          defaultValue={selectedElement?.benefit_type}
          readOnly
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
          defaultValue={selectedElement?.description}
          readOnly
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
          defaultValue={selectedElement?.grant_date}
          readOnly
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

export default ViewBenefitForm