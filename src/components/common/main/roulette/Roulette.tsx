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
          return result;
        })
        .map(it => {
          return (
            <span
              css={css({
                textAlign: 'center',
                fontSize: 70,
                minHeight: 100,
                width: 400,
                marginBottom: 10,
                borderStyle: 'solid',
                overflow: 'auto',
                whiteSpace: 'nowrap',
                boxSizing: 'border-box',
              })}
            >
              {it.restaurantName}
            </span>
          );
        }),
    );
  }, [selectedRoom]);

  return (
    <div css={css({ height: '60%' })}>
      <div
        css={css({
          display: 'flex',
          flexDirection: 'column',
          width: 400,
          height: 100,
          marginTop: 200,
          overflow: 'scroll',
        })}
      >
        {rouletteRows}
      </div>
      <div
        css={css({ display: 'flex', justifyContent: 'center', marginTop: 200 })}
      >
        <button>submit</button>
      </div>
    </div>
  );
}

export default Roulette;
