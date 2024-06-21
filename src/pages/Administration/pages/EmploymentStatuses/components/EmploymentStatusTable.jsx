import EditIcon from '../../../../../components/common/EditIcon';
import DeleteIcon from '../../../../../components/common/DeleteIcon';
import ViewIcon from '../../../../../components/common/ViewIcon';
import { deleteData } from '../../../../../data/api';


const EmploymentStatusTable = ({
  data,
  setSelectedElement,
  toggleViewModalState,
  toggleUpdateModalState
}) => {
  const deleteEmploymentStatus = async id => {
    const response = await deleteData('employment_status', id);
    window.location.reload();
  };
  return (
    <table className="table columns-5">
    <thead>
      <tr>
        <th>id</th>
        <th>Empleado</th>
        <th>Tipo de estado</th>
        <th>Fecha</th>
        <th>Razón</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {data.map(employmentStatus => (
        <tr key={employmentStatus?.id}>
          <td>{employmentStatus?.id}</td>
          <td>{employmentStatus?.employee?.first_name}</td>
          <td>{employmentStatus?.status_type}</td>
          <td>{employmentStatus?.date}</td>
          <td>{employmentStatus?.reason}</td>
          <td className="flex justify-center items-center gap-2">
            <button
              className=""
              onClick={e => {
                setSelectedElement(employmentStatus);
                toggleViewModalState();
              }}
            >
              <ViewIcon />
            </button>
            <button
              className=""
              onClick={e => {
                setSelectedElement(employmentStatus);
                toggleUpdateModalState();
              }}
            >
              <EditIcon />
            </button>
            <form
              action="post"
              onSubmit={e => {
                e.preventDefault();
                if (confirm('¿Estas seguro de eliminar este registro?')) {
                  deleteEmploymentStatus(employmentStatus.id);
                }
              }}
            >
              <button type="submit" className="">
                <DeleteIcon />
              </button>
            </form>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  )
}

export default EmploymentStatusTable