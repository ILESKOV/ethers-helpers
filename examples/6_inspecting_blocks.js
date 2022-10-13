const { ethers } = require("ethers");

const INFURA_ID = "7a21468ba350491ab646dc285a57277d";
const provider = new ethers.providers.JsonRpcProvider(
  `https://goerli.infura.io/v3/${INFURA_ID}`
);

//inspect blocks
const main = async () => {
  const block = await provider.getBlockNumber();

  console.log(`\nBlock Number: ${block}\n`);

  const blockInfo = await provider.getBlock(block);

  console.log(blockInfo);

  const { transactions } = await provider.getBlockWithTransactions(block);

  console.log(`\nLogging first transaction in block:\n`);
  console.log(transactions[0]);
};

main();
