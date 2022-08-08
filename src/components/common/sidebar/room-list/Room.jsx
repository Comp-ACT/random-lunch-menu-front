import * as ProtoType from 'prop-types';

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
  name: ProtoType.string.isRequired,
};

export default Room;
