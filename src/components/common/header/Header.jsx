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
        <div>
          점메추
        </div>
        <div>
          방 관련 설정
        </div>
      </div>
      <div style={{
        width: '20%',
        textAlign: 'right',
      }}
      >
        사용자 정보
      </div>
    </div>
  );
}

export default Header;
