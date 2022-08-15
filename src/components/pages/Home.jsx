import Main from '../common/main/Main';
import SideBar from '../common/sidebar/SideBar';
import Colors from '../../assets/colors';

function Home() {
  return (
    <div style={{
      display: 'flex',
      width: '100vw',
      height: '100vh',
      justifyContent: 'center',
      background: Colors.OLDLACE,
    }}
    >
      <div style={{
        display: 'flex',
        height: window.innerHeight,
        maxWidth: window.outerWidth,
        width: window.outerWidth * 0.8,
        minWidth: 1130,
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
