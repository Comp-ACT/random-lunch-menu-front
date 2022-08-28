import * as PropTypes from 'prop-types';
import { css } from '@emotion/react';

function RestaurantInformationDialog({ restaurant }) {
  return (
    <div css={css({
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    })}
    >
      <div css={css({
        fontSize: 32,
      })}
      >
        {restaurant.restaurantName}
      </div>
      <div css={css({
        display: 'flex',
        flexDirection: 'column',
        marginTop: 100,
        textAlign: 'left',
        fontSize: 24,
        justifyContent: 'space-between',
        height: '100%',
      })}
      >
        <div css={css({
          display: 'flex',
        })}
        >
          <p css={css({ marginRight: 15 })}>
            찬성 개수:
            {' '}
            {restaurant.agreeCount}
          </p>
          <button>찬성</button>
        </div>
        <div css={css({
          display: 'flex',
        })}
        >
          <p css={css({ marginRight: 15 })}>
            반대 개수:
            {' '}
            {restaurant.disagreeCount}
          </p>
          <button>반대</button>
        </div>
        <div css={css({
          display: 'flex',
          justifyContent: 'space-around',
        })}
        >
          <button>투표 취소</button>
          <button>가게 삭제</button>
        </div>
      </div>
    </div>
  );
}

RestaurantInformationDialog.propTypes = {
  restaurant: PropTypes.objectOf({
    id: PropTypes.number,
    restaurantName: PropTypes.string,
    agreeCount: PropTypes.number,
    disagreeCount: PropTypes.number,
  }).isRequired,
};

export default RestaurantInformationDialog;
