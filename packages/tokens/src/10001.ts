import { ChainId, WETH9 } from '@pancakeswap/sdk'
import { USDC, USDT, WBTC_ETHW } from '@pancakeswap/tokens'

export const ethereumETHWTokens = {
  weth: WETH9[ChainId.ETHEREUM_ETHW],
  usdt: USDT[ChainId.ETHEREUM_ETHW],
  usdc: USDC[ChainId.ETHEREUM_ETHW],
  wbtc: WBTC_ETHW,
}
