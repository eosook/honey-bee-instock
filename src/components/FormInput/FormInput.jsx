import "./FormInput.scss";

export default function FormInput(props) {
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
      <span className={errorClass}>
        <img
          className="form__error-icon"
          src="../../assets/icons/error-24px.svg"
          alt="White exclamation mark on red circle background"
        />
        {` ${errorMessage}`}
      </span>
    </div>
  );
}
