import useForm from "../hooks/use-form";

const BasicForm = (props) => {
  const isNotEmpty = (value) => value.trim() !== "";
  const isEmail = (value) => value.match(/\S+@\S+\.\S+/);
  //first name hook
  const {
    enteredValue: FnameValue,
    hasError: FnamehasError,
    valueIsValid: FnameIsValid,
    valueReset: FnameInputReset,
    onBlurHandler: FnameInputBlurHandler,
    onChangeValueHandler: FnameChangeHandler,
  } = useForm(isNotEmpty);
  //sec name hook
  const {
    enteredValue: LnameValue,
    hasError: LnamehasError,
    valueIsValid: LnameIsValid,
    valueReset: LnameInputReset,
    onBlurHandler: LnameInputBlurHandler,
    onChangeValueHandler: LnameChangeHandler,
  } = useForm(isNotEmpty);
  //email hook
  const {
    enteredValue: emailValue,
    hasError: emailhasError,
    valueIsValid: emailIsValid,
    valueReset: emailInputReset,
    onBlurHandler: emailInputBlurHandler,
    onChangeValueHandler: emailChangeHandler,
  } = useForm(isEmail);

  let formValidity = false;
  if (FnameIsValid && LnameIsValid && emailIsValid) formValidity = true;
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (!formValidity) return;
    FnameInputReset();
    LnameInputReset();
    emailInputReset();
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <div className="control-group">
        <div
          className={FnamehasError ? "form-control invalid" : "form-control"}
        >
          <label htmlFor="f-name">First Name</label>
          <input
            type="text"
            id="f-name"
            value={FnameValue}
            onChange={FnameChangeHandler}
            onBlur={FnameInputBlurHandler}
          />
          {FnamehasError && (
            <p className="error-text">First Name Can't be empty</p>
          )}
        </div>

        <div
          className={LnamehasError ? "form-control invalid" : "form-control"}
        >
          <label htmlFor="s-name">Last Name</label>
          <input
            type="text"
            id="s-name"
            value={LnameValue}
            onChange={LnameChangeHandler}
            onBlur={LnameInputBlurHandler}
          />
          {LnamehasError && (
            <p className="error-text">Last Name Can't be empty</p>
          )}
        </div>
      </div>
      <div className={emailhasError ? "form-control invalid" : "form-control"}>
        <label htmlFor="email">E-mail Address</label>
        <input
          type="email"
          id="email"
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailInputBlurHandler}
        />
        {emailhasError && <p className="error-text">Wrong E-mail</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formValidity}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
