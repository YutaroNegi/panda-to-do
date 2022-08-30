import { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import { toastSucess, toastError, toastWarning } from './Toaster'
import { useNavigate } from "react-router-dom";
import { isEmail, hasNullProp } from './Utilities'
import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { setUser } from '../redux/userSlice'

interface Credentials {
    firstName: string | null,
    lastName: string | null,
    email: string | null,
    password: string | null,
    confirmPassword: string | null
}

function Register(){
    let navigate = useNavigate();

    const user = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()

    const [loading, setLoading] = useState<boolean>(false)
    const [credentials, setCredentials] = useState<Credentials>({firstName: null, lastName: null, email: null, password: null, confirmPassword: null})

    function handleInputChange(key: string, value: string){
        console.log(key);
        
        credentials[key as keyof Credentials] = value
        setCredentials(credentials)
    }

    function register(){       
        if(hasNullProp(credentials)) return toastWarning('Please fill all the fields!')

        if (!isEmail(credentials.email)) return toastWarning('Invalid e-mail!')

        try {
            setLoading(true)
            // fetch
            
            const data = {
                userId: 1,
                firstName: 'Yutaro',
                lastName: 'Negi',
                email: 'souza_yutaro@hotmail.com',
                password: '1234',
            };
              
            dispatch(setUser(data))
            toastSucess('Success!')
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
        <Box sx={{display: 'flex', flexDirection: 'column', width: '20em', height: '35em', margin: '0 auto 2em auto', justifyContent: 'space-evenly'}}>
            <TextField onChange={(e)=>{handleInputChange(e.target.name, e.target.value)}} name="firstName" label="First tName" variant="outlined" />
            <TextField onChange={(e)=>{handleInputChange(e.target.name, e.target.value)}} name="lastName" label="Last Name" variant="outlined" />
            <TextField onChange={(e)=>{handleInputChange(e.target.name, e.target.value)}} name="email" label="e-mail" variant="outlined" />
            <TextField onChange={(e)=>{handleInputChange(e.target.name, e.target.value)}} name="password" type='password' label="Password" variant="outlined" />
            <TextField onChange={(e)=>{handleInputChange(e.target.name, e.target.value)}} name="confirmPassword" type='password' label="Confirm Password" variant="outlined" />

            <LoadingButton onClick={register} name="email" loading={loading} variant="contained">Register</LoadingButton>
            <LoadingButton onClick={()=>{navigate('/login')}} name="password" loading={loading} variant="contained">Login</LoadingButton>
        </Box>
    )
}

export default Register