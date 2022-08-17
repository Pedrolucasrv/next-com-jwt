import { HttpClient } from "../../infra/HttpClient/HttpClient";

export const authService = {
    async login({username, password}){
        return HttpClient(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/login`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        })
        .then(async (res)=> {
            if( !res.ok ) throw new Error('usuario ou senha invalidos')
            const body = await res.body
            console.log(body)
        })
    }
};