import PropTypes from 'prop-types';

function StyledText({ text, fontSize = 12, fontWeight = 'bold' }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      fontSize,
      fontWeight,
    }}
    >
      {text}
    </div>
  );
}

StyledText.propTypes = {
  text: PropTypes.string.isRequired,
  fontSize: PropTypes.number.isRequired,
  fontWeight: PropTypes.string.isRequired,
};

export default StyledText;
