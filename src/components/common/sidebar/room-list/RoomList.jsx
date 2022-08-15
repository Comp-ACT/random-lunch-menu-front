import Room from './room/Room';
import RoomAdditionButton from './room-list-button/RoomAdditionButton';

function RoomList() {
  const tempList = ['Comp-ACT 점심 메뉴', 'Comp-ACT 저녁 메뉴', '전능 점심 메뉴', 'Comp-ACT 점심 메뉴', 'Comp-ACT 저녁 메뉴', '전능 점심 메뉴', 'Comp-ACT 점심 메뉴', 'Comp-ACT 저녁 메뉴', '전능 점심 메뉴', 'Comp-ACT 점심 메뉴', 'Comp-ACT 저녁 메뉴', '전능 점심 메뉴', 'Comp-ACT 점심 메뉴', 'Comp-ACT 저녁 메뉴', '전능 점심 메뉴'];
  const tempHtml = tempList.map((temp) => (
    <Room name={temp} />
  ));
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    }}
    >
      <p style={{
        fontSize: 24,
        fontWeight: 'bold',
      }}
      >
        방 목록
      </p>
      <RoomAdditionButton />
      <div style={{
        overflow: 'scroll',
        height: '80%',
        display: 'flex',
        flexDirection: 'column',
        marginTop: 20,
        marginBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
      }}
      >
        {tempHtml}
      </div>
    </div>
  );
}

export default RoomList;
