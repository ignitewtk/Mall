import React, { FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDocumentTitle } from '../../utils'
import { AuthForm, useAuth } from '../../context'
import { handleUserResponse } from '../../auth-provider'
import { response } from 'msw'
import { Container, Button, TextField } from '@mui/material'

const apiUrl = process.env.REACT_APP_API_URL

export const LoginView = () => {

    const navigate = useNavigate()
    useDocumentTitle("Login", false)
    
    const { login, user, register, logout } = useAuth()
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event?.preventDefault()
        const username = (event.currentTarget.elements[0] as HTMLInputElement).value
        const password = (event.currentTarget.elements[1] as HTMLInputElement).value
        login({username, password})
        navigate('/')
    }
    return (
        <>
        <Container style={{display: 'flex', justifyContent: 'center'}}>
            
            <form onSubmit={handleSubmit}>
            <div style={{ color:"lightgrey", margin:"30px 0", fontSize:"22px", fontWeight: '600'}}> Welcome, my friend </div>
                <div>
                    <TextField id="standard-basic" label="Username" variant="standard" />
                </div>
                <div>
                    <TextField id="standard-basic" label="Password" variant="standard" type="password" />
                </div>
                <Button style={{margin: '15px 0', width: '100%'}} type={"submit"} variant="text"> Sign in </Button>
                
            </form>
            
            
        </Container>
        <Container style={{display: 'flex', justifyContent: 'center'}}>
        <a style={{margin:"0 20px 0 0", color:'#1976d2'}}> <Link to='/register'> Register </Link></a> <a style={{margin:"0 20px 0 0", color:'#1976d2'}}> <Link to='/forgetPw'> Forget passowrd </Link> </a>
        </Container>
        </>
        
    )
}