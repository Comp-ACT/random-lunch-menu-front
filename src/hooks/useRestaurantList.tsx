import { useState } from 'react';
import {Restaurant} from "../types";

function useRestaurantList(initialForm: Array<Restaurant>) {
  const [restaurantList, setRestaurantList] = useState(initialForm);

  function addRestaurant(restaurant: Restaurant) {
    setRestaurantList([...restaurantList, restaurant]);
  }

  return [restaurantList, addRestaurant];
}

export default useRestaurantList;
