import React, { FormEvent } from 'react'
import { useDocumentTitle } from '../../utils'
import { AuthForm, useAuth } from '../../context'
import { handleUserResponse } from '../../auth-provider'
import { response } from 'msw'
import { http } from '../../utils/http'

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
            <div> Hello, {user?.name} </div>
            <form onSubmit={handleSubmit}>
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
            <button onClick={() => {
                fetch(`https://backend202307112242.azurewebsites.net/webapp/page2`).then(async response => {
                    if(response.ok) {
                        console.log(await response.json())
                    }
                })
            }}> Test env apiURL </button>
            <button onClick={() => {
                http(`webapp/page2`, {}).then(async response => {
                    if(response.ok) {
                        console.log(await response.json())
                    }
                })
            }}> Test API </button>

            <button onClick={() => {
                fetch(`${apiUrl}/webapp/page2`).then(async response => {
                    if(response.ok) {
                        console.log(await response.json())
                    }
                })
            }}> Test API </button>
        </>
    )
}