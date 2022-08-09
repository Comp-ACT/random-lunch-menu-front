import * as PropTypes from 'prop-types';
import Colors from '../../../../assets/colors';
import RestaurantButton from './restaurant-button/RestaurantButton';

function Restaurant({ name }) {
  return (
    <div style={{
      display: 'flex', marginTop: 30, textAlign: 'center', justifyContent: 'space-between', width: 300, background: Colors.CORAL,
    }}
    >
      <RestaurantButton>-</RestaurantButton>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        overflow: 'auto',
        whiteSpace: 'nowrap',
        width: 200,
        height: 50,
        justifyContent: 'center',
      }}
      >
        {name}
      </div>
      <RestaurantButton>+</RestaurantButton>
    </div>
  );
}

Restaurant.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Restaurant;
