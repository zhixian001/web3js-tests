import React, { useEffect, useState } from 'react';
import BigNumber from 'bignumber.js';
import { hooks } from '../connectors/metaMask';

const { useProvider, useAccount, useChainId } = hooks;

export default function SampleComponent() {
  const provider = useProvider();
  const account = useAccount();

  const chainId = useChainId();

  const [balance, setBalance] = useState('');

  useEffect(() => {
    const callBalanceApi = async () => {
      const result = await provider?.send('eth_getBalance', [
        account,
        'latest',
      ]);

      const convertedResult = new BigNumber(result, 16)
        .dividedBy(1000000000)
        .toFixed();

      setBalance(convertedResult);
    };

    callBalanceApi();
  }, [account, provider]);

  return (
    <>
      <p>ChainId: {chainId}</p>
      <p>Balance: {balance} Gwei</p>
    </>
  );
}
