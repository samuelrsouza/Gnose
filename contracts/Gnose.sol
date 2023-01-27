// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;


//três estados dos cursos/aulas/matérias
//são representados por números a partir do 0
contract Gnose {
    enum State {Purchased, Activated}

    struct Course{
        uint id; //32
        uint price; //32
        address owner; //20
        State state; //1
    }


    struct Student {
        address payable walletAddress;
        string skill;
    }

    Student[] public student;

    function addSkill(address payable walletAddress, string memory skill) public onlyOwner {
        student.push(Student(
            walletAddress,
            skill)
        );
    }

    function getIndex(address walletAddress) view public returns(uint) {
        for(uint i = 0; i < student.length; i++) {
            if (student[i].walletAddress == walletAddress) {
                return i;
            }
        }
        return 999;
    }


    function balanceOf() public view returns(uint) {
        return address(this).balance;
    }


    bool public isStopped = false;
     

    //mapping do courseId para o courseHash
    mapping(uint => bytes32) private ownedCourseHash;

    //mapping do courseHash para os dados do Course
    mapping(bytes32 => Course) private ownedCourses;


    //número de todos os cursos + id dos cursos
    uint private totalOwnedCourses;

    //professores - instrutores
    address payable private owner; 

    constructor(){
        setContractOwner(msg.sender);
    }

    ///Não há um estado válido para o curso!
    error InvalidState();

    ///O curso não foi criado!
    error CourseIsNotCreated();

    /// O remetente não é o dono do curso!
    error SenderIsNotCourseOwner();

    ///O curso já possui um dono!
    error CourseHasOwner();

    ///Apenas o dono poderá fazer essa operação!
    error OnlyOwner();


    //apenas o dono do contrato pode alterar o acesso de outro dono do curso
    modifier onlyOwner() {
        if (msg.sender != getContractOwner()) {
        revert OnlyOwner();
        }
        _;
    }

    modifier onlyWhenNotStopped {
        require(!isStopped);
        _;
    }

    modifier onlyWhenStopped {
        require(isStopped);
        _;
    }

    receive() external payable {}

    // function repurchaseCourse(bytes32 courseHash) external payable onlyWhenNotStopped{
    //     if (!isCourseCreated(courseHash)) {
    //         revert CourseIsNotCreated();
    //     }

    //     if(!hasCourseOwnership(courseHash)) {
    //         revert SenderIsNotCourseOwner();
    //     }

    // Course storage course = ownedCourses[courseHash];

    //     if (course.state != State.Deactivated) {
    //     revert InvalidState();
    //     }

    //     course.state = State.Purchased;
    //     course.price = msg.value;
    // }


    function activateCourse(bytes32 courseHash) external onlyWhenNotStopped{
        //recebe o hash do curso
        //tal request foi enviado pelo dono da transação
        //se o curso não for criado, irá reverter o contrato
        if(!isCourseCreated(courseHash)){
            revert CourseIsNotCreated();
        }

        Course storage course = ownedCourses[courseHash];

        if(course.state != State.Purchased){
            revert InvalidState();
        }
        course.state = State.Activated;
    }

    function addFunds() external payable {
    }

    // function withdraw(uint amount) external payable{
        
    //     (bool success, ) = owner.call{value: amount}("");
    //     require(success, "Falha na transferencia");
    // }

    function withdraw(uint withdrawAmount) payable external {
        payable(msg.sender).transfer(withdrawAmount);
  }

    //saca o valor total do contrato para o dono do contrato em caso de falhas ou erros
    function emergencyWithdraw() external onlyWhenStopped onlyOwner{
        (bool success, ) = owner.call{value: address(this).balance}("");
        require(success, "Transferencia falhou.");
    }

    //transfere o valor total do contrato para o dono do contrato quando o contrato for destruido
    function selfDestruct() external onlyWhenStopped onlyOwner {
        selfdestruct(owner);
    }

    function stopContract() external onlyOwner {
        isStopped = true;
    }

  function resumeContract() external onlyOwner {
        isStopped = false;
    }

//[ID do curso] ASCII -> DEC | transforma em 16 bytes
//[id do curso + msg sender] -> KECCAK -> HEX -> hash do curso

    function purchaseCourse(bytes16 courseId) external payable onlyWhenNotStopped{
        bytes32 courseHash = keccak256(abi.encodePacked(courseId, msg.sender));

        if(hasCourseOwnership(courseHash)){
            revert CourseHasOwner();
        }

        uint id = totalOwnedCourses++;
        ownedCourseHash[id] = courseHash;
        ownedCourses[courseHash] = Course({
            id: id, price: msg.value, owner: msg.sender, state: State.Purchased
        });
    }


    function transferOwnership(address newOwner) external onlyOwner {
        setContractOwner(newOwner);
    }

    function getCourseCount() external view returns(uint) {
        return totalOwnedCourses;
    }

    function getCourseHashAtIndex(uint index) external view returns(bytes32) {
        return ownedCourseHash[index];
    }

    function getCourseByHash(bytes32 courseHash) external view returns(Course memory) {
        return ownedCourses[courseHash];
    }

    function getContractOwner() public view returns(address) {
        return owner;
    }

    function setContractOwner(address newOwner) private {
        owner = payable(newOwner);
    }

    function isCourseCreated(bytes32 courseHash) private view returns(bool) {
        return ownedCourses[courseHash].owner != 0x0000000000000000000000000000000000000000;
    }

    function hasCourseOwnership(bytes32 courseHash) private view returns(bool) {
        return ownedCourses[courseHash].owner == msg.sender;
    }
}  