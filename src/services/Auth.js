import axios from 'axios'


export const registerUser = async (payload) => {
    return await axios.post("/auth/register", payload)
}

export const UserLogin = async (payload) => {
    return await axios.post("/login", payload)
}