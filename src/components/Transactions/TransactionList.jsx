import React from 'react'

export const TransactionList = ({dates, transactions}) => {

    return (
        <table>
            <thead>
                <th> Date </th>
                <th> Desc </th>
            </thead>
            <tbody>
                {
                    transactions.map(transaction => 
                    <tr key={transaction.id}>
                        <td> {dates.find(date => date.dateId === transaction.dateId)?.date} </td>    
                        <td> {transaction.desc} </td>
                    </tr>)
                }
                
            </tbody>
        </table>
    )
}