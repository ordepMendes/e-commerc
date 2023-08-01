import { ChangeEvent, useState } from "react";
import { Main, Form, Box } from "./styles";
import { FcGoogle } from "react-icons/fc";
import { BsWindows } from "react-icons/bs";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface FormData {
  email: string;
  password: string;
}

const initialFormData: FormData = {
  email: "",
  password: "",
};

const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;


function Login() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [data, setData] = useState<FormData>(initialFormData);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const navigate = useNavigate();

  const clearErrors = () => {
    setEmailError(null);
    setPasswordError(null);
  };


  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    clearErrors();
    
    if(data.email == ''){
      setEmailError('Preecha o campo!');
      return;
    }
    
    if(!regexEmail.test(data.email)){
      setEmailError('E-mail invalido!');
      return;
    }
    
    if(data.password == ''){
      setPasswordError('Preecha o campo!');
      return;
    }

    if(data.password.length < 8){
      setPasswordError('Senha invalida!')
      return;
    }
    
  };

  const handlePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (fieldName: keyof FormData, value: string) => {
    setData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const navigateToSignup = () => {
    navigate('/Signup');
  }

  return (
    <Main>
      <Form onSubmit={onSubmit}>
        <h1>Welcome</h1>
        <TextField
          placeholder="Digite um e-mail"
          label="E-mail"
          value={data.email}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange('email', e.target.value)}
          helperText={<small>{emailError}</small>}
          error={emailError != null ? true : false}
        />
        <TextField
          placeholder="Digite uma senha"
          label="Password"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <IconButton onClick={handlePassword}>
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            ),
          }}
          value={data.password}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange('password', e.target.value)}
          helperText={<small>{passwordError}</small>}
          error={passwordError != null ? true : false}
        />
        <Button type="submit" variant="contained">
          Enviar
        </Button>
        <p>
          Don't have an account?
          <span onClick={navigateToSignup}> Sign up</span>
        </p>
        <Box>
          <p>Or</p>
          <div>
            <Button variant="contained" color="inherit">
              <FcGoogle size="25px" />
            </Button>
            <Button variant="contained" color="inherit">
              <BsWindows size="20px" />
            </Button>
          </div>
        </Box>
        <p>Esqueceu sua senha?</p>
      </Form>
    </Main>
  );
}

export default Login;
