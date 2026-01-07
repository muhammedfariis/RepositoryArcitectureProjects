import bcrypt from "bcrypt"
let salt = 10
export const hashpassword = async (password) =>{
    return await bcrypt.hash(password , salt)
}

export const comparepassword = async (password , hash)=>{
    return await bcrypt.compare(password,hash)
}
