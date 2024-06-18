import "./FormInput.scss";

function FormInput({ htmlFor, label, id, name, placeholder, onChange, value }) {
  return (
    <div className="form__field">
      <label className="form__label" htmlFor={htmlFor}>
        {label}
      </label>
      <input
        className="form__input"
        id={id}
        name={name}
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default FormInput;
