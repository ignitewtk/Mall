import React from 'react'

import { useState } from 'react'

export const SearchPanel = ({dates, param, setParam}) => {

    return (
        <form>
            <div>
                <input type="text" 
                    value={param.desc} 
                    onChange={evt => setParam({
                        ...param, 
                        desc: evt.target.value
                    })} />
                <select 
                    value={param.dateId}
                    onChange={evt => setParam({
                        ...param,
                        dateId: evt.target.value
                    })}>
                    <option value={''}> Date </option>
                    {
                        dates.map(
                            date => 
                                <option 
                                    key={date.dateId} 
                                    value={date.dateId}> {date.date} 
                                </option>)
                    }
                </select>

            </div>
        </form>
    )
}