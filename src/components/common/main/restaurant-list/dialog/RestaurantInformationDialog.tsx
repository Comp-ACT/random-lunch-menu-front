import { css } from '@emotion/react';
import { RestaurantType } from '../../../../../types';

type Props = {
  restaurant: RestaurantType;
};

function RestaurantInformationDialog({ restaurant }: Props) {
  return (
    <div
      css={css({
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      })}
    >
      <div
        css={css({
          fontSize: 32,
        })}
      >
        {restaurant.restaurantName}
      </div>
      <div
        css={css({
          display: 'flex',
          flexDirection: 'column',
          marginTop: 100,
          textAlign: 'left',
          fontSize: 24,
          justifyContent: 'space-between',
          height: '100%',
        })}
      >
        <div
          css={css({
            display: 'flex',
          })}
        >
          <p css={css({ marginRight: 15 })}>
            찬성 개수: {restaurant.agreeCount}
          </p>
          <button>찬성</button>
        </div>
        <div
          css={css({
            display: 'flex',
          })}
        >
          <p css={css({ marginRight: 15 })}>
            반대 개수: {restaurant.disagreeCount}
          </p>
          <button>반대</button>
        </div>
        <div
          css={css({
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

export default RestaurantInformationDialog;
