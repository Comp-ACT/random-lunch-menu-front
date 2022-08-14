import { useState } from 'react';
import Modal from '../../../dialog/modal';
import RoomJoiningDialog from '../dialog/RoomJoiningDialog';

function RoomJoiningButton() {
  const [joinRoom, setJoinRoom] = useState(false);
  return (
    <div>
      <button onClick={() => { setJoinRoom(true); }}>방 참가하기</button>
      {joinRoom && (
        <Modal closeModal={() => {
          setJoinRoom(false);
        }}
        >
          <RoomJoiningDialog />
        </Modal>
      )}
    </div>
  );
}

export default RoomJoiningButton;
