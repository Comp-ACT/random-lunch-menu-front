import { useState } from 'react';

function useRestaurantList(initialForm) {
  const [restaurantList, setRestaurantList] = useState(initialForm);

  function addRestaurant(response) {
    const copiedRestaurantList = [...restaurantList, {
      id: response.id,
      restaurantName: response.restaurantName,
      agreeCount: response.agreeCount,
      disagreeCount: response.disagreeCount,
    }];
    setRestaurantList(copiedRestaurantList);
  }

  return [restaurantList, addRestaurant];
}

export default useRestaurantList;
