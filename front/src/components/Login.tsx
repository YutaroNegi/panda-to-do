import React from 'react'
import { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import { toastSucess, toastError, toastWarning } from './Toaster'
import { useNavigate } from "react-router-dom";
import { isEmail } from './Utilities'
import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { setUser } from '../redux/userSlice'
import { setList } from '../redux/listSlice'

interface Credentials {
    email: string | null,
    password: string | null
}

function Login(){
    let navigate = useNavigate();

    const user = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()

    const [loading, setLoading] = useState<boolean>(false)
    const [credentials, setCredentials] = useState<Credentials>({email: null, password: null})

    function handleInputChange(key: string, value: string){
        credentials[key as keyof Credentials] = value
        setCredentials(credentials)
    }

    async function login(email : string | null, password : string | null){
        console.log(email, password)
        if(!email || !password) return toastWarning('Please fill all the fields!')
        if (!isEmail(email)) return toastWarning('Invalid e-mail!')

        try {
            setLoading(true)

            const options =  {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({email: email, password: password}),
            }
            
            const response : any = await fetch('/api/login', options);
            const data : any = await response.json()

            if(!data.userId) throw ('incorrect email or password')
              
            dispatch(setUser(data))
            dispatch(setList({listArray: data.lists}))
            toastSucess('Successfully loged in!')
            setLoading(false)
            navigate('/home')
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
            <LoadingButton onClick={()=>{login(credentials.email, credentials.password)}} name="loginBtn" loading={loading} variant="contained">Login</LoadingButton>
            <LoadingButton onClick={()=>{navigate('/register')}} name="resistenBtn" loading={loading} variant="contained">Register</LoadingButton>
        </Box>
    )
}

export default Login