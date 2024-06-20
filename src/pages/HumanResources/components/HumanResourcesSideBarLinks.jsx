import SystemLogout from '../../../components/system/SystemLogout';
import SystemSideBarLink from '../../../components/system/SystemSideBarLink';

const HumanResourcesSideBarLinks = ({ selectedLink }) => {
  return (
    <>
      <SystemSideBarLink link={'/human-resources/employees'} icon={'person_apron'} linkTitle={'Empleados'} selectedLink={selectedLink} />
      <SystemSideBarLink link={'/human-resources/benefits'} icon={'featured_seasonal_and_gifts'} linkTitle={'Beneficios'} selectedLink={selectedLink} />
      <SystemSideBarLink link={'/human-resources/employees'} icon={'productivity'} linkTitle={'Productividad'} selectedLink={selectedLink} />
      <SystemSideBarLink link={'/human-resources/employees'} icon={'person_off'} linkTitle={'Estado de Empleado'} selectedLink={selectedLink} />
      <SystemSideBarLink link={'/human-resources/employees'} icon={'paid'} linkTitle={'Nomina'} selectedLink={selectedLink} />
      <SystemSideBarLink link={'/human-resources/employees'} icon={'badge'} linkTitle={'Puesto'} selectedLink={selectedLink} />
      <SystemSideBarLink link={'/human-resources/employees'} icon={'group_work'} linkTitle={'Departamento'} selectedLink={selectedLink} />
      <SystemLogout icon={'logout'} linkTitle={'Salir'} selectedLink={selectedLink} />
    </>
  );
};

export default HumanResourcesSideBarLinks;
