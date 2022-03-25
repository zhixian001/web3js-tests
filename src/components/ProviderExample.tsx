import {
  useWeb3React,
  Web3ReactHooks,
  Web3ReactProvider,
} from '@web3-react/core';
import { MetaMask } from '@web3-react/metamask';
import type { Connector } from '@web3-react/types';


import { hooks as metaMaskHooks, metaMask } from '../connectors/metaMask';

import console from 'console';

function getName(connector: Connector) {
  if (connector instanceof MetaMask) return 'MetaMask';
  return 'Unknown';
}

const connectors: [MetaMask, Web3ReactHooks][] = [[metaMask, metaMaskHooks]];

function Child() {
  const { connector } = useWeb3React();
  console.log(`Priority Connector is: ${getName(connector)}`);
  return null;
}

export default function ProviderExample() {
  return (
    <Web3ReactProvider connectors={connectors}>
      <Child />
    </Web3ReactProvider>
  );
}
