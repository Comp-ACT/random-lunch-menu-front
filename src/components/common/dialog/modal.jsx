import * as PropTypes from 'prop-types';
import { useEffect } from 'react';
import { css } from '@emotion/react';
import Colors from '../../../assets/colors';

function Modal({ closeModal, children }) {
  useEffect(() => {
    const close = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);
  return (
    <div
      css={css({
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: Colors.LIGHTGRAY,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      })}
    >
      <div css={css({
        position: 'absolute',
        width: 600,
        height: 600,
        padding: 40,
        textAlign: 'center',
        background: 'white',
        borderRadius: 10,
      })}
      >
        <button
          css={css({
            position: 'absolute',
            top: 15,
            right: 15,
            border: 'none',
            color: Colors.DARKGRAY,
            background: 'transparent',
            fontSize: 30,
            transition: '0.2s',
            '&:hover': {
              fontSize: 33,
            },
          })}
          onClick={closeModal}
        >
          ✖
        </button>
        {children}
      </div>
    </div>
  );
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default Modal;
