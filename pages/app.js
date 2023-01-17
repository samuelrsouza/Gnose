import { useCallback, useEffect, useState } from "react";
import { useWeb3 } from "@components/providers"

function App() {
    const { web3, contract } = useWeb3()


// function withdraw(uint amount) external onlyOwner 
// {
//     (bool success, ) = owner.call{value: amount}("");
//     require(success, "Transferencia falhou.");
// }

  const addFunds = useCallback(async () => {
    const { contract, web3 } = web3Api
    await contract.addFunds({
      from: account,
      value: web3.utils.toWei("1", "ether")
    })

    reloadEffect()
  }, [web3Api, account, reloadEffect])

  const withdraw = async () => {

    const withdrawAmount = web3.utils.toWei("0.1", "ether")
    await contract.withdraw(withdrawAmount, {
      from: account
    })
    reloadEffect()
  }

  return (
    <>
      <div className="faucet-wrapper">
          <div className="balance-view is-size-2 my-4">
            Current Balance: <strong>{balance}</strong> ETH
          </div>
          <button
            disabled={!canConnectToContract}
            onClick={addFunds}
            className="button is-link mr-2">
              Donate 1 eth
            </button>
            <button
                onClick={withdraw}
                className="button is-primary">Withdraw 0.1 eth
            </button>
        </div>
    </>
  );
}

export default App;
