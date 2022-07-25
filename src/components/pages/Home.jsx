import Roulette from '../common/Roulette';
import UserInformation from '../common/UserInformation';
import RoomList from '../common/RoomList';

function Home() {
  return (
    <div style={{ display: 'flex', width: 1920, height: 1080 }}>
      <div>
        <Roulette />
      </div>
      <div>
        <UserInformation />
        <RoomList />
      </div>
    </div>
  );
}

export default Home;
