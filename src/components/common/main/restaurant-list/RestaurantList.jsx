import Restaurant from './Restaurant';
import RestaurantInput from './restaurant-input/RestaurantInput';
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
        <RestaurantInput width={300} setRestaurantList={addRestaurantList} />
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
