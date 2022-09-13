import { useState } from 'react';
import { css } from '@emotion/react';
import Colors from '../../../../../assets/colors';
import RestaurantInformationDialog from '../dialog/RestaurantInformationDialog';
import Modal from '../../../dialog/Modal';
import { RestaurantType } from '../../../../../types';

type Props = {
  restaurant: RestaurantType;
};

function Restaurant({ restaurant }: Props) {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div>
      {isClicked && (
        <Modal closeModal={() => setIsClicked(false)}>
          <RestaurantInformationDialog restaurant={restaurant} />
        </Modal>
      )}
      <div
        key={restaurant.restaurantName}
        css={css({
          display: 'flex',
          marginTop: 30,
          textAlign: 'center',
          justifyContent: 'space-between',
          width: 300,
          background: Colors.CORAL,
          borderRadius: 20,
          fontSize: 20,
        })}
      >
        <div
          onClick={() => {
            setIsClicked(true);
          }}
          css={css({
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'auto',
            whiteSpace: 'nowrap',
            width: '100%',
            height: 70,
            justifyContent: 'center',
            textAlign: 'center',
            transition: '0.3s',
            paddingLeft: 10,
            paddingRight: 10,
            '&:hover': {
              height: 77,
              color: Colors.OLDLACE,
            },
          })}
        >
          {restaurant.restaurantName}
        </div>
      </div>
    </div>
  );
}

export default Restaurant;
