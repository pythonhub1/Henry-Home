import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from './firebase';
import { NavLink, useNavigate } from 'react-router-dom'
import { TextField, Button, Stack} from '@mui/material'

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                navigate("/Henry-Home/")
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });

    }

    return(

        <Stack width={'100%'} height={'100vh'} justifyContent="center" alignItems={'center'}>

            <Stack spacing={2} width={300}>
                <TextField id="outlined-basic" label="Username or Email" variant="outlined" onChange={(e)=>setEmail(e.target.value)}/>

                <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    onChange={(e)=>setPassword(e.target.value)}
                />

                <Button size="large" variant='outlined' sx={{textTransform: 'none'}}
                        onClick={onLogin}
                >
                    Login
                </Button>
            </Stack>
        </Stack>



    )
}

export default Login