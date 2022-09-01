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

    function login(){
        if(!credentials.email || !credentials.password) return toastWarning('Please fill all the fields!')
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

            const list = {
                listId: 1,
                userId: data.userId,
                listName: 'minhas compras',
                listItems: ['Arroz', 'agua', 'bolacha', 'sal']
            }

            const list2 = {
                listId: 2,
                userId: data.userId,
                listName: 'hoje',
                listItems: ['correr', 'beber', 'exercitar']
            }

            const listArray = {
                listArray: [list, list2]
            }
              
            dispatch(setUser(data))
            dispatch(setList(listArray))
            toastSucess('Successuully loged in!')
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
            <LoadingButton onClick={login} name="email" loading={loading} variant="contained">Login</LoadingButton>
            <LoadingButton onClick={()=>{navigate('/register')}} name="password" loading={loading} variant="contained">Register</LoadingButton>
        </Box>
    )
}

export default Login