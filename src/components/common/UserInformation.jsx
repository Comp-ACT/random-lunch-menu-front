import Colors from '../../assets/colors';

function UserInformation() {
  return (
    <div style={{ background: Colors.CORAL, height: '50%', textAlign: 'center' }}>
      <div
        id="user-image"
        style={{
          display: 'inline-block',
          background: 'white',
          borderRadius: '50%',
          width: 200,
          height: 200,
          marginTop: '3em',
        }}
      >
        <p> </p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <button style={{ marginTop: '2em' }}>
          login button
        </button>
        <button style={{ marginTop: '2em' }}>
          register button
        </button>
      </div>
    </div>
  );
}

export default UserInformation;
