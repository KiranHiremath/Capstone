# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. 

## Install
npm install  
truffle compile  

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
Contract Address: 0xFf8bF25b76b8D41C292A59e97810E2C4d8295276  
https://rinkeby.etherscan.io/address/0xFf8bF25b76b8D41C292A59e97810E2C4d8295276

Note: Details included in rinkebyMigration.txt


# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
