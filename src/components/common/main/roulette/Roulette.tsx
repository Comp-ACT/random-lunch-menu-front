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
  const [isRouletteSpinning, setIsRouletteSpinning] = useState<boolean>(false);

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
                '--index': -rouletteRows.length + 1,
                textAlign: 'center',
                fontSize: 70,
                minHeight: 100,
                width: 400,
                borderStyle: 'solid',
                overflow: 'scroll',
                whiteSpace: 'nowrap',
                boxSizing: 'border-box',
                '@keyframes scroll': {
                  to: { transform: 'translateY(calc(var(--index) * 100%))' },
                },
                animation: isRouletteSpinning ? 'scroll 0.5s linear 10' : '',
                '::-webkit-scrollbar': {
                  display: 'none',
                },
              })}
            >
              {it.restaurantName}
            </span>
          );
        }),
    );
  }, [selectedRoom, isRouletteSpinning]);

  return (
    <div css={css({ height: '60%' })}>
      <div
        css={css({
          display: 'flex',
          flexDirection: 'column',
          width: 400,
          height: 100,
          marginTop: 200,
          overflow: 'hidden',
        })}
      >
        {rouletteRows}
      </div>
      <div
        css={css({ display: 'flex', justifyContent: 'center', marginTop: 200 })}
      >
        <button
          onClick={() => {
            setIsRouletteSpinning(!isRouletteSpinning);
          }}
        >
          submit
        </button>
      </div>
    </div>
  );
}

export default Roulette;
