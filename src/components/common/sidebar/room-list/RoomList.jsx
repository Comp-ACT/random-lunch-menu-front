import Room from './room/Room';
import RoomCreationButton from './room-list-button/RoomCreationButton';
import RoomJoiningButton from './room-list-button/RoomJoiningButton';

function RoomList() {
  const tempList = ['Comp-ACT 점심 메뉴', 'Comp-ACT 저녁 메뉴', '전능 점심 메뉴', 'Comp-ACT 점심 메뉴', 'Comp-ACT 저녁 메뉴', '전능 점심 메뉴', 'Comp-ACT 점심 메뉴', 'Comp-ACT 저녁 메뉴', '전능 점심 메뉴', 'Comp-ACT 점심 메뉴', 'Comp-ACT 저녁 메뉴', '전능 점심 메뉴', 'Comp-ACT 점심 메뉴', 'Comp-ACT 저녁 메뉴', '전능 점심 메뉴'];
  const tempHtml = tempList.map((temp) => (
    <Room name={temp} />
  ));
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '60%',
    }}
    >
      <p>방 목록</p>
      <RoomCreationButton />
      <RoomJoiningButton />
      <div style={{
        overflow: 'scroll',
        height: '80%',
        display: 'flex',
        flexDirection: 'column',
      }}
      >
        {tempHtml}
      </div>
    </div>
  );
}

export default RoomList;
