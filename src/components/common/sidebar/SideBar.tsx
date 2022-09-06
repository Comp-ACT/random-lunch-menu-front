import { css } from '@emotion/react';
import Colors from '../../../assets/colors';
import RoomList from './room-list/RoomList';

function SideBar() {
  return (
    <div css={css({
      background: Colors.OLDLACE,
      height: '100%',
    })}
    >
      <RoomList />
    </div>
  );
}

export default SideBar;
