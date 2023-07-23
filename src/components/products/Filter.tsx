import * as React from 'react'
import Button from '@mui/material/Button'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search';
import { Container } from '@mui/material'

type Props = {}

type States = {}

class DropDownCheckbox extends React.Component<Props, States> {

    render() {
        return (
            <div className="dropdown-menu">
                <Button className="dropdown-button"> Menu 1</Button>
                <FormGroup>
                    <FormControlLabel className="dropdown-checkbox" control={<Checkbox />} label="Option 1"/>
                    <FormControlLabel className="dropdown-checkbox" control={<Checkbox />} label="Option 2"/>
                    <FormControlLabel className="dropdown-checkbox" control={<Checkbox />} label="Option 3"/>
                </FormGroup>
            </div>
        )
    }
}
class Filter extends React.Component<Props, States> {

    render() {
        return (
            <div id='product-filter'> 
                <InputBase 
                
                    className="filter-input-search" 
                    placeholder="Search"/>
                <SearchIcon fontSize="small" sx={{ flex: 1 }}/>
                
                <DropDownCheckbox />
                <DropDownCheckbox />
                <Button className="dropdown-button" variant="text"> Apply </Button>
                
            </div>
        )
    }
}
export default Filter