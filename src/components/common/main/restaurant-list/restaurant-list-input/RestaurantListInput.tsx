import * as PropTypes from 'prop-types';
import { css } from '@emotion/react';
import React, {useRef, useState} from 'react';
import Colors from '../../../../../assets/colors';
import { isNullOrWhiteSpace } from '../../../../../utils';
import { addRestaurantAPI } from '../../../../../utils/MockAPI';
import LoadingModal from '../../../dialog/LoadingModal';
import {RestaurantType} from "../../../../../types";

type Props = {
  width: number;
  setRestaurantList: (restaurant: RestaurantType) => void;
}

function RestaurantListInput({ width, setRestaurantList }: Props) {
  const inputElement = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  function onKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter' && event.nativeEvent.isComposing === false) {
      event.preventDefault();

      const inputText = event.currentTarget.value;

      event.currentTarget.value = '';

      if (isNullOrWhiteSpace(inputText)) {
        return;
      }

      setIsLoading(true);

      inputElement.current?.blur();

      addRestaurantAPI(inputText).then((response) => {
        setRestaurantList(response);
        setIsLoading(false);
      });
    }
  }
  return (
    <div>
      {isLoading && <LoadingModal />}
      <input
        ref={inputElement}
        type="text"
        onKeyDown={onKeyDown}
        placeholder="가게 이름을 적어주세요."
        css={css({
          width,
          fontSize: 18,
          height: 40,
          border: 'none',
          borderBottom: '1px solid #ccc',
          backgroundColor: 'transparent',
          borderRadius: 0,
          boxSizing: 'border-box',
          transition: '0.3s',
          '&:focus': {
            outline: 'none',
            borderColor: Colors.CORAL,
            paddingLeft: 20,
            paddingRight: 20,
          },
        })}
      />
    </div>
  );
}

RestaurantListInput.propTypes = {
  width: PropTypes.number.isRequired,
  setRestaurantList: PropTypes.func.isRequired,
};

export default RestaurantListInput;
