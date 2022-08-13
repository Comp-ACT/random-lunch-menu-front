import Restaurant from './restaurant/Restaurant';
import RestaurantListInput from './restaurant-list-input/RestaurantListInput';
import useRestaurantList from '../../../../hooks/useRestaurantList';

function RestaurantList() {
  const [restaurantList, addRestaurantList] = useRestaurantList([]);

  const restaurants = restaurantList.map((restaurant) => (
    <Restaurant key={restaurant.id} restaurant={restaurant} />
  ));
  return (
    <div style={{
      height: '60%',
      width: 400,
    }}
    >
      <div style={{
        display: 'flex',
        justifyContent: 'center',
      }}
      >
        <RestaurantListInput width={300} setRestaurantList={addRestaurantList} />
      </div>
      <div style={{
        overflow: 'scroll',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: 20,
      }}
      >
        {restaurants}
      </div>
    </div>
  );
}

export default RestaurantList;
