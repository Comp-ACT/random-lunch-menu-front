import * as PropTypes from 'prop-types';

function RestaurantInput({ width, setRestaurantList }) {
  function onKeyPressed(e) {
    if (e.key === 'Enter') {
      setRestaurantList(e);
      e.target.value = '';
    }
  }
  return (
    <input
      type="text"
      onKeyDown={onKeyPressed}
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
  setRestaurantList: PropTypes.func.isRequired,
};

export default RestaurantInput;
