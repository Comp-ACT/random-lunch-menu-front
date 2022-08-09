import { useState } from 'react';

function useRestaurantList(initialForm) {
  const [restaurantList, setRestaurantList] = useState(initialForm);

  function addRestaurant(e) {
    const copiedRestaurantList = [...restaurantList, e.target.value];
    setRestaurantList(copiedRestaurantList);
  }

  return [restaurantList, addRestaurant];
}

export default useRestaurantList;
