import * as PropTypes from 'prop-types';

function RestaurantListInput({ width, setRestaurantList }) {
  function onKeyDown(e) {
    if (e.key === 'Enter' && e.nativeEvent.isComposing === false) {
      e.preventDefault();
      setRestaurantList(e);
      e.target.value = '';
    }
  }
  return (
    <input
      type="text"
      onKeyDown={onKeyDown}
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

RestaurantListInput.propTypes = {
  width: PropTypes.number.isRequired,
  setRestaurantList: PropTypes.func.isRequired,
};

export default RestaurantListInput;
