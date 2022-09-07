import { css } from '@emotion/react';
import Room from './room/Room';
import RoomAdditionButton from './room-list-button/RoomAdditionButton';
import useRoomList from '../../../../hooks/useRoomList';
import { RoomType } from '../../../../types';
import { useRecoilValue } from 'recoil';
import { RoomAtoms } from '../../../../recoil/atoms';

function RoomList() {
  const [roomIdList, addRoomList] = useRoomList();
  const rooms = (roomIdList as Array<number>).map(roomId => {
    return <Room key={roomId} roomId={roomId} />;
  });
  return (
    <div
      css={css({
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      })}
    >
      <p
        css={css({
          fontSize: 24,
          fontWeight: 'bold',
        })}
      >
        방 목록
      </p>
      <RoomAdditionButton
        addRoomList={addRoomList as (room: RoomType) => void}
      />
      <div
        css={css({
          overflow: 'scroll',
          height: '80%',
          display: 'flex',
          flexDirection: 'column',
          marginTop: 20,
          marginBottom: 20,
          paddingLeft: 20,
          paddingRight: 20,
        })}
      >
        {rooms}
      </div>
    </div>
  );
}

export default RoomList;
