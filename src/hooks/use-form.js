import { useState } from "react";
const useForm = (checkValidity) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = checkValidity(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const onChangeValueHandler = (event) => {
    setEnteredValue(event.target.value);
    setIsTouched(true);
  };

  const onBlurHandler = () => {
    setIsTouched(true);
  };

  const valueReset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };
  return {
    enteredValue,
    hasError,
    valueIsValid,
    valueReset,
    onBlurHandler,
    onChangeValueHandler,
  };
};
export default useForm;
