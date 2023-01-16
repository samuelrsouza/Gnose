


//vercel
import { useEffect } from "react"
import useSWR from "swr"

const adminAddresses = {"0x8325854ff487b86249ab5edad5abb8b70380281de5cc0cc53e68c4932e4e9487":true} 

export const handler = (web3, provider) => () => {

    const { data, mutate, ...rest } = useSWR(() =>
        web3 ? "web3/accounts" : null,
        async () => {
        const accounts = await web3.eth.getAccounts()
        const account = accounts[0]

        if(!account){
            throw new Error("Não há uma conta conectada")
        }

        return account
        }
    )

    useEffect(() => {
        const mutator = accounts => mutate(accounts[0] ?? null)
        provider?.on("mudancaConta", mutator)

        return() => {
            provider?.removeListener("mudancaConta", mutator)
        }
    }, [provider])

    return {
        data,
        isAdmin: (data && adminAddresses[web3.utils.keccak256(data)]) ?? false,
        mutate,
        ...rest
    }
    
}
