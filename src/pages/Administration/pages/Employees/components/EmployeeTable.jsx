import EditIcon from '../../../../../components/common/EditIcon';
import DeleteIcon from '../../../../../components/common/DeleteIcon';
import ViewIcon from '../../../../../components/common/ViewIcon';
import { deleteData } from '../../../../../data/api';

const EmployeeTable = ({
  data,
  setSelectedElement,
  toggleViewModalState,
  toggleUpdateModalState
}) => {
  const deleteemployee = async id => {
    const response = await deleteData('employee', id);
    window.location.reload();
  };
  return (
    <table className="table columns-5">
      <thead>
        <tr>
          <th>id</th>
          <th>Nombres</th>
          <th>Apellidos</th>
          <th>Email</th>
          <th>Puesto</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map(employee => (
          <tr key={employee?.id}>
            <td>{employee?.id}</td>
            <td>{employee?.first_name}</td>
            <td>{employee?.last_name}</td>
            <td>{employee?.email}</td>
            <td>{employee?.position?.name}</td>
            {/* 
        <td>{employee?.state}</td> */}
            <td className="flex justify-center items-center gap-2">
              <button
                className=""
                onClick={e => {
                  setSelectedElement(employee);
                  toggleViewModalState();
                }}
              >
                <ViewIcon />
              </button>
              <button
                className=""
                onClick={e => {
                  setSelectedElement(employee);
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
                    deleteemployee(employee.id);
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
  );
};

export default EmployeeTable;
