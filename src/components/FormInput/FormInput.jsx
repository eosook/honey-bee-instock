import "./FormInput.scss";

function FormInput(props) {
  const {
    htmlFor,
    label,
    inputClass,
    id,
    name,
    placeholder,
    onChange,
    value,
    errorClass,
    errorMessage,
  } = props;

  return (
    <div className="form__field">
      <label className="form__label" htmlFor={htmlFor}>
        {label}
      </label>
      <input
        className={inputClass}
        id={id}
        name={name}
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      <span className={errorClass}>{errorMessage}</span>
    </div>
  );
}

export default FormInput;
