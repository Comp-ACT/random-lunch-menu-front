import { css } from '@emotion/react';
import { useRecoilState } from 'recoil';
import Hamburger from '../../../../assets/images/icons/Hamburger';
import Person from '../../../../assets/images/icons/Person';
import HeaderText from '../header-text/HeaderText';
import { selectedRoomAtoms } from '../../../../recoil/atoms';

function RoomConfigHeader() {
  const [selectedRoom] = useRecoilState(selectedRoomAtoms);
  return (
    <div css={css({
      display: 'flex',
      marginRight: 5,
    })}
    >
      <HeaderText text={selectedRoom.roomName} fontSize={24} fontWeight="bold" />
      <div css={css({ width: 20 })} />
      <Person />
      <Hamburger />
    </div>
  );
}

export default RoomConfigHeader;
