import * as PropTypes from 'prop-types';

function RestaurantInput({ width }) {
  return (
    <input
      type="text"
      style={{
        width,
        textAlign: 'center',
        fontSize: 18,
        height: 40,
        border: 'none',
      }}
    />
  );
}

RestaurantInput.propTypes = {
  width: PropTypes.number.isRequired,
};

export default RestaurantInput;
