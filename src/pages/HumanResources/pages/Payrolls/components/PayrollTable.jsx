import EditIcon from '../../../../../components/common/EditIcon';
import DeleteIcon from '../../../../../components/common/DeleteIcon';
import ViewIcon from '../../../../../components/common/ViewIcon';
import { deleteData } from '../../../../../data/api';

const PayrollTable = ({
  data,
  setSelectedElement,
  toggleViewModalState,
  toggleUpdateModalState
}) => {
  const deletePayroll = async id => {
    const response = await deleteData('payroll', id);
    window.location.reload();
  };
  return (
    <table className="table columns-5">
      <thead>
        <tr>
          <th>id</th>
          <th>Empleado</th>
          <th>Periodo de inicio</th>
          <th>Periodo de fin</th>
          <th>Salario bruto</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map(payroll => (
          <tr key={payroll?.id}>
            <td>{payroll?.id}</td>
            <td>{payroll?.employee?.first_name}</td>
            <td>{payroll?.start_period}</td>
            <td>{payroll?.end_period}</td>
            <td>Q. {payroll?.gross_salary}</td>
            <td className="flex justify-center items-center gap-2">
              <button
                className=""
                onClick={e => {
                  setSelectedElement(payroll);
                  toggleViewModalState();
                }}
              >
                <ViewIcon />
              </button>
              <button
                className=""
                onClick={e => {
                  setSelectedElement(payroll);
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
                    deletePayroll(payroll.id);
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

export default PayrollTable;
