import { Button, TextField } from "@mui/material";
import { Main, Form } from "./styles";

function Signup() {
  return (
    <Main>
      <Form>
        <div>
          <h1>Create your account</h1>
          <p>Vamos começar! Digite seu nome.</p>
        </div>
        <TextField
          placeholder="Digite seu primeiro nome"
          label="First Name"
          type="text"
        />
        <TextField
          placeholder="Digite seu sobrenome"
          label="Last Name"
          type="text"
        />
        <Button type="submit" variant="contained">
          Continuar
        </Button>
      </Form>
    </Main>
  );
}

export default Signup;
