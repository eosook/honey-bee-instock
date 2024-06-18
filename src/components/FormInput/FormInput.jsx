function FormInput({
  labelClass,
  htmlFor,
  label,
  inputClass,
  id,
  name,
  placeholder,
}) {
  return (
    <>
      <label className={labelClass} htmlFor={htmlFor}>
        {label}
      </label>
      <input
        className={inputClass}
        id={id}
        name={name}
        type="text"
        placeholder={placeholder}
      />
    </>
  );
}

export default FormInput;
