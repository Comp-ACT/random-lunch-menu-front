import Colors from '../../../assets/colors';
import Roulette from './roulette/Roulette';
import RestaurantList from './restaurant-list/RestaurantList';

function Main() {
  return (
    <div style={{
      background: Colors.OLDLACE,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}
    >
      <div style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        height: '100%',
        alignItems: 'center',
      }}
      >
        <Roulette />
        <RestaurantList />
      </div>
    </div>
  );
}

export default Main;
