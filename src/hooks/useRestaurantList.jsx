import { useState } from 'react';

function useRestaurantList(initialForm) {
  const [restaurantList, setRestaurantList] = useState(initialForm);

  function addRestaurant(e) {
    const copiedRestaurantList = [...restaurantList, {
      id: '1234',
      restaurantName: e.target.value,
      agreeCount: 3,
      disagreeCount: 1,
    }];
    setRestaurantList(copiedRestaurantList);
  }

  return [restaurantList, addRestaurant];
}

export default useRestaurantList;
