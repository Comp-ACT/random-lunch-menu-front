import RoomConfigHeader from './room-config-header/RoomConfigHeader';

function Header() {
  return (
    <div style={{
      display: 'flex',
    }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '80%',
        }}
      >
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          fontSize: 24,
          fontWeight: 'bold',
        }}
        >
          점메추
        </div>
        <div>
          <RoomConfigHeader />
        </div>
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '20%',
        textAlign: 'right',
        fontSize: 24,
      }}
      >
        사용자 정보
      </div>
    </div>
  );
}

export default Header;
