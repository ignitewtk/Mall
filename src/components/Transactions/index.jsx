import React from 'react'

import { useEffect, useState } from 'react'

import { TransactionList } from './TransactionList'

import { SearchPanel } from './SearchPanel'

import { cleanObject } from '../../utils'

import qs from "qs"

const apiUrl = process.env.REACT_APP_API_URL

export const TransactionView = () => {

    const [param, setParam] = useState({
        desc: '',
        dateId: ''
    })

    
    const [transactions, setTransactions] = useState([])
    
    const [dates, setDates] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3001/transactions?${qs.stringify(cleanObject(param))}`).then(async response => {
            if (response.ok) {
                setTransactions(await response.json())
            }
        })
    }, [param])

    useEffect(() => {
        fetch(`http://localhost:3001/dates?${qs.stringify(cleanObject(param))}`).then(async response => {
            if (response.ok) {
                setDates(await response.json())
            }
        })
    }, [])

    return (
        <div>
            <SearchPanel dates={dates} param={param} setParam={setParam}/>
            <TransactionList dates={dates} transactions={transactions}/>
        </div>
    )
}