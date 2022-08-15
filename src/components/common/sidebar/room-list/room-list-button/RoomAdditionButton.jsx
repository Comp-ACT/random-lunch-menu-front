import { useState } from 'react';
import Modal from '../../../dialog/modal';
import RoomAdditionDialog from '../dialog/RoomAdditionDialog';

function RoomAdditionButton() {
  const [addRoom, setAddRoom] = useState(false);
  return (
    <div>
      <button onClick={() => { setAddRoom(true); }}>+</button>
      {addRoom && (
        <Modal closeModal={() => {
          setAddRoom(false);
        }}
        >
          <RoomAdditionDialog />
        </Modal>
      )}
    </div>
  );
}

export default RoomAdditionButton;
