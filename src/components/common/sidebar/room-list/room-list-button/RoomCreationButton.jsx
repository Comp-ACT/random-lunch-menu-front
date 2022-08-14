import { useState } from 'react';
import Modal from '../../../dialog/modal';
import RoomCreationDialog from '../dialog/RoomCreationDialog';

function RoomCreationButton() {
  const [createRoom, setCreateRoom] = useState(false);
  return (
    <div>
      <button onClick={() => { setCreateRoom(true); }}>방 만들기</button>
      {createRoom && (
        <Modal closeModal={() => {
          setCreateRoom(false);
        }}
        >
          <RoomCreationDialog />
        </Modal>
      )}
    </div>
  );
}

export default RoomCreationButton;
