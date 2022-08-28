import { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import { toastSucess, toastError, toastWarning } from './Toaster'

interface Credentials {
    email: string | null,
    password: string | null
}

function Login(){
    const [loading, setLoading] = useState<boolean>(false)
    const [credentials, setCredentials] = useState<Credentials>({email: null, password: null})

    function handleInputChange(key: string, value: string){
        console.log(key);
        
        credentials[key as keyof Credentials] = value
        setCredentials(credentials)
        // console.log(credentials)
    }

    function login(){
        if(!credentials.email && !credentials.password){
            return toastWarning('Please fill all the fields!')
        }

        try {
            console.log(credentials)
            setLoading(true)
            // fetch

            toastSucess('Successuully loged in!')
            setLoading(false)
        } catch (error) {
            console.log('erro logging in!')
            console.log(error)
            setLoading(false)
            toastError('Incorrect email or password!')
        }
    }

    return(
        <Box sx={{display: 'flex', flexDirection: 'column', width: '20em', height: '20em', margin: '0 auto 2em auto', justifyContent: 'space-evenly'}}>
            <TextField onChange={(e)=>{handleInputChange(e.target.name, e.target.value)}} name="email" label="e-mail" variant="outlined" />
            <TextField onChange={(e)=>{handleInputChange(e.target.name, e.target.value)}} name="password" label="password" variant="outlined" />
            <LoadingButton onClick={login} name="email" loading={loading} variant="contained">Login</LoadingButton>
            <LoadingButton name="password" loading={loading} variant="contained">Create Account</LoadingButton>
        </Box>
    )
}

export default Login