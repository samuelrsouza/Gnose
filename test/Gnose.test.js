




const Gnose = artifacts.require("Gnose")
const { catchRevert } = require("./utils/exceptions")

// Mocha - framework de teste
// Chai - biblioteca de declaração JS

const getBalance = async address => web3.eth.getBalance(address)
const toBN = value => web3.utils.toBN(value)

contract("Gnose", accounts => {
    const courseId = "0x00000000000000000000000000000031";
    const value = "900000000";
    let _contract = null
    let contractOwner = null
    let buyer = null
    let courseHash = null

    before(async () => {
        _contract = await Gnose.deployed()
        contractOwner = accounts[0]
        buyer = accounts[1]
    })

    describe("Curso comprado", () => {

        before(async () => {
            await _contract.purchaseCourse(courseId, {from: buyer, value})
        })

        it("não deverá ser permitido comprar o curso comprado novamente", async()=>{
            await catchRevert(_contract.purchaseCourse(courseId, {from: buyer, value}))
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
            assert.equal(course.state, expectedState,`index tem que ser ${expectedState}`)
            assert.equal(course.owner, buyer,`index tem que ser ${buyer}`)
        })
    })

    describe("Ativação do curso comprado pelo dono do contrato", () => {

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

    describe("Adicionar Fundos", () => {
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

        it("deverá falhar quando ultrapassar o limte do saldo", async () => {
            const currentOwner = await _contract.getContractOwner() 
            await catchRevert(_contract.withdraw(overLimitFunds, {from: currentOwner}))
        })
    })

    describe("Adicionar Habilidade", () =>{
     
        it("deverá adicionar um aluno com sua habilidade", async () =>{
            const skill = "Aspirante em Python"

            await _contract.addSkill(buyer, skill)

        })
    })
})

