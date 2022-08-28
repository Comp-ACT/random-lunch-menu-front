import { useState } from 'react';
import { css } from '@emotion/react';
import Modal from '../../../dialog/Modal';
import RoomAdditionDialog from '../dialog/RoomAdditionDialog';
import Colors from '../../../../../assets/colors';

function RoomAdditionButton() {
  const [addRoom, setAddRoom] = useState(false);
  return (
    <div>
      <div
        onClick={() => {
          setAddRoom(true);
        }}
        css={css({
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          justifyContent: 'center',
          minHeight: 100,
          borderStyle: 'solid',
          borderWidth: 2,
          borderColor: Colors.CORAL,
          borderRadius: 20,
          fontSize: 64,
          transition: '0.2s',
          '&:hover': {
            background: Colors.CORAL,
            color: Colors.OLDLACE,
          },
        })}
      >
        +
      </div>
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
