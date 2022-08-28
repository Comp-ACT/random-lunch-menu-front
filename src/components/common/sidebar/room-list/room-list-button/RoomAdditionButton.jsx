import { useState } from 'react';
import { css } from '@emotion/react';
import * as PropTypes from 'prop-types';
import Modal from '../../../dialog/Modal';
import RoomAdditionDialog from '../dialog/RoomAdditionDialog';
import Colors from '../../../../../assets/colors';
import { addRoomApi } from '../../../../../utils/MockAPI';
import LoadingModal from '../../../dialog/LoadingModal';

function RoomAdditionButton({ addRoomList }) {
  const [showRoomAdditionDialog, setShowRoomAdditionDialog] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div>
      <div
        onClick={() => {
          setShowRoomAdditionDialog(true);
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
      {showRoomAdditionDialog && (
        <Modal closeModal={() => {
          setShowRoomAdditionDialog(false);
        }}
        >
          <RoomAdditionDialog addRoomListAndCloseModal={(name) => {
            setShowRoomAdditionDialog(false);

            setIsLoading(true);

            addRoomApi({
              id: Math.random(),
              roomName: name,
            }).then((response) => {
              addRoomList(response);
              setIsLoading(false);
            });
          }}
          />
        </Modal>
      )}
      {
        isLoading && <LoadingModal />
      }
    </div>
  );
}

RoomAdditionButton.propTypes = {
  addRoomList: PropTypes.func.isRequired,
};

export default RoomAdditionButton;
