# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. 

### Test
1. Clone the repository 
2. Run `npm install` in your terminal
3. Run a local blockchain by using Ganche client or GUI
4. Run truffle test

## Run ZoKrates
docker run -v <path to your project folder>:/home/zokrates/code -ti zokrates/zokrates /bin/bash  
cd code/square  
~/zokrates compile -i square.code  
~/zokrates setup  
~/zokrates compute-witness -a 3 9  
~/zokrates generate-proof  
~/zokrates export-verifier  

Note : Move verifier.sol generated under eth/contracts folder  

## Rinkeby Deployment 
truffle migrate --network rinkeby  

## Rinkeby Contract details
Contract Address: 0x3aa91a9b88da65ee0f03cc8302e57d9dddf6d556
https://rinkeby.etherscan.io/address/0x3aa91a9b88da65ee0f03cc8302e57d9dddf6d556

Note: Details included in rinkebyMigration.txt

## Token Transfer Transaction
https://rinkeby.etherscan.io/tx/0x03da67dc9256ffd0b35058058e40e187e356345c9dc9edcb84e1c7dd73b31cec

## Open Sea 
### OpenSea storefront
https://rinkeby.opensea.io/category/luxhomev2  

https://rinkeby.opensea.io/accounts/0x6d6ea9917880bc541cb374713ccd5bb924fdda74


# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
