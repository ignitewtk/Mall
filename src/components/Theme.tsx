import * as React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

type Props = {
    message: string;
}

type States = {
    s: number
}

class Theme extends React.Component<Props> {

    render() {
        return (
            <div>
                
                <Box id='theme-header'> 
                    <p> 202307171508 </p>
                    <p> Header </p> </Box>
                <Container id='theme-body'> Body </Container>
                <Box id='theme-footer'> Footer </Box>
            </div>
        )
    }
}
export default Theme