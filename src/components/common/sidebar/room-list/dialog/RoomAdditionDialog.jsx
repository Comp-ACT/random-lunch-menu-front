import { css } from '@emotion/react';

function RoomAdditionDialog() {
  return (
    <div css={css({
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100%',
    })}
    >
      <div>
        방제목 입력 부분
      </div>
      <div>
        버튼
      </div>
    </div>
  );
}

export default RoomAdditionDialog;
