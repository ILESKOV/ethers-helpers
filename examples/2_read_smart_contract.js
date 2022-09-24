const { ethers } = require("ethers");

const INFURA_ID = "7a21468ba350491ab646dc285a57277d";
const provider = new ethers.providers.JsonRpcProvider(
  `https://goerli.infura.io/v3/${INFURA_ID}`
);

const ERC721_ABI = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function ownerOf(uint256 tokenId) external view returns (address owner)",
  "function balanceOf(address) view returns (uint256)",
];

const address = "0x24695FB2D2fC68cC88AA18bA68BCc41C9EecA39D"; // TechnoirClub Contract
const contract = new ethers.Contract(address, ERC721_ABI, provider);

const main = async () => {
  const name = await contract.name();
  const symbol = await contract.symbol();
  const ownerOf = await contract.ownerOf("1");

  console.log(`\nReading from ${address}\n`);
  console.log(`Name: ${name}`);
  console.log(`Symbol: ${symbol}`);
  console.log(`Owner of 1 token: ${ownerOf}\n`);

  const balance = await contract.balanceOf(
    "0x739712F6be312DaFD8b71a1D33E30C5ED69514e2"
  );

  console.log(`Balance Returned: ${balance}`);
  // for decimal places(erc-20 or non-nft tokens)
  // console.log(`Balance Formatted: ${ethers.utils.formatEther(balance)}\n`);
};

main();
