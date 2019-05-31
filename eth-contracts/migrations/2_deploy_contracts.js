// migrating the appropriate contracts
var Verifier = artifacts.require("Verifier");
var SolnSquareVerifier = artifacts.require("SolnSquareVerifier.sol");

module.exports = function(deployer,network,accounts) {
  let name = "LUXHOME";
  let symbol = "LUXH";

  deployer.deploy(Verifier)
  .then(() => {
    return deployer.deploy(SolnSquareVerifier, Verifier.address, name, symbol );
  }
  )
};
