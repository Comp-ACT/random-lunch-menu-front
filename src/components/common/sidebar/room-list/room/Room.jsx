import * as PropTypes from 'prop-types';
import { css } from '@emotion/react';
import Colors from '../../../../../assets/colors';

function Room({ name }) {
  return (
    <div css={css({
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      fontSize: 18,
      justifyContent: 'center',
      marginTop: 10,
      minHeight: 100,
      borderStyle: 'solid',
      borderWidth: 2,
      borderColor: Colors.CORAL,
      borderRadius: 10,
    }}
    >
      {name}
    </div>
  );
}

Room.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Room;
