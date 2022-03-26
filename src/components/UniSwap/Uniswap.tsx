import React, { useState, useEffect, useCallback, ChangeEvent } from 'react';

import { hooks } from '../../connectors/metaMask';
import { WETHBalance } from './WETHBalance';

const { useProvider, useAccount } = hooks;

export function UniSwap() {
  const [inputTokenType, setInputTokenType] = useState<'ETH' | 'WETH'>('ETH');

  const inputTokenSelectButtonOnChange = useCallback((event: any) => {
    setInputTokenType(event.target.value);
  }, []);

  const [inputTokenAmount, setInputTokenAmount] = useState(0);

  const inputTokenAmountValueOnChange = useCallback((event: any) => {
    setInputTokenAmount(event.target.value);
  }, []);

  const uniSwapFormOnSubmit = useCallback(() => {
    alert(`${inputTokenType} : ${inputTokenAmount}`);
  }, [inputTokenAmount, inputTokenType]);

  return (
    <>
      <div>
        <WETHBalance />
      </div>

      <form onSubmit={uniSwapFormOnSubmit}>
        <label>
          <input
            type="radio"
            name="ETH"
            value="ETH"
            checked={inputTokenType === 'ETH'}
            onChange={inputTokenSelectButtonOnChange}
          />
          ETH
        </label>
        <label>
          <input
            type="radio"
            name="WETH"
            value="WETH"
            checked={inputTokenType === 'WETH'}
            onChange={inputTokenSelectButtonOnChange}
          />
          WETH
        </label>
        <div>
          <p>
            <b>
              {' '}
              {inputTokenAmount} of {inputTokenType}
            </b>
            {'->'}
            <b>{inputTokenType === 'ETH' ? 'WETH' : 'ETH'}</b>
          </p>
        </div>

        <label>
          swap amount
          <input
            type="number"
            name="swap_amount"
            value={inputTokenAmount}
            onChange={inputTokenAmountValueOnChange}
          />
        </label>

        <button type="submit">Wrap / Unwrap !</button>
      </form>
    </>
  );
}
