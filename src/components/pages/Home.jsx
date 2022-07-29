import Main from '../common/main/Main';
import SideBar from '../common/sidebar/SideBar';

function Home() {
  return (
    <div style={{
      display: 'flex',
      width: '100vw',
      height: '100vh',
      justifyContent: 'center',
    }}
    >
      <div style={{
        display: 'flex',
        width: 1400,
        height: '100vh',
        minHeight: 720,
      }}
      >
        <div style={{ width: '80%' }}>
          <Main />
        </div>
        <div style={{ width: '20%' }}>
          <SideBar />
        </div>
      </div>
    </div>
  );
}

export default Home;
