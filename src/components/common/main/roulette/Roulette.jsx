import { css } from '@emotion/react';

function Roulette() {
  return (
    <div css={css({ height: '60%' })}>
      <div css={css({ width: 400, height: 400, background: 'black' })}>
        Roulette
      </div>
      <div css={css({ display: 'flex', justifyContent: 'center', marginTop: 100 })}>
        <button>submit</button>
      </div>
    </div>
  );
}

export default Roulette;
