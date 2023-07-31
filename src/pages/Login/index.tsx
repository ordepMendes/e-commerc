import { ChangeEvent, useState } from "react";
import { Main, Form, Box } from "./styles";
import { FcGoogle } from "react-icons/fc";
import { BsWindows } from "react-icons/bs";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, password);
  };

  const handlePassword = () => {
    setShowPassword(!showPassword);
  };

  const getEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const getPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
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
          onChange={getEmail}
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
          onChange={getPassword}
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
