




const CourseMarketplace = artifacts.require("CourseMarketplace")
const { catchRevert } = require("./utils/exceptions")

// Mocha - framework de teste
// Chai - biblioteca de declaração JS

const getBalance = async address => web3.eth.getBalance(address)
const toBN = value => web3.utils.toBN(value)

const getGas = async result => {
    const tx = await web3.eth.getTransaction(result.tx)
    const gasUsed = toBN(result.receipt.gasUsed)

    const gasPrice = toBN(tx.gasPrice)
    const gas = gasUsed.mul(gasPrice)

    return gas
}

contract("CourseMarketplace", accounts => {


    const courseId = "0x00000000000000000000000000003130";
    const proof = "0x0000000000000000000000000000313000000000000000000000000000003130"
    const value = "900000000";

    const courseId2 = "0x00000000000000000000000000002130";
    const proof2 = "0x0000000000000000000000000000213000000000000000000000000000002130"
    

    let _contract = null
    let contractOwner = null
    let buyer = null
    let courseHash = null


    before(async () => {
        _contract = await CourseMarketplace.deployed()
        contractOwner = accounts[0]
        buyer = accounts[1]

        //verifica os registros
        // console.log(_contract)
        // console.log(contractOwner)
        // console.log(buyer)
    })

    describe("Curso comprado", () => {

        before(async () => {
            await _contract.purchaseCourse(courseId, proof, {from: buyer, value})
        })

        it("não deverá ser permitido comprar o curso comprado novamente", async()=>{
            await catchRevert(_contract.purchaseCourse(courseId, proof, {from: buyer, value}))
        })


        //se houver um curso comprado
        it("é possível pegar o hash do curso pelo seu index ", async () => {
            const index = 0

            //hash do curso direto do contrato
            courseHash = await _contract.getCourseHashAtIndex(index)

            //criação do hash para realizar a comparação
            //id do curso em 16 bytes + endereço do dono
            const expectedHash = web3.utils.soliditySha3(
                { type: "bytes16", value: courseId },
                { type: "address", value: buyer }
            )

            assert.equal(courseHash, expectedHash, "Hashs não são iguais")
        })

        it("foram verificados todos os dados de compra do curso pelo dono", async () => {
            const expectedIndex = 0
            const expectedState = 0
            const course = await _contract.getCourseByHash(courseHash)


            assert.equal(course.id, expectedIndex, `index tem que ser ${expectedIndex}`)
            assert.equal(course.price, value,`preço tem que ser ${value}`)
            assert.equal(course.proof, proof,`index tem que ser ${proof}`)
            assert.equal(course.state, expectedState,`index tem que ser ${expectedState}`)
            assert.equal(course.owner, buyer,`index tem que ser ${buyer}`)
        })
    })

    describe("Ativação do curso comprado pelo dono do contrato", () => {

        //ativação do curso através do não-dono do contrato (comprador do curso)
        it("não deverá ser possível ativar se não for o dono", async() =>{

            await catchRevert(_contract.activateCourse(courseHash, {from: buyer}))

        })

        it("deverá ter o status de 'ATIVADO'", async() =>{
            await _contract.activateCourse(courseHash, {from: contractOwner})
            const course = await _contract.getCourseByHash(courseHash)
            const expectedState = 1

            assert.equal(course.state, expectedState, `index tem que ser Ativado`)
        })
    })

    describe("Teste de transferencia de donos", () => {
        let currentOwner = null

        before(async () => {
            currentOwner = await _contract.getContractOwner()
        })

        it("a função deverá retornar o endereço do dono do contrato", async() =>{
            assert.equal(contractOwner, currentOwner, "o dono do contrato não é o mesmo da função")
        })

        it("não é possível transferir a titularidade sem ser o dono", async() =>{
            await catchRevert(_contract.transferOwnership(accounts[3], {from:accounts[4]}))
        })

        it("deverá transferir a titularidade para a conta 3", async() =>{
            await _contract.transferOwnership(accounts[2], {from:currentOwner})
            const owner = await _contract.getContractOwner()
            assert.equal(owner, accounts[2], "tranferencia não foi concluída")
        })

        it("deverá transferir a titularidade de volta para o dono inicial", async() =>{
            await _contract.transferOwnership(contractOwner, {from:accounts[2]})
            const owner = await _contract.getContractOwner()
            assert.equal(owner, contractOwner, "o dono do contrato não foi definido")
        })
    })

    describe("Desativação do curso", () => {
        let courseHash2 = null
        let currentOwner = null

        before(async () => {
            await _contract.purchaseCourse(courseId2, proof2, {from: buyer, value})
            courseHash2 = await _contract.getCourseHashAtIndex(1)
            currentOwner = await _contract.getContractOwner() 
        })

        it("não poderá desativar o curso se não for o dono", async() => {
            await catchRevert(_contract.deactivateCourse(courseHash2, {from:buyer}))
        })

        it("deverá ter o status de desativado e seu preço deve ser = 0", async() => {
            const beforeTxBuyerBalance = await getBalance(buyer)
            const beforeTxContractBalance = await getBalance(_contract.address)
            const beforeTxOwnerBalance = await getBalance(currentOwner)

            const result = await _contract.deactivateCourse(courseHash2, {from: contractOwner})

            const afterTxBuyerBalance = await getBalance(buyer)
            const afterTxContractBalance = await getBalance(_contract.address)
            const afterTxOwnerBalance = await getBalance(currentOwner)

            const course = await _contract.getCourseByHash(courseHash2)
            const exptectedState = 2
            const exptectedPrice = 0
            const gas = await getGas(result)

            assert.equal(course.state, exptectedState, "o curso não foi desativado")
            assert.equal(course.price, exptectedPrice, "o preço do curso não foi anulado")

            assert.equal(
                toBN(beforeTxOwnerBalance).sub(gas).toString(), afterTxOwnerBalance, 
                "O saldo do dono está incorreto")
        
            assert.equal(toBN(beforeTxBuyerBalance).add(toBN(value)).toString(), afterTxBuyerBalance, 
                "O saldo do comprador está incorreto")
        
            assert.equal( toBN(beforeTxContractBalance).sub(toBN(value)).toString(), afterTxContractBalance, 
                "O saldo do contrato está incorreto"
            )
        })

        it("não poderá ativar o curso desativado", async() => {
            await catchRevert(_contract.activateCourse(courseHash2, {from: contractOwner}))
        })
    })

    describe("Recomprar o curso", () => {

        let courseHash2 = null
    
        before(async () => {
            courseHash2 = await _contract.getCourseHashAtIndex(1)
        })
    
        it("não deverá comprar um curso inexistente", async () => {
            const notExistingHash = "0x5ceb3f8075c3dbb5d490c8d1e6c950302ed065e1a9031750ad2c6513069e3fc3"
            await catchRevert(_contract.repurchaseCourse(notExistingHash, {from: buyer}))
        })
    
        it("não é possível recomprar um curso sem ser o dono", async () => {
            const notOwnerAddress = accounts[2]
            await catchRevert(_contract.repurchaseCourse(courseHash2, {from: notOwnerAddress}))
        })
    
        it("poderá recomprar com o dono/comprador original", async () => {
            const beforeTxBuyerBalance = await getBalance(buyer)
            const beforeTxContractBalance = await getBalance(_contract.address)

            const result = await _contract.repurchaseCourse(courseHash2, {from: buyer, value})

            const afterTxBuyerBalance = await getBalance(buyer)
            const afterTxContractBalance = await getBalance(_contract.address)

            const course = await _contract.getCourseByHash(courseHash2)
            const exptectedState = 0
            const gas = await getGas(result)
        
            assert.equal(course.state, exptectedState, "o curso não possui o status de 'comprado'")
            assert.equal(course.price, value, `o preço do curso não é = ${value}`)

            //nesse caso, será utilizado a estrutura de números grandes - BIG NUMBERS

            //saldo anterior - (taxas necessárias + valor do curso) == saldo posterior
            assert.equal(toBN(beforeTxBuyerBalance).sub(toBN(value)).sub(gas).toString(), afterTxBuyerBalance,
                "O saldo do usuário está incorreto!")

            assert.equal(toBN(beforeTxContractBalance).add(toBN(value)).toString(), afterTxContractBalance,
                "O saldo do contrato está incorreto!")
        })
    
        it("não é possível recomprar o curso já comprado", async () => {
            await catchRevert(_contract.repurchaseCourse(courseHash2, {from: buyer}))
        })
    })


    describe("Recebimento de valores", () =>{
     
        it("deverá receber o dinheiro transferido", async () =>{
            const value = "100000000000000000"    
            const contractBeforeTX = await getBalance(_contract.address)

            await web3.eth.sendTransaction({
                from: buyer, to: _contract.address, value
            })

            const contractAfterTX = await getBalance(_contract.address)
            
            assert.equal(toBN(contractBeforeTX).add(toBN(value)).toString(),contractAfterTX,"O valor nao coincide")
        })
    })

    describe("Depósito normal", () => {
        const fundsToDeposit = "100000000000000000"
        const overLimitFunds = "999999000000000000000"
    
        before(async () => {
            currentOwner = await _contract.getContractOwner()
      
            await web3.eth.sendTransaction({
              from: buyer,
              to: _contract.address,
              value: fundsToDeposit
            })
          })

    it("deverá falhar quando não for o dono do contrato", async () => {
        const value = "10000000000000000"
        await catchRevert(_contract.withdraw(value, {from: buyer}))
    })

    it("deverá falhar quando ultrapassar o limte do saldo", async () => {
        const currentOwner = await _contract.getContractOwner() 
        await catchRevert(_contract.withdraw(overLimitFunds, {from: currentOwner}))
    })

    })

    describe("Saque de emergência", () =>{
        let currentOwner

        before( async () =>{
            currentOwner = await _contract.getContractOwner()
        })

        it("deverá falhar quando o contrato não estiver parado", async() =>{
            await catchRevert(_contract.emergencyWithdraw({from: currentOwner}))
        })

        it("deverá ter mais saldo do contrato no contrato do dono", async() =>{
            await _contract.stopContract({from: contractOwner})

            const contractBalance = await getBalance(_contract.address)
            const ownerBalance = await getBalance(currentOwner)

            const result = await _contract.emergencyWithdraw({from: currentOwner})
            const gas = await getGas(result)

            const newOwnerBalance = await getBalance(currentOwner)

            assert.equal(toBN(ownerBalance).add(toBN(contractBalance)).sub(gas), newOwnerBalance,
                "O dono não possui o saldo do contrato")
        })

        it("o contrato deve ter saldo = 0", async () => {
            const contractBalance = await getBalance(_contract.address)
      
            assert.equal(contractBalance, 0,
              "O contrato não possui o saldo = 0"
            )
        })
    })

    describe("Autodestruição", () => {
        let currentOwner
    
        before(async () => {
          currentOwner = await _contract.getContractOwner()
        })
    
        it("o contrato do dono deverá ter mais fundos", async () => {
          await _contract.stopContract({from: contractOwner})
    
          const contractBalance = await getBalance(_contract.address)
          const ownerBalance = await getBalance(currentOwner)
    
          const result = await _contract.selfDestruct({from: currentOwner})
          const gas = await getGas(result)
    
          const newOwnerBalance = await getBalance(currentOwner)
    
          assert.equal(
            toBN(ownerBalance).add(toBN(contractBalance)).sub(gas), newOwnerBalance,
            "O dono não possui o saldo do contrato"
          )
        })
    
        it("o contrato deverá ter seu saldo = 0", async () => {
          const contractBalance = await getBalance(_contract.address)
    
          assert.equal(contractBalance, 0,
            "O contrato não possui seu saldo = 0"
            )
        })
    
        it("deverá ter o bytecode de 0x", async () => {
          const code = await web3.eth.getCode(_contract.address)
    
          assert.equal(code, "0x",
            "O contrato não foi destruído"
          )
        })
    })
})

