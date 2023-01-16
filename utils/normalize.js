



export const COURSE_STATES = {
    0: "comprado",
    1: "ativo",
    2: "desativado"
}

//traz todas as características gerais dos cursos para o curso usuário
//
//++ adiciona informações sobre o curso


export const normalizeOwnedCourse = web3 => (course, ownedCourse) => {
    return {
        ...course,
        ownedCourseId: ownedCourse.id,
        proof: ownedCourse.proof,
        owned: ownedCourse.owner,
        price: web3.utils.fromWei(ownedCourse.price),
        state: COURSE_STATES[ownedCourse.state]

    }
}