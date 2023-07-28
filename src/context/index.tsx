import React, { ReactNode, useState } from 'react'
import { User } from '../auth-provider'
import * as auth from '../auth-provider'
import { http } from '../utils/http'
import { useMount } from '../utils'

/**
 * Test Context
 */
export const TestContext = React.createContext<string>('empty')


/**
 * Authentication Context
 */
export interface AuthForm {
    username: string,
    password: string
}

const bootstrapUser = async () => {
    let user = null
    
    const token = auth.getToken()
    
    if (token) {
        const data = await http('me', {token})
        user = data
    }
    
    return user
}

export const AuthContext = React.createContext<{
    user: User|null|undefined,
    register: (form: AuthForm) => Promise<void>,
    login: (form: AuthForm) => Promise<void>,
    logout: () => Promise<void>,
} | undefined>(undefined) 

// A new component wrapping auth context provider
export const AuthProvider = ({children}: {children: ReactNode}) => {
    
    const [user, setUser] = useState<User|null|undefined>(null)

    const login = (form: AuthForm) => auth.login(form).then(user => {
        console.log("login param:", user)
        setUser(user)
    })
    const register = (form: AuthForm) => auth.register(form).then(setUser)
    const logout = () => auth.logout().then(user => setUser(null))
    
    // Init user info and keep login
    useMount(() => {
        bootstrapUser().then(user => {
            console.log(user)
            setUser(user)
        })
    })

    return <AuthContext.Provider value={{user, login, register, logout}}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => {
    const context = React.useContext(AuthContext)
    // const context = null
    if (!context) {
        throw new Error('useAuth must be used in Auth Provider')
    }
    return context
}
