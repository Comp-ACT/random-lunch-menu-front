import Main from '../common/main/Main';
import SideBar from '../common/sidebar/SideBar';
import Colors from '../../assets/colors';
import Header from '../common/header/Header';

function Home() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      width: '100vw',
      height: '100vh',
      background: Colors.OLDLACE,
    }}
    >
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        maxWidth: window.outerWidth,
        width: window.outerWidth * 0.8,
        minWidth: 1130,
      }}
      >
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          boxSizing: 'border-box',
          borderStyle: 'solid',
          borderWidth: 2,
          minHeight: '8%',
        }}
        >
          <Header />
        </div>
        <div style={{
          display: 'flex',
          minHeight: '92%',
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
    </div>
  );
}

export default Home;
