import EditIcon from '../../../../../components/common/EditIcon';
import DeleteIcon from '../../../../../components/common/DeleteIcon';
import ViewIcon from '../../../../../components/common/ViewIcon';
import { deleteData } from '../../../../../data/api';

const BenefitTable = ({
  data,
  setSelectedElement,
  toggleViewModalState,
  toggleUpdateModalState
}) => {
  const deleteBenefit = async id => {
    const response = await deleteData('benefit', id);
    window.location.reload();
  };
  return (
    <table className="table columns-5">
      <thead>
        <tr>
          <th>id</th>
          <th>Empleado</th>
          <th>Tipo</th>
          <th>Descripción</th>
          <th>Fecha de Consesión</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map(benefit => (
          <tr key={benefit?.id}>
            <td>{benefit?.id}</td>
            <td>{benefit?.employee?.first_name}</td>
            <td>{benefit?.benefit_type}</td>
            <td>{benefit?.description}</td>
            <td>{benefit?.grant_date}</td>
            <td className="flex justify-center items-center gap-2">
              <button
                className=""
                onClick={e => {
                  setSelectedElement(benefit);
                  toggleViewModalState();
                }}
              >
                <ViewIcon />
              </button>
              <button
                className=""
                onClick={e => {
                  setSelectedElement(benefit);
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
                    deleteBenefit(benefit.id);
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

export default BenefitTable;
