import * as PropTypes from 'prop-types';
import { css } from '@emotion/react';

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
      css={css({
        width,
        textAlign: 'center',
        fontSize: 18,
        height: 40,
        border: 'none',
      })}
    />
  );
}

RestaurantListInput.propTypes = {
  width: PropTypes.number.isRequired,
  setRestaurantList: PropTypes.func.isRequired,
};

export default RestaurantListInput;
