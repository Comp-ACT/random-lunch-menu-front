import Hamburger from '../../../../assets/images/icons/Hamburger';
import Person from '../../../../assets/images/icons/Person';
import HeaderText from '../header-text/HeaderText';

function RoomConfigHeader() {
  return (
    <div style={{
      display: 'flex',
      marginRight: 5,
    }}
    >
      <HeaderText text="대충 방 제목" fontSize={24} fontWeight="bold" />
      <div style={{ width: 20 }} />
      <Person />
      <Hamburger />
    </div>
  );
}

export default RoomConfigHeader;
