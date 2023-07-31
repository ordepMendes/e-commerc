/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {ChangeEvent} from 'react';
import { Button, TextField } from "@mui/material";
import { Form } from "./styles";

type FirstStepType = {
  onSubmit: () => void,
  valueFirstName: any,
  onChangeFirstName: any,

}

function FirstStep({onSubmit, valueFirstName, onChangeFirstName}: FirstStepType) {
  return (
    <Form onSubmit={onSubmit}>
      <div>
        <h1>Create your account</h1>
        <p>Vamos começar! Digite seu nome.</p>
      </div>
      <TextField
        placeholder="Digite seu primeiro nome"
        label="First Name"
        type="text"
        value={valueFirstName}
        onChange={onChangeFirstName}
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
  );
}

export default FirstStep;
