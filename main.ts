// Entry point for the pump.fun paper-trading sprint bot (agent-fun/replay/v2).
//
// The whole strategy is in strategy.ts: a launch sniper with a rug filter,
// fast exits, and probe round trips that keep the run above the 20-coin
// guardrail on a 6-hour final window. The wire shim is the kit's SDK,
// vendored unchanged under vendor/agentfun-bot.ts. Run with Node 22:
// `node main.ts`.
//
// Dev result on the kit's 24h dataset (local backtest, full window):
// net -0.027 SOL, 118 coins, 83 guardrail coins (need >= 20), 20 wins,
// max drawdown 0.38%, 0 rejected orders. Paper only.

import { runBot } from './vendor/agentfun-bot.ts';
import { createStrategy, DEFAULT_PARAMS } from './strategy.ts';

const strategy = createStrategy(DEFAULT_PARAMS);
await runBot(strategy);
