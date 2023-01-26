






import { createCourseHash } from "@utils/hash"
import { normalizeOwnedCourse } from "@utils/normalize"
import useSWR from "swr"

export const handler = (web3, contract) => (course, account) => {

  const swrRes = useSWR(() =>

    (web3 && contract && account) ? `web3/ownedCourse/${account}` : null,
    
    async () => {
      const courseHash = createCourseHash(web3)(course.id, account)
      const ownedCourse = await contract.methods.getCourseByHash(courseHash).call()


      
    //verifica se o usuário possui o mesmo hash de curso do contrato
    //caso dê "match", será possível pegar quais cursos o usuário possui
    //basicamente verifica se o usuário é o dono do curso igualmente à função do contrato
      if (ownedCourse.owner === "0x0000000000000000000000000000000000000000") {
        return null
      }

      return normalizeOwnedCourse(web3)(course, ownedCourse)
    }
  )

  return swrRes
}


