import { css } from '@emotion/react';
import { useRecoilValue } from 'recoil';
import Hamburger from '../../../../assets/images/icons/Hamburger';
import Person from '../../../../assets/images/icons/Person';
import HeaderText from '../header-text/HeaderText';
import { selectedRoomSelector } from '../../../../recoil/atoms';
import { useState } from 'react';
import Modal from '../../dialog/Modal';

function RoomConfigHeader() {
  const [personDialogFlag, setPersonDialogFlag] = useState<boolean>(false);
  const [hamburgerDialogFlag, setHamburgerDialogFlag] =
    useState<boolean>(false);
  const selectedRoom = useRecoilValue(selectedRoomSelector);
  const iconSize = 48;
  return (
    <div
      css={css({
        display: 'flex',
        marginRight: 5,
      })}
    >
      <HeaderText
        text={selectedRoom.roomName}
        fontSize={32}
        fontWeight="bold"
      />
      <div
        onClick={() => {
          setPersonDialogFlag(true);
        }}
        css={css({
          cursor: 'pointer',
          marginRight: 20,
        })}
      >
        <Person size={iconSize} />
      </div>
      <div
        onClick={() => {
          setHamburgerDialogFlag(true);
        }}
        css={css({
          cursor: 'pointer',
          marginRight: 20,
        })}
      >
        <Hamburger size={iconSize} />
      </div>
      {personDialogFlag && (
        <Modal
          closeModal={() => {
            setPersonDialogFlag(false);
          }}
        >
          <div></div>
        </Modal>
      )}
      {hamburgerDialogFlag && (
        <Modal
          closeModal={() => {
            setHamburgerDialogFlag(false);
          }}
        >
          <div></div>
        </Modal>
      )}
    </div>
  );
}

export default RoomConfigHeader;
