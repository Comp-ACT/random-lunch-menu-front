import { css } from '@emotion/react';
import Room from './room/Room';
import RoomAdditionButton from './room-list-button/RoomAdditionButton';
import useRoomList from '../../../../hooks/useRoomList';
import { RoomType } from '../../../../types';

function RoomList() {
  const [roomList, addRoomList] = useRoomList();
  const rooms = (roomList as Array<RoomType>).map(room => (
    <Room key={room.id} room={room} />
  ));
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
