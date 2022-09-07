import { css } from '@emotion/react';
import { useRecoilValue } from 'recoil';
import Hamburger from '../../../../assets/images/icons/Hamburger';
import Person from '../../../../assets/images/icons/Person';
import HeaderText from '../header-text/HeaderText';
import { selectedRoomSelector } from '../../../../recoil/atoms';

function RoomConfigHeader() {
  const selectedRoom = useRecoilValue(selectedRoomSelector);
  return (
    <div
      css={css({
        display: 'flex',
        marginRight: 5,
      })}
    >
      <HeaderText
        text={selectedRoom.roomName}
        fontSize={24}
        fontWeight="bold"
      />
      <div css={css({ width: 20 })} />
      <Person />
      <Hamburger />
    </div>
  );
}

export default RoomConfigHeader;