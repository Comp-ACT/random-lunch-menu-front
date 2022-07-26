import Roulette from '../common/Roulette';
import UserInformation from '../common/UserInformation';
import RoomList from '../common/RoomList';

function Home() {
  return (
    <div style={{
      display: 'flex',
      minWidth: 1440,
      minHeight: 720,
      width: '100vw',
      height: '100vh',
    }}
    >
      <div style={{ width: '85%' }}>
        <Roulette />
      </div>
      <div style={{ width: '15%' }}>
        <UserInformation />
        <RoomList />
      </div>
    </div>
  );
}

export default Home;
