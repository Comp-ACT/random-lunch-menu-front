import Colors from '../../assets/colors/index';

function Roulette() {
  return (
    <div style={{
      background: Colors.OLDLACE, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center',
    }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <div>roulette</div>
        <div>restaurant list</div>
      </div>
    </div>
  );
}

export default Roulette;
