import { css } from '@emotion/react';
import { useRecoilValue } from 'recoil';
import { selectedRoomSelector } from '../../../../recoil/atoms';
import { useEffect, useState } from 'react';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';

type rouletteRestaurant = {
  roomId: number;
  restaurantId: number;
  restaurantName: string;
};

function Roulette() {
  const selectedRoom = useRecoilValue(selectedRoomSelector);
  const [rouletteRows, setRouletteRows] = useState<EmotionJSX.Element[]>([]);

  useEffect(() => {
    setRouletteRows(
      selectedRoom.restaurants
        .flatMap(restaurant => {
          let result: Array<rouletteRestaurant> = [];
          for (
            let i = 0;
            i < restaurant.agreeCount - restaurant.disagreeCount;
            i++
          ) {
            result = [
              ...result,
              {
                roomId: selectedRoom.id,
                restaurantId: restaurant.id,
                restaurantName: restaurant.restaurantName,
              },
            ];
          }
          console.log(result);
          return result;
        })
        .map(it => {
          return <span>{it.restaurantName}</span>;
        }),
    );
    console.log(rouletteRows);
  }, [rouletteRows, selectedRoom.id, selectedRoom.restaurants]);

  return (
    <div css={css({ height: '60%' })}>
      <div
        css={css({
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          width: 400,
          height: 400,
        })}
      >
        {rouletteRows}
      </div>
      <div
        css={css({ display: 'flex', justifyContent: 'center', marginTop: 100 })}
      >
        <button>submit</button>
      </div>
    </div>
  );
}

export default Roulette;
