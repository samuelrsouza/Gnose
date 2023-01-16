const Gnose = artifacts.require("Gnose");

module.exports = (deployer) => {
    deployer.deploy(Gnose, "Gnose", "GNS", 100000);
};
