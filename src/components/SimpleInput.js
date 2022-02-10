import useInput from "../hooks/use-input";
const SimpleInput = (props) => {
  const {
    enteredValue: nameValue,
    ValueIsValid: nameIsValid,
    hasError: nameHasError,
    inputReset: nameInputReset,
    valueChangeHandler: nameChangeHandler,
    InputBlurHandler: nameInputBlurHandler,
  } = useInput((value) => value.trim() !== "");
  const {
    enteredValue: emailValue,
    ValueIsValid: emailIsValid,
    hasError: emailHasError,
    inputReset: emailInputReset,
    valueChangeHandler: emailChangeHandler,
    InputBlurHandler: emailInputBlurHandler,
  } = useInput((value) => value.includes("@"));
  let formIsValid = false;

  if (nameIsValid && emailIsValid) {
    formIsValid = true;
  } else {
    formIsValid = false;
  }
  const formSubmissionHandler = (event) => {
    event.preventDefault();
    console.log(nameValue, emailValue);
    emailInputReset();
    nameInputReset();
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameHasError ? "form-control invalid" : "form-control"}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onBlur={nameInputBlurHandler}
          value={nameValue}
          onChange={nameChangeHandler}
        />
        {nameHasError && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className={emailHasError ? "form-control invalid" : "form-control"}>
        <label htmlFor="email">Your E-mail</label>
        <input
          type="email"
          id="email"
          onBlur={emailInputBlurHandler}
          value={emailValue}
          onChange={emailChangeHandler}
        />
        {emailHasError && <p className="error-text">Email must not be empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
