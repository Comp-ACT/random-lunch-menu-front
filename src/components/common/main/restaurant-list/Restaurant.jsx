import * as ProtoType from 'prop-types';
import Colors from '../../../../assets/colors';

function Restaurant({ name }) {
  return (
    <div style={{
      display: 'flex', marginTop: 30, textAlign: 'center', justifyContent: 'space-between', width: 300, maxHeight: 100, background: Colors.CORAL,
    }}
    >
      <button>-</button>
      <p>{name}</p>
      <button>+</button>
    </div>
  );
}

Restaurant.propTypes = {
  name: ProtoType.string.isRequired,
};

export default Restaurant;
