import Roulette from '../common/Roulette';
import SideBar from '../common/sidebar/SideBar';

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
        <SideBar />
      </div>
    </div>
  );
}

export default Home;
