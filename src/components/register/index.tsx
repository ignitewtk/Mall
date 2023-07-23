import React, { FormEvent } from 'react'


const apiUrl = process.env.REACT_APP_API_URL

export const RegisterView = () => {

    const register = (param: {username: string, password: string}) => {
        fetch(`${apiUrl}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        }).then(
            async (response: Response) => {
                if (response.ok) {

                }
            }
        )
    }
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event?.preventDefault()
        const username = (event.currentTarget.elements[0] as HTMLInputElement).value
        const password = (event.currentTarget.elements[1] as HTMLInputElement).value
        register({username, password})
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username"> Username </label>
                <input type="text" id={'username'}/>
            </div>
            <div>
                <label> Password </label>
                <input type="password" id={'passoword'} />
            </div>
            <button type={"submit"}> Sign Up </button>
        </form>
    )
}