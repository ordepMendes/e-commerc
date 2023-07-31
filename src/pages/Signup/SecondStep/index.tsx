import { Button, TextField } from "@mui/material";
import { Form } from "./styles";

type SecondStepType = {
  onSubmit: () => void;
}

function SecondStep({onSubmit}: SecondStepType) {
  return (
    <Form onSubmit={onSubmit}>
      <div>
        <h1>Create your account</h1>
        <p>Agora digite seu e-mail.</p>
      </div>
      <TextField
        placeholder="Digite seu e-mail"
        label="E-mail"
        type="email"
      />
      <Button type="submit" variant="contained">
        Continuar
      </Button>
    </Form>
  );
}

export default SecondStep;
