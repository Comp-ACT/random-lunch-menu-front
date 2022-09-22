import { css, Global } from '@emotion/react';
import { RecoilRoot } from 'recoil';
import Home from './components/pages/Home';

function App() {
  return (
    <RecoilRoot>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@700&display=swap"
        rel="stylesheet"
      />
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
