import EditIcon from '../../../../../components/common/EditIcon';
import DeleteIcon from '../../../../../components/common/DeleteIcon';
import ViewIcon from '../../../../../components/common/ViewIcon';
import { deleteData } from '../../../../../data/api';

const DepartmentTable = ({
  data,
  setSelectedElement,
  toggleViewModalState,
  toggleUpdateModalState
}) => {
  const deleteDepartment = async id => {
    const response = await deleteData('department', id);
    window.location.reload();
  };
  return (
    <table className="table columns-5">
      <thead>
        <tr>
          <th>id</th>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Fecha Craeción</th>
          <th>Fecha Actualización</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map(department => (
          <tr key={department?.id}>
            <td>{department?.id}</td>
            <td>{department?.name}</td>
            <td>{department?.description}</td>
            <td>{department?.created_at}</td>
            <td>{department?.updated_at}</td>
            <td className="flex justify-center items-center gap-2">
              <button
                className=""
                onClick={e => {
                  setSelectedElement(department);
                  toggleViewModalState();
                }}
              >
                <ViewIcon />
              </button>
              <button
                className=""
                onClick={e => {
                  setSelectedElement(department);
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
                    deleteDepartment(department.id);
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

export default DepartmentTable;
