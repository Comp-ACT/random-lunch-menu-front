import * as PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { useSetRecoilState } from 'recoil';
import Colors from '../../../../../assets/colors';
import { selectedRoomAtoms } from '../../../../../recoil/atoms';

function Room({ room }) {
  const setSelectedRoom = useSetRecoilState(selectedRoomAtoms);

  return (
    <div
      onClick={() => { setSelectedRoom(room); }}
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

Room.propTypes = {
  room: PropTypes.string.isRequired,
};

export default Room;
