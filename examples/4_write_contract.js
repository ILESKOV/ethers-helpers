const { ethers } = require("ethers");

const INFURA_ID = "7a21468ba350491ab646dc285a57277d";
const provider = new ethers.providers.JsonRpcProvider(
  `https://goerli.infura.io/v3/${INFURA_ID}`
);

const account1 = "0x10d22dCC8B81eCa467976066f904060a9bdBBACB"; // Your account address 1

const privateKey1 =
  "54ebf8f40361585c4e05a0db8429b486a941385f26ffdfc13ef11200251cde08"; // Private key of account 1
const wallet = new ethers.Wallet(privateKey1, provider);

const ABI = [
  "function createRobotGen0(uint64)",
  "function balanceOf(address) view returns (uint256)",
];

const address = "0x24695FB2D2fC68cC88AA18bA68BCc41C9EecA39D"; // TechnoirClub Contract
const contract = new ethers.Contract(address, ABI, provider);

const main = async () => {
  const balance = await contract.balanceOf(account1);

  console.log(`\nReading from ${address}\n`);
  console.log(`Balance of sender: ${balance}\n`);

  const contractWithWallet = contract.connect(wallet);

  const tx = await contractWithWallet.createRobotGen0("533616691472680");
  await tx.wait();

  console.log(tx);

  const balanceOfSender = await contract.balanceOf(account1);

  console.log(`\nBalance of sender: ${balanceOfSender}`);
};

main();
