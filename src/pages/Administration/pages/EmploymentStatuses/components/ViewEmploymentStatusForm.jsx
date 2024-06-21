import { createData } from '../../../../../data/api';
const ViewEmploymentStatusForm = ({ selectedElement, toggleModalState }) => {
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
          <option value="">{ selectedElement?.employee?.first_name }</option>
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
          readOnly
        >
          <option value="">{selectedElement?.status_type}</option>
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
        <label htmlFor="reason" className="label">
          Razón:
        </label>
        <textarea
          type="text"
          id="reason"
          name="reason"
          className="textarea"
          defaultValue={selectedElement?.reason}
          readOnly
        />
      </div>

      <div>
        <button type="submit" className="btn w-full">
          Cerrar
        </button>
      </div>
    </form>
  );
};

export default ViewEmploymentStatusForm;
