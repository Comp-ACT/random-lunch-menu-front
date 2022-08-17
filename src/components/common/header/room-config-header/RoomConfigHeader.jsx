import Hamburger from '../../../../assets/images/Hamburger';
import Person from '../../../../assets/images/Person';

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
