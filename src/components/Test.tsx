import React, { useContext, useState } from 'react'
import { TestContext } from '../context'
import { useDocumentTitle } from '../utils'

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
        </>
    )
}