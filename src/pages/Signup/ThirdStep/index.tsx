import { Button, TextField, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Form } from "./styles";
import { useState } from "react";

function ThirdStep() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handlePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Form>
      <div>
        <h1>Create your account</h1>
        <p>Agora digite digite sua senha.</p>
      </div>
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
      />
      <TextField
        placeholder="Repita a senha"
        label="Confirm password"
        type={showPassword ? "text" : "password"}
        InputProps={{
          endAdornment: (
            <IconButton onClick={handlePassword}>
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          ),
        }}
      />
      <Button type="submit" variant="contained">
        Continuar
      </Button>
    </Form>
  );
}

export default ThirdStep;
