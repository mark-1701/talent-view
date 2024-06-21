const ViewProductivityForm = ({ selectedElement, toggleModalState }) => {
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
        <label htmlFor="date" className="label">
          Fecha:
        </label>
        <input
          type="date"
          id="date"
          name="date"
          className="minimal-input"
          defaultValue={selectedElement?.date}
          readOnly
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
          defaultValue={selectedElement?.hours_worked}
          readOnly
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
          defaultValue={selectedElement?.productivity_score}
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

export default ViewProductivityForm