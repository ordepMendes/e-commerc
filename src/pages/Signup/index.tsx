import { useState, ChangeEvent } from "react";
import FirstStep from "./FirstStep";
import { Main } from "./styles";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

function Signup() {
  const [step, setStep] = useState("");
  const [data, setData] = useState<FormData>(initialFormData);

  const handleInputChange = (fieldName: keyof FormData, value: string) => {
    setData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const submitFirstStep = () => {
    setStep("1");
  };

  const submitSecondStep = () => {
    setStep("2");
  };

  let StepSection;

  switch (step) {
    case "1":
      StepSection = <SecondStep onSubmit={submitSecondStep} />;
      break;
    case "2":
      StepSection = <ThirdStep />;
      break;
    default:
      StepSection = (
        <FirstStep
          onSubmit={submitFirstStep}
          valueFirstName={data.firstName}
          onChangeFirstName={(e: ChangeEvent<HTMLInputElement>) => handleInputChange('firstName', e.target.value)}
        />
      );
  }

  return <Main>{StepSection}</Main>;
}

export default Signup;
