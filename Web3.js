Install the Web3.js library to interact with the Ethereum blockchain:

npm install web3

const Web3 = require('web3');

// Connect to an Ethereum node (Infura or a local node)
const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/YOUR_INFURA_KEY'));

// Sample function to check account balance (to verify Ethereum integration)
const checkBalance = async (address) => {
  const balance = await web3.eth.getBalance(address);
  console.log(`Balance of ${address}: ${web3.utils.fromWei(balance, 'ether')} ETH`);
};

// Export the checkBalance function
module.exports = { checkBalance };

Explanation: This connects to the Ethereum blockchain using Infura and allows querying the balance of Ethereum addresses. We'll later extend this to interact with smart contracts for voting and proposals.

