import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import * as PropTypes from 'prop-types';
import { isNullOrWhiteSpace } from '../../../../../utils';

function RoomAdditionDialog({ addRoomListAndCloseModal }) {
  const [roomName, setRoomName] = useState('');
  const [isNameNullOrWhiteSpace, setIsNameNullOrWhiteSpace] = useState(false);
  const [isNameOver15Letters, setIsNameOver15Letters] = useState(false);

  useEffect(() => {
    setIsNameNullOrWhiteSpace(isNullOrWhiteSpace(roomName));
    setIsNameOver15Letters(roomName.length > 20);
  }, [roomName]);

  return (
    <div css={css({
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100%',
    })}
    >
      <div css={css({
        fontSize: 32,
      })}
      >
        방 만들기
      </div>
      <div>
        <input
          type="text"
          onChange={(e) => setRoomName(e.target.value)}
          placeholder="방 이름을 적어주세요."
          css={css({
            width: 400,
            fontSize: 18,
            height: 40,
            backgroundColor: 'transparent',
            borderRadius: 50,
            textAlign: 'center',
            boxSizing: 'border-box',
            transition: '0.3s',
            '&:focus': {
              outline: 'none',
            },
          })}
        />
      </div>
      <div>
        <p css={css({
          color: isNameNullOrWhiteSpace ? 'red' : 'green',
        })}
        >
          1. 공백으로만 이루어진 이름은 사용하지 못합니다.
        </p>
        <p css={css({
          color: isNameOver15Letters ? 'red' : 'green',
        })}
        >
          2. 이름의 최대 길이는 20자입니다.
        </p>
      </div>
      <div>
        <button
          disabled={isNameNullOrWhiteSpace || isNameOver15Letters}
          onClick={() => addRoomListAndCloseModal(roomName)}
        >
          방 만들기
        </button>
      </div>
    </div>
  );
}

RoomAdditionDialog.propTypes = {
  addRoomListAndCloseModal: PropTypes.func.isRequired,
};

export default RoomAdditionDialog;
