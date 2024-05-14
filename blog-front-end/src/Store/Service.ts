import { userDatatype,userObject } from "../types/types"


export  const  getUserApi =async () => {
    
    try{
        let response = await fetch("http://localhost:3000/api/user", {
        method: "get",
        headers: {
            "Content-Type":"application/json"
            }
        })
        let data = await response.json()
        // console.log("response",data.message)
        return data.message
    }
    catch (error) {
        console.log(error)
    }
}
export  const  findUserApi =async (userData:userObject) => {
    
    try{
        let response = await fetch("http://localhost:3000/api/user/login", {
        method: "post",
        headers: {
            "Content-Type":"application/json"
            },
            body:JSON.stringify(userData)
        })
        let data = await response.json()
        // console.log("response",data.message)
        return data.message
    }
    catch (error) {
        console.log(error)
    }
}
export const createUserApi = async (data: userDatatype) => {
    console.log("service",data)
    let response = await fetch("http://localhost:3000/api/user", {
        method: "post",
        headers: {
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return response.json()
}
export  const  putUserApi =async (data:userDatatype) => {
    let response = await fetch("http://localhost:3000/api/user"+data.id, {
        method: "put",
        headers: {
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return response.json()
}
export  const  deleteUserApi =async (data:userDatatype) => {
    let response = await fetch("http://localhost:3000/api/user"+data.id, {
        method: "delete",
        headers: {
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return response.json()
}