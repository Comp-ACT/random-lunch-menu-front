import { css } from '@emotion/react';
import Restaurant from './restaurant/Restaurant';
import RestaurantListInput from './restaurant-list-input/RestaurantListInput';
import useRestaurantList from '../../../../hooks/useRestaurantList';
import {RestaurantType} from "../../../../types";

function RestaurantList() {
  const [restaurantList, addRestaurantList] = useRestaurantList([]);

  const restaurants = (restaurantList as Array<RestaurantType>).map((restaurant) => (
    <Restaurant key={restaurant.id} restaurant={restaurant} />
  ));
  return (
    <div css={css({
      height: '60%',
      width: 400,
    })}
    >
      <div css={css({
        display: 'flex',
        justifyContent: 'center',
      })}
      >
        <RestaurantListInput width={300} setRestaurantList={addRestaurantList as ((restaurant: RestaurantType) => void)} />
      </div>
      <div css={css({
        overflow: 'scroll',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: 20,
      })}
      >
        {restaurants}
      </div>
    </div>
  );
}

export default RestaurantList;
