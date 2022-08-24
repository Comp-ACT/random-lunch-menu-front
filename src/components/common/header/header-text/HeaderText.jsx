/** @jsxImportSource @emotion/react */
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

function HeaderText({ text, fontSize = 12, fontWeight = 'bold' }) {
  return (
    <div css={css({
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      fontSize,
      fontWeight,
    })}
    >
      {text}
    </div>
  );
}

HeaderText.propTypes = {
  text: PropTypes.string.isRequired,
  fontSize: PropTypes.number.isRequired,
  fontWeight: PropTypes.string.isRequired,
};

export default HeaderText;
