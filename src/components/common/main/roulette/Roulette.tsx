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

  const spinningRouletteRowsStyle = css({
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
    animation: 'scroll 0.5s linear 6',
    '::-webkit-scrollbar': {
      display: 'none',
    },
  });

  let stoppedRouletteRowsStyle = css({
    '--index': 0,
    textAlign: 'center',
    fontSize: 70,
    minHeight: 100,
    width: 400,
    borderStyle: 'solid',
    overflow: 'scroll',
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    transform: 'translateY(calc(var(--index) * 100%))',
    '::-webkit-scrollbar': {
      display: 'none',
    },
  });

  function getRandomIndex(): number {
    return -Math.floor(
      Math.random() *
        selectedRoom.restaurants.flatMap(restaurant => {
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
        }).length,
    );
  }

  function setRandomRouletteIndex() {
    stoppedRouletteRowsStyle = css({
      '--index': getRandomIndex(),
      textAlign: 'center',
      fontSize: 70,
      minHeight: 100,
      width: 400,
      borderStyle: 'solid',
      overflow: 'scroll',
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      transform: 'translateY(calc(var(--index) * 100%))',
      '::-webkit-scrollbar': {
        display: 'none',
      },
    });
  }

  function getRouletteRowsFromSelectedRoom(): EmotionJSX.Element[] {
    return selectedRoom.restaurants
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
            css={
              isRouletteSpinning
                ? spinningRouletteRowsStyle
                : stoppedRouletteRowsStyle
            }
          >
            {it.restaurantName}
          </span>
        );
      });
  }

  useEffect(() => {
    setRandomRouletteIndex();
    setRouletteRows(getRouletteRowsFromSelectedRoom());
  }, [selectedRoom, isRouletteSpinning]);

  useEffect(() => {
    setIsRouletteSpinning(false);
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
            setIsRouletteSpinning(true);

            setTimeout(() => {
              setIsRouletteSpinning(false);
            }, 3000);
          }}
          disabled={isRouletteSpinning}
        >
          추첨하기
        </button>
      </div>
    </div>
  );
}

export default Roulette;
