import * as PropTypes from 'prop-types';

function RestaurantButton({ children }) {
  return (
    <button style={{
      width: 50,
      fontSize: 24,
    }}
    >
      {children}
    </button>
  );
}

RestaurantButton.propTypes = {
  children: PropTypes.string.isRequired,
};

export default RestaurantButton;
