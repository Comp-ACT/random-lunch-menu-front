import * as PropTypes from 'prop-types';
import Restaurant from './Restaurant';
import RestaurantInput from './restaurant-input/RestaurantInput';

function RestaurantList({ restaurantList }) {
  const tempHtml = restaurantList.map((temp) => (
    <Restaurant name={temp} />
  ));
  return (
    <div style={{
      height: '60%',
      width: 400,
    }}
    >
      <div style={{
        display: 'flex',
        justifyContent: 'center',
      }}
      >
        <RestaurantInput width={300} />
      </div>
      <div style={{
        overflow: 'scroll',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: 20,
      }}
      >
        {tempHtml}
      </div>
    </div>
  );
}

RestaurantList.propTypes = {
  restaurantList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RestaurantList;
