const { ethers } = require("ethers");

const INFURA_ID = "7a21468ba350491ab646dc285a57277d";
const provider = new ethers.providers.JsonRpcProvider(
  `https://goerli.infura.io/v3/${INFURA_ID}`
);

const ABI = [
  "event Build(address owner, uint64 buildTime, uint64 robotId, uint64 firstRobotParentId, uint64 secondRobotParentId, uint32 generation,uint32 tokenId)",
  "event MarketTransaction(string TxType, address owner, uint256 tokenId)",
];

const address = "0x24695FB2D2fC68cC88AA18bA68BCc41C9EecA39D"; // TechnoirClub Contract
const contract = new ethers.Contract(address, ABI, provider);

const main = async () => {
  const block = await provider.getBlockNumber();

  const buildEvent = await contract.queryFilter("Build", block - 10000, block);
  console.log(buildEvent);
};

main();

