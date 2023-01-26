const GnoseMigration = artifacts.require("Gnose");

module.exports = function (deployer) {
  deployer.deploy(GnoseMigration);
};
