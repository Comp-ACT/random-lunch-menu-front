import { css, Global } from '@emotion/react';
import { RecoilRoot } from 'recoil';
import Home from './components/pages/Home';

function App() {
  return (
    <RecoilRoot>
      <Global styles={css`
      *{
        font-family: 'DalseoHealing';
      }
      
      @font-face {
      font-family: 'DalseoHealing';
      font-weight: 700;
      font-style: normal;
      src: url('https://cdn.jsdelivr.net/gh/webfontworld/daegu/DalseoHealingBold.eot');
      src: url('https://cdn.jsdelivr.net/gh/webfontworld/daegu/DalseoHealingBold.eot?#iefix') format('embedded-opentype'),
           url('https://cdn.jsdelivr.net/gh/webfontworld/daegu/DalseoHealingBold.woff2') format('woff2'),
           url('https://cdn.jsdelivr.net/gh/webfontworld/daegu/DalseoHealingBold.woff') format('woff'),
           url('https://cdn.jsdelivr.net/gh/webfontworld/daegu/DalseoHealingBold.ttf') format("truetype");
      font-display: swap;
      }
        `}
      />
      <Home />
    </RecoilRoot>
  );
}

export default App;
