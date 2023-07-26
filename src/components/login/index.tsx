import React, { FormEvent } from 'react'
import { useDocumentTitle } from '../../utils'
import { AuthForm, useAuth } from '../../context'
import { handleUserResponse } from '../../auth-provider'

const apiUrl = process.env.REACT_APP_API_URL

export const LoginView = () => {
    useDocumentTitle("Login", false)
    const { login, user, register, logout } = useAuth()

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event?.preventDefault()
        const username = (event.currentTarget.elements[0] as HTMLInputElement).value
        const password = (event.currentTarget.elements[1] as HTMLInputElement).value
        login({username, password})
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                {user?user?.name: null}
                {/* token: {user?.token} */}
                <div>
                    <label htmlFor="username"> Username </label>
                    <input type="text" id={'username'}/>
                </div>
                <div>
                    <label> Password </label>
                    <input type="password" id={'passoword'} />
                </div>
                <button type={"submit"}> Sign in </button>
            </form>
        </>
    )
}