import * as PropTypes from 'prop-types';
import Colors from '../../../assets/colors';

function Modal({ closeModal, children }) {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: Colors.LIGHTGRAY,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{
        position: 'absolute',
        width: 600,
        height: 600,
        padding: 40,
        textAlign: 'center',
        background: 'white',
        borderRadius: 10,
      }}
      >
        <button
          style={{
            position: 'absolute',
            top: 15,
            right: 15,
            border: 'none',
            color: Colors.DARKGRAY,
            background: 'transparent',
            fontSize: 20,
          }}
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
