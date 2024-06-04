import api from "./config"

const signUp = async (formData) => {
    try {
        const { data } = await api.post('auth/signup', formData)
        console.log(data)
        localStorage.setItem('token', data.result)
        localStorage.setItem('role', data.role)
        return data
    } catch (error) {
        console.log(error)
    }
}

const login = async (formData) => {
    try {
        const { data } = await api.post('auth/login', formData)
        console.log(data)
        localStorage.setItem('token', data.result)
        localStorage.setItem('role', data.role)
        return data
    } catch (error) {
        console.log(error)
    }
}

export {
    signUp,
    login
}