import Hamburger from '../../../../assets/images/icons/Hamburger';
import Person from '../../../../assets/images/icons/Person';

function RoomConfigHeader() {
  return (
    <div style={{
      display: 'flex',
      marginRight: 5,
    }}
    >
      <Person />
      <Hamburger />
    </div>
  );
}

export default RoomConfigHeader;
