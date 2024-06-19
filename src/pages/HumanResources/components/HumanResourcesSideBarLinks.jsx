import SystemLogout from '../../../components/system/SystemLogout';
import SystemSideBarLink from '../../../components/system/SystemSideBarLink';

const HumanResourcesSideBarLinks = ({ selectedLink }) => {
  return (
    <>
      <SystemSideBarLink link={'/human-resources/employees'} icon={'confirmation_number'} linkTitle={'Mis Tickets'} selectedLink={selectedLink} />
      <SystemLogout icon={'logout'} linkTitle={'Salir'} selectedLink={selectedLink} />
    </>
  );
};

export default HumanResourcesSideBarLinks;
