import React from 'react';
import App from './App';
import { ResetCSS } from './global/resetCSS';
import JogosProvider from './providers/jogosProvider';

const Providers = () => {
  return (
    <main>
      <JogosProvider>
        <ResetCSS />
        <App />
      </JogosProvider>
    </main>
  );
};
export default Providers;