import { useRecoilValue } from 'recoil';
import { selectedRoomSelector } from '../../../../recoil/atoms';
import { css } from '@emotion/react';

function PersonDialog() {
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
        {selectedRoom.roomName} 구성원
      </div>
      <div>대충 사람들 정보</div>
      <div>초대 링크</div>
    </div>
  );
}

export default PersonDialog;
