import { useState } from 'react';
import {RestaurantType} from "../types";

function useRestaurantList(initialForm: Array<RestaurantType>) {
  const [restaurantList, setRestaurantList] = useState(initialForm);

  function addRestaurant(restaurant: RestaurantType) {
    setRestaurantList([...restaurantList, restaurant]);
  }

  return [restaurantList, addRestaurant];
}

export default useRestaurantList;
