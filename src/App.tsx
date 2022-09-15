import { css, Global } from '@emotion/react';
import { RecoilRoot } from 'recoil';
import Home from './components/pages/Home';

function App() {
  return (
    <RecoilRoot>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@700&display=swap');
      </style>
      <Global
        styles={css`
          * {
            font-family: 'Nanum Gothic', sans-serif;
          }
        `}
      />
      <Home />
    </RecoilRoot>
  );
}

export default App;
