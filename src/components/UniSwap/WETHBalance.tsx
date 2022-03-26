import React, { useEffect, useState } from 'react';
import console from 'console';
import { Contract } from '@ethersproject/contracts';
import { Interface as JSONAbiInterface } from '@ethersproject/abi';
import { Web3Provider as EthersProvider } from '@ethersproject/providers';
import BigNumber from 'bignumber.js';

import { hooks } from '../../connectors/metaMask';

import ERC20Abi from '../../abi/ERC20Abi.json';

const { useProvider, useAccount, useChainId } = hooks;

const WETH_CONTRACT_ADDRESS = {
  Rinkeby: '0xc778417E063141139Fce010982780140Aa0cD5Ab',
};

export function WETHBalance() {
  const provider = useProvider();
  const chainId = useChainId();
  const account = useAccount();
  // const ensName = useENSName(provider);

  const [wethContractAddress, setWethContractAddress] = useState<string>('');
  const [erc20Abi, setErc20Abi] = useState<JSONAbiInterface | null>(null);
  const [ethersProvider, setEthersProvider] = useState<EthersProvider | null>(
    null,
  );
  const [wethContractInstance, setWethContractInstance] =
    useState<Contract | null>(null);


  // TODO: Contract call - See: https://dev.to/rounakbanik/building-a-web3-frontend-with-react-340c

  useEffect(() => {
    setWethContractAddress(chainId === 4 ? WETH_CONTRACT_ADDRESS.Rinkeby : '');
    setErc20Abi(new JSONAbiInterface(ERC20Abi));
    if (provider) {
      setEthersProvider(new EthersProvider(provider.provider));
    }
  }, [chainId, provider]);

  useEffect(() => {
    if (erc20Abi && ethersProvider) {
      const instance = new Contract(
        wethContractAddress,
        erc20Abi,
        ethersProvider,
      );
      setWethContractInstance(instance);
    }
  }, [erc20Abi, ethersProvider, wethContractAddress]);

  const [wethBalance, setWethBalance] = useState('0');

  useEffect(() => {
    const updateWethBalance = async () => {
      if (wethContractInstance) {

        const result = await wethContractInstance['balanceOf'](account);

        if (result['_hex']) {
          const parsedWethBalance = new BigNumber(result['_hex'], 16).dividedBy(1000000000000000000);

          setWethBalance(parsedWethBalance.toFixed());
        }
        
      }
    };

    updateWethBalance();
  }, [account, wethContractInstance]);

  return (
    <>
      <p>WETH Balance: <b>{wethBalance}</b> WETH</p>
    </>
  );
}
