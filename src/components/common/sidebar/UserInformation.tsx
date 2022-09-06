function UserInformation() {
  return (
    <div style={{ height: '40%', textAlign: 'center' }}>
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
        <button style={{ marginTop: '3em' }}>
          login button
        </button>
      </div>
    </div>
  );
}

export default UserInformation;
