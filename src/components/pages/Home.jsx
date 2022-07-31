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
        minWidth: window.outerWidth,
        minHeight: window.innerHeight,
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
