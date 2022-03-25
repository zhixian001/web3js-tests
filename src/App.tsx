import React from 'react';

import MetaMaskCard from './components/connectors/MetaMaskCard';
import ProviderExample from './components/ProviderExample';

function App() {
  return (
    <>
      <ProviderExample />
      <div
        style={{ display: 'flex', flexFlow: 'wrap', fontFamily: 'sans-serif' }}
      >
        <MetaMaskCard />
      </div>
    </>
  );
}

export default App;
