import * as PropTypes from 'prop-types';
import Colors from '../../../../assets/colors';
import RestaurantButton from './restaurant-button/RestaurantButton';

function Restaurant({ restaurant }) {
  return (
    <div
      key={restaurant.name}
      style={{
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
        {restaurant.restaurantName}
      </div>
      <RestaurantButton>+</RestaurantButton>
    </div>
  );
}

Restaurant.propTypes = {
  restaurant: PropTypes.objectOf({
    id: PropTypes.string,
    restaurantName: PropTypes.string,
    agreeCount: PropTypes.number,
    disagreeCount: PropTypes.number,
  }).isRequired,
};

export default Restaurant;
