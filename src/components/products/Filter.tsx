import * as React from 'react'
import Button from '@mui/material/Button'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search';

import { FilterParam } from '.'
import { useState } from 'react'

import '../../styles/filter.css';

type Props = {
    title: string,
    items: string[]
    setParams: (params: FilterParam) => void
}

const DropDownCheckbox = ({title, items, setParams}:Props) => {
    const [display, setDisplay] = useState("block")
    const [checkedItems, setCheckedItems] = useState<string[]>([])

    const handleChecked = (e:React.ChangeEvent<HTMLInputElement>) => {
        var updatedList = [...checkedItems]
        if (e.target.checked) {
            updatedList = [...checkedItems, e.target.name]

        } else {
            updatedList.splice(checkedItems.indexOf(e.target.name), 1)
            
        }
        console.log(updatedList)
        setCheckedItems(updatedList)

    }
    return (
        <div className="dropdown-menu">
            <Button 
            onClick = {() => {
                if (display === "block") {
                    setDisplay("none")
                } else if (display === "none") {
                    setDisplay("block")
                }
            }}
                className="dropdown-button"> {title} </Button>
            <FormGroup style={{display:display}}>
                {
                    items.map(
                        (item) => 
                        <FormControlLabel 
                            sx={{marginLeft:"0"}}
                            className="dropdown-checkbox" 
                            key={item}
                            control={<Checkbox onChange={handleChecked} name={item}/>} 
                            label={item}/>)
                }
            </FormGroup>
        </div>
    )

}

interface FilterProps {
    params: FilterParam
    setParams: (param: FilterProps['params']) => void
}

const Filter = ({params, setParams}: FilterProps) => {
    return (
        <div id='product-filter'> 
            <InputBase 
                sx={{ ml: 1, flex: 1, marginLeft: '0px' }}
                className="filter-input-search" 
                placeholder="Search"/>
            <SearchIcon fontSize="medium" sx={{ flex: 1}}/>
            
            <DropDownCheckbox setParams={setParams} title={"Category"} items={["Vegetable", "Meat", "Fruit"]}/>
            <DropDownCheckbox setParams={setParams} title={"Ratings"} items={["1", "2", "3", "4", "5"]}/>
            <Button className="dropdown-button" variant="text"> Apply </Button>
            
        </div>
    )
}
export default Filter