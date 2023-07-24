import React, { useContext, useState } from 'react'
import { TestContext } from '../context'

export const Test = () => {
    const [message, setMessage] = useState('default')
    return (
        <>
        <TestContext.Provider value={message}>
            <p> Hello {message} </p>
            <button onClick={() => {
                setMessage(String(Date.now()))
            }}> Change </button>   
        </TestContext.Provider>
        </>
    )
}