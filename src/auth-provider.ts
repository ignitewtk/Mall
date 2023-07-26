// Not use if using 3rd party provider in real practice

import { AuthForm } from "./context"

export interface User {
    id: string,
    name: string,
    email: string,
    token: string
}


const apiUrl = process.env.REACT_APP_API_URL

const localStorageKey = '__auth_provider_token__'

export const getToken= () => window.localStorage.getItem(localStorageKey)

export const handleUserResponse = ({user}: {user: User}) => {
    window.localStorage.setItem(localStorageKey, user.token || '')
    return user
}

export const login = async (data: AuthForm) => {
    return fetch(`${apiUrl}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(
        async (response: Response) => {
            if (response.ok) {
                return handleUserResponse(await response.json())
            } else {
                return new Promise<User>(function(resolve, reject) {})
                // return Promise.reject(data)
            }
        }
    )
}


export const register = async (data: AuthForm) => {
    return fetch(`${apiUrl}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(
        async (response: Response) => {
            if (response.ok) {
                return handleUserResponse(await response.json())
            } else {
                return new Promise<User>(function(resolve, reject) {})
                // return Promise.reject(data)
            }
        }
    )
}

export const logout = async () => window.localStorage.removeItem(localStorageKey)