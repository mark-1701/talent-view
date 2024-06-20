const ViewDepartmentForm = ({ selectedElement, toggleModalState }) => {
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
        <label htmlFor="name" className="label">
          Nombre:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="input"
          defaultValue={selectedElement?.name}
          readOnly
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
          defaultValue={selectedElement?.description}
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

export default ViewDepartmentForm