import React from 'react';

import MetaMaskCard from './components/connectors/MetaMaskCard';
import ProviderExample from './components/ProviderExample';

import SampleComponent from './components/SampleComponent';

import { Card } from './components/Card';
import { UniSwap } from './components/UniSwap';

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
      <Card>
        <h3>UniSwap</h3>
        <UniSwap></UniSwap>
      </Card>
    </>
  );
}

export default App;
