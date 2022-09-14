import { css } from '@emotion/react';
import { useRecoilValue } from 'recoil';
import { selectedRoomSelector } from '../../../../recoil/atoms';

function HamburgerDialog() {
  const selectedRoom = useRecoilValue(selectedRoomSelector);
  return (
    <div
      css={css({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
      })}
    >
      <div
        css={css({
          fontSize: 32,
        })}
      >
        {selectedRoom.roomName} 설정
      </div>
      <div>방장인지 따라서 다르게 보이는 메뉴들</div>
      <div>대충 방 나가기</div>
    </div>
  );
}

export default HamburgerDialog;
