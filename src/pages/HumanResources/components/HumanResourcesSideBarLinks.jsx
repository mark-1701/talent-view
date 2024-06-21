import SystemLogout from '../../../components/system/SystemLogout';
import SystemSideBarLink from '../../../components/system/SystemSideBarLink';

const HumanResourcesSideBarLinks = ({ selectedLink }) => {
  return (
    <>
      <SystemSideBarLink link={'/human-resources/employees'} icon={'person_apron'} linkTitle={'Empleados'} selectedLink={selectedLink} />
      <SystemSideBarLink link={'/human-resources/benefits'} icon={'featured_seasonal_and_gifts'} linkTitle={'Beneficios'} selectedLink={selectedLink} />
      <SystemSideBarLink link={'/human-resources/productivities'} icon={'productivity'} linkTitle={'Productividad'} selectedLink={selectedLink} />
      <SystemSideBarLink link={'/human-resources/employment-statuses'} icon={'person_off'} linkTitle={'Estado de Empleado'} selectedLink={selectedLink} />
      <SystemSideBarLink link={'/human-resources/payrolls'} icon={'paid'} linkTitle={'Nomina'} selectedLink={selectedLink} />
      {/* <SystemSideBarLink link={'/human-resources/positions'} icon={'badge'} linkTitle={'Puestos'} selectedLink={selectedLink} />
      <SystemSideBarLink link={'/human-resources/departments'} icon={'group_work'} linkTitle={'Departamentos'} selectedLink={selectedLink} /> */}
      <SystemLogout icon={'logout'} linkTitle={'Salir'} selectedLink={selectedLink} />
    </>
  );
};

export default HumanResourcesSideBarLinks;
