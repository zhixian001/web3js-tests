import React from 'react';

import MetaMaskCard from './components/connectors/MetaMaskCard';
import ProviderExample from './components/ProviderExample';

import SampleComponent from './components/SampleComponent';

function App() {
  return (
    <>
      <ProviderExample />
      <div
        style={{ display: 'flex', flexFlow: 'wrap', fontFamily: 'sans-serif' }}
      >
        <MetaMaskCard />
      </div>
      <div>
        <SampleComponent />
      </div>
    </>
  );
}

export default App;
