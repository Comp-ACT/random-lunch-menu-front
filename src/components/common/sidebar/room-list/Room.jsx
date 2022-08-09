import * as PropTypes from 'prop-types';

function Room({ name }) {
  return (
    <div style={{
      textAlign: 'center',
      marginTop: 30,
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
