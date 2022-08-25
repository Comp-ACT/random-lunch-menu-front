import * as PropTypes from 'prop-types';
import { css } from '@emotion/react';

function RestaurantInformationDialog({ restaurant }) {
  return (
    <div css={css({
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      height: '100%',
    })}
    >
      <div>
        {restaurant.restaurantName}
      </div>
      <div>
        찬성 개수:
        {' '}
        {restaurant.agreeCount}
      </div>
      <div>
        반대 개수:
        {' '}
        {restaurant.disagreeCount}
      </div>
      <div>
        찬성 반대 버튼
      </div>
    </div>
  );
}

RestaurantInformationDialog.propTypes = {
  restaurant: PropTypes.objectOf({
    id: PropTypes.string,
    restaurantName: PropTypes.string,
    agreeCount: PropTypes.number,
    disagreeCount: PropTypes.number,
  }).isRequired,
};

export default RestaurantInformationDialog;
