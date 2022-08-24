/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import RoomConfigHeader from './room-config-header/RoomConfigHeader';
import StyledText from '../StyledText';

function Header() {
  return (
    <div css={css({
      display: 'flex',
    })}
    >
      <div
        css={css({
          display: 'flex',
          justifyContent: 'space-between',
          width: '80%',
        })}
      >
        <StyledText text="점메추" fontSize={24} fontWeight="bold" />
        <div>
          <RoomConfigHeader />
        </div>
      </div>
      <div css={css({ display: 'flex', flexDirection: 'row-reverse', width: '20%' })}>
        <StyledText text="사용자 정보" fontSize={24} fontWeight="none" />
      </div>
    </div>
  );
}

export default Header;
