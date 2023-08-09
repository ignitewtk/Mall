import React, { useContext, useState } from 'react'
import { TestContext } from '../context'
import { http } from '../utils/http'

const apiUrl = process.env.REACT_APP_API_URL

const TestIn = () => {
    const message = useContext(TestContext)
    return (
        <div> {message} </div>
    )
}

export const Test = () => {
    const [message, setMessage] = useState('default')
    
    return (
        <>
        <TestContext.Provider value={message}>
            <TestIn />
            <p> Hello {message} </p>
            <button onClick={() => {
                setMessage(String(Date.now()))
            }}> Change </button>   
        </TestContext.Provider>
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
            <button onClick={() => {
                fetch(`https://www.seek.com.au/devops-jobs/in-All-Brisbane-QLD?daterange=7&sortmode=ListedDate`).then(async response => {
                // fetch(`https://backend202307112242.azurewebsites.net/`).then(async response => {
                    if(response.ok) {
                        console.log(await response.text())
                    }
                })
            }}> Test HTTP </button>
        </>
    )
}