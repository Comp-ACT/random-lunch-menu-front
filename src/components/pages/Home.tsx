import { css } from '@emotion/react';
import Main from '../common/main/Main';
import SideBar from '../common/sidebar/SideBar';
import Header from '../common/header/Header';
import Colors from '../../assets/colors';
import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { selectedRoomIdAtoms, selectedRoomSelector } from '../../recoil/atoms';
import { SELECTED_ROOM_ID } from '../../assets/resources/localStorage';

function Home() {
  const setSelectedRoomId = useSetRecoilState(selectedRoomIdAtoms);
  const selectedRoom = useRecoilValue(selectedRoomSelector);

  function initializeSelectedRoomInformation() {
    if (localStorage[SELECTED_ROOM_ID]) {
      setSelectedRoomId(localStorage[SELECTED_ROOM_ID]);

      if (selectedRoom.id === -1) {
        localStorage.removeItem(SELECTED_ROOM_ID);
        setSelectedRoomId(-1);
      }
    }
  }

  useEffect(initializeSelectedRoomInformation, []);
  return (
    <div
      css={css({
        display: 'flex',
        justifyContent: 'center',
        width: '100vw',
        height: '100vh',
        background: Colors.OLDLACE,
      })}
    >
      <div
        css={css({
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          maxWidth: window.outerWidth,
          width: window.outerWidth * 0.8,
          minWidth: 1130,
        })}
      >
        <div
          css={css({
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            minHeight: '12%',
            maxHeight: '12%',
          })}
        >
          <Header />
        </div>
        <div
          css={css({
            display: 'flex',
            minHeight: '88%',
          })}
        >
          <div css={css({ width: '80%' })}>
            <Main />
          </div>
          <div css={css({ width: '20%' })}>
            <SideBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
