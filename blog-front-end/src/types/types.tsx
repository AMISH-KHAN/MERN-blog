 export type userDatatype = {
    id:string|"",
    name: string,
    email: string,
     password: string,
     pic: String | ""
}



export type userObject = {
    email: string,
    password:string
}

export type getActionDatatype = {
type: string,
}
export type findActionDatatype = {
type: string,
payload: userObject
}
export type postActionDatatype = {
    type:string
    payload: userDatatype
}
