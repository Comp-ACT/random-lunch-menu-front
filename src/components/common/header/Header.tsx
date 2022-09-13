import { css } from '@emotion/react';
import RoomConfigHeader from './room-config-header/RoomConfigHeader';
import HeaderText from './header-text/HeaderText';

function Header() {
  return (
    <div
      css={css({
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
        <HeaderText text="점메추" fontSize={48} fontWeight="bold" />
        <div
          css={css({
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          })}
        >
          <RoomConfigHeader />
        </div>
      </div>
      <div
        css={css({
          display: 'flex',
          flexDirection: 'row-reverse',
          width: '20%',
        })}
      >
        <HeaderText text="사용자 정보" fontSize={24} fontWeight="none" />
      </div>
    </div>
  );
}

export default Header;
