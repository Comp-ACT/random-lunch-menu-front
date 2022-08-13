import { useState } from 'react';
import Room from './Room';
import Modal from '../../dialog/modal';
import RoomCreationDialog from '../dialog/room-creation-dialog';
import RoomJoinDialog from '../dialog/room-join-dialog';

function RoomList() {
  const [createRoom, setCreateRoom] = useState(false);
  const [joinRoom, setJoinRoom] = useState(false);
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
      <button onClick={() => { setCreateRoom(true); }}>방 만들기</button>
      {createRoom && (
      <Modal closeModal={() => {
        setCreateRoom(false);
      }}
      >
        <RoomCreationDialog />
      </Modal>
      )}
      <button>방 참가하기</button>
      {joinRoom && (
        <Modal closeModal={() => {
          setJoinRoom(false);
        }}
        >
          <RoomJoinDialog />
        </Modal>
      )}
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
