import * as PropTypes from 'prop-types';
import { css } from '@emotion/react';
import Colors from '../../../../../assets/colors';

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
      placeholder="가게 이름을 적어주세요."
      css={css({
        uiFieldPlaceholderColor: '#767676',
        width,
        fontSize: 18,
        height: 40,
        border: 'none',
        borderBottom: '1px solid #ccc',
        backgroundColor: 'transparent',
        borderRadius: 0,
        boxSizing: 'border-box',
        transition: '0.3s',
        '&:focus': {
          outline: 'none',
          borderColor: Colors.CORAL,
          paddingLeft: 20,
          paddingRight: 20,
        },
      })}
    />
  );
}

RestaurantListInput.propTypes = {
  width: PropTypes.number.isRequired,
  setRestaurantList: PropTypes.func.isRequired,
};

export default RestaurantListInput;
