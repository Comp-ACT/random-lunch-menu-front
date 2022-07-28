import Colors from '../../../assets/colors';
import UserInformation from './UserInformation';
import RoomList from './RoomList';

function SideBar() {
  return (
    <div style={{ background: Colors.CORAL, height: '100%' }}>
      <UserInformation />
      <RoomList />
    </div>
  );
}

export default SideBar;
