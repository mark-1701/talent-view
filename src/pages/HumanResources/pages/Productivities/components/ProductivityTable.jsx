import EditIcon from '../../../../../components/common/EditIcon';
import DeleteIcon from '../../../../../components/common/DeleteIcon';
import ViewIcon from '../../../../../components/common/ViewIcon';
import { deleteData } from '../../../../../data/api';

const ProductivityTable = ({
  data,
  setSelectedElement,
  toggleViewModalState,
  toggleUpdateModalState
}) => {
  const deleteProductivity = async id => {
    const response = await deleteData('productivity', id);
    window.location.reload();
  };
  return (
    <table className="table columns-5">
      <thead>
        <tr>
          <th>id</th>
          <th>Empleado</th>
          <th>Fecha</th>
          <th>Horas trabajadas</th>
          <th>Puntaje de productividad</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map(productivity => (
          <tr key={productivity?.id}>
            <td>{productivity?.id}</td>
            <td>{productivity?.employee?.first_name}</td>
            <td>{productivity?.date}</td>
            <td>{productivity?.hours_worked}</td>
            <td>{productivity?.productivity_score}</td>
            <td className="flex justify-center items-center gap-2">
              <button
                className=""
                onClick={e => {
                  setSelectedElement(productivity);
                  toggleViewModalState();
                }}
              >
                <ViewIcon />
              </button>
              <button
                className=""
                onClick={e => {
                  setSelectedElement(productivity);
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
                    deleteProductivity(productivity.id);
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

export default ProductivityTable;
