import { useState } from "react";
const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const ValueIsValid = validateValue(enteredValue);
  const hasError = !ValueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    setIsTouched(true);
  };
  const InputBlurHandler = (event) => {
    setIsTouched(true);
  };
  const inputReset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };
  return {
    enteredValue,
    ValueIsValid,
    hasError,
    inputReset,
    valueChangeHandler,
    InputBlurHandler,
  };
};
export default useInput;
