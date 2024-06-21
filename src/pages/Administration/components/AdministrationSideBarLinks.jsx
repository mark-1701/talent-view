import SystemLogout from '../../../components/system/SystemLogout';
import SystemSideBarLink from '../../../components/system/SystemSideBarLink';

const AdministrationSideBarLinks = ({ selectedLink }) => {
  return (
    <>
      <SystemSideBarLink link={'/administration/employees'} icon={'person_apron'} linkTitle={'Empleados'} selectedLink={selectedLink} />
      <SystemSideBarLink link={'/administration/benefits'} icon={'featured_seasonal_and_gifts'} linkTitle={'Beneficios'} selectedLink={selectedLink} />
      <SystemSideBarLink link={'/administration/productivities'} icon={'productivity'} linkTitle={'Productividad'} selectedLink={selectedLink} />
      <SystemSideBarLink link={'/administration/employment-statuses'} icon={'person_off'} linkTitle={'Estado de Empleado'} selectedLink={selectedLink} />
      <SystemSideBarLink link={'/administration/payrolls'} icon={'paid'} linkTitle={'Nomina'} selectedLink={selectedLink} />
      <SystemSideBarLink link={'/administration/positions'} icon={'badge'} linkTitle={'Puestos'} selectedLink={selectedLink} />
      <SystemSideBarLink link={'/administration/departments'} icon={'group_work'} linkTitle={'Departamentos'} selectedLink={selectedLink} />
      <SystemLogout icon={'logout'} linkTitle={'Salir'} selectedLink={selectedLink} />
    </>
  )
}

export default AdministrationSideBarLinks