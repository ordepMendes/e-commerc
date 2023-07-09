import { ChangeEvent, useState } from "react";
import { Main, Form, Box } from "./styles";
import {FcGoogle} from 'react-icons/fc';
import {BsWindows} from 'react-icons/bs';
import {Visibility, VisibilityOff} from '@mui/icons-material';
import {IconButton, TextField, Button} from '@mui/material';


function Login(){

    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(email, password);
    };

    const handlePassword = () => {
        setShowPassword(!showPassword);
    };

    const getEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);       
    }

    const getPassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    return(
        <Main>
            <Form onSubmit={onSubmit}>
                <h1>Welcome</h1>
                <TextField
                    placeholder="Digite um e-mail"
                    label="E-mail"
                    onChange={getEmail}
                />
                <TextField 
                    placeholder="Digite uma senha"
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    InputProps={{
                        endAdornment:
                            <IconButton onClick={handlePassword}>
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        }
                    }
                    onChange={getPassword} 
                />
                <Button type="submit" variant="contained">Enviar</Button>
                <p>
                    Don't have an account?
                    <span onClick={() => console.log('teste')}> Sign up</span>
                </p>
                <Box>
                    <p>Or</p>
                    <div>
                        <Button variant="contained" color="inherit"><FcGoogle size='25px' /></Button>
                        <Button variant="contained" color="inherit"><BsWindows size='20px'/></Button>
                    </div>
                </Box>
            </Form>
        </Main>
    )
}

export default Login;