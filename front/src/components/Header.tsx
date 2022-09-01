import Box from '@mui/material/Box';
import react from 'react'
import  { ReactComponent as PandaIcon } from "../assets/panda-svgrepo-com.svg";

function Header(){
    return(
        <Box sx={{padding: '0.5em',color: '#fff', height: '5em', widows: '100vw', backgroundColor: '#1976d2', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly'}}>
            <PandaIcon fill="#fff" height="50"/> 
            <Box sx={{fontSize: '1.2em', fontWeight: '500'}}>TO DO LIST</Box>
        </Box>
    )
}

export default Header