import * as PropTypes from 'prop-types';
import { css } from '@emotion/react';
import Colors from '../../../../../assets/colors';

function Room({ room }) {
  return (
    <div css={css({
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
