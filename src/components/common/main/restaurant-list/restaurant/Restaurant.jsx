import { useState } from 'react';
import * as PropTypes from 'prop-types';
import Colors from '../../../../../assets/colors';
import RestaurantInformationDialog from '../dialog/RestaurantInformationDialog';
import Modal from '../../../dialog/modal';

function Restaurant({ restaurant }) {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div>
      {
          isClicked && (
          <Modal closeModal={() => setIsClicked(false)}>
            <RestaurantInformationDialog />
          </Modal>
          )
      }
      <div
        key={restaurant.name}
        style={{
          display: 'flex', marginTop: 30, textAlign: 'center', justifyContent: 'space-between', width: 300, background: Colors.CORAL,
        }}
      >
        <div
          onClick={() => {
            setIsClicked(true);
          }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            overflow: 'auto',
            whiteSpace: 'nowrap',
            width: '100%',
            height: 50,
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          {restaurant.restaurantName}
        </div>
      </div>
    </div>
  );
}

Restaurant.propTypes = {
  restaurant: PropTypes.objectOf({
    id: PropTypes.string,
    restaurantName: PropTypes.string,
    agreeCount: PropTypes.number,
    disagreeCount: PropTypes.number,
  }).isRequired,
};

export default Restaurant;
