import { css } from '@emotion/react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import Colors from '../../../../../assets/colors';
import { RoomAtoms, selectedRoomIdAtoms } from '../../../../../recoil/atoms';

type Props = {
  roomId: number;
};

function Room({ roomId }: Props) {
  const setSelectedRoomId = useSetRecoilState(selectedRoomIdAtoms);
  const room = useRecoilValue(RoomAtoms(roomId));

  return (
    <div
      onClick={() => {
        setSelectedRoomId(roomId);
      }}
      css={css({
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        fontSize: 18,
        justifyContent: 'center',
        marginTop: 10,
        paddingRight: 10,
        paddingLeft: 10,
        minHeight: 90,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: Colors.CORAL,
        borderRadius: 10,
        transition: '0.2s',
        wordWrap: 'break-word',
        '&:hover': {
          background: Colors.CORAL,
          color: Colors.OLDLACE,
        },
      })}
    >
      {room.roomName}
    </div>
  );
}

export default Room;
