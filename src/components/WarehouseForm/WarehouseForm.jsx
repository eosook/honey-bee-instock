import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./WarehouseForm.scss";
import FormInput from "../FormInput/FormInput";

export default function WarehouseForm({
  initialValues,
  onSubmit,
  buttonAction,
}) {
  const [values, setValues] = useState(initialValues);
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const isPhoneValid = () => {
    if (
      values.contact_phone &&
      !values.contact_phone.match(
        /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
      )
    ) {
      return false;
    }
    return true;
  };

  const isEmailValid = () => {
    if (
      values.contact_email &&
      !values.contact_email.match(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
      )
    ) {
      return false;
    }
    return true;
  };

  const isFormValid = () => {
    if (
      !values.warehouse_name ||
      !values.address ||
      !values.city ||
      !values.country ||
      !values.contact_name ||
      !values.contact_position ||
      !values.contact_phone ||
      !values.contact_email
    ) {
      return false;
    }
    if (!isPhoneValid() || !isEmailValid()) {
      return false;
    }

    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValid()) {
      onSubmit(values);
      if (location.pathname === "/add-warehouse") {
        alert(
          "Warehouse added successfully! You will now be redirected to the home page."
        );
      } else {
        alert(
          "Warehouse edited successfully! You will now be redirected to the home page."
        );
      }
      setTimeout(() => {
        navigate("/");
      }, 200);
    } else {
      alert("Please fix errors in the form - all fields are required.");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__inputs">
        <div className="form__details">
          <h2 className="form__subheading">Warehouse Details</h2>
          <FormInput
            htmlFor="warehouse_name"
            label="Warehouse Name"
            inputClass="form__input"
            id="warehouse_name"
            name="warehouse_name"
            type="text"
            placeholder="Warehouse Name"
            onChange={handleChange}
            value={values.warehouse_name}
            errorClass="form__error"
            errorMessage="This field is required"
          />
          <FormInput
            htmlFor="address"
            label="Street Address"
            inputClass="form__input"
            id="address"
            name="address"
            type="text"
            placeholder="Street Address"
            onChange={handleChange}
            value={values.address}
            errorClass="form__error"
            errorMessage="This field is required"
          />
          <FormInput
            htmlFor="city"
            label="City"
            inputClass="form__input"
            id="city"
            name="city"
            type="text"
            placeholder="City"
            onChange={handleChange}
            value={values.city}
            errorClass="form__error"
            errorMessage="This field is required"
          />
          <FormInput
            htmlFor="country"
            label="Country"
            inputClass="form__input"
            id="country"
            name="country"
            type="text"
            placeholder="Country"
            onChange={handleChange}
            value={values.country}
            errorClass="form__error"
            errorMessage="This field is required"
          />
        </div>
        <div className="form__contact">
          <h2 className="form__subheading">Contact Details</h2>
          <FormInput
            htmlFor="contact_name"
            label="Contact Name"
            inputClass="form__input"
            id="contact_name"
            name="contact_name"
            type="text"
            placeholder="Contact Name"
            onChange={handleChange}
            value={values.contact_name}
            errorClass="form__error"
            errorMessage="This field is required"
          />
          <FormInput
            htmlFor="contact_position"
            label="Position"
            inputClass="form__input"
            id="contact_position"
            name="contact_position"
            type="text"
            placeholder="Position"
            onChange={handleChange}
            value={values.contact_position}
            errorClass="form__error"
            errorMessage="This field is required"
          />
          <FormInput
            htmlFor="contact_phone"
            label="Phone Number"
            inputClass={`form__input ${
              isPhoneValid() ? "" : "form__input--invalid"
            }`}
            id="contact_phone"
            name="contact_phone"
            type="text"
            placeholder="Phone Number"
            onChange={handleChange}
            value={values.contact_phone}
            errorClass={`form__error ${
              isPhoneValid() ? "" : "form__error--show"
            }`}
            errorMessage="Please enter a valid phone number"
          />
          <FormInput
            htmlFor="contact_email"
            label="Email"
            inputClass={`form__input ${
              isEmailValid() ? "" : "form__input--invalid"
            }`}
            id="contact_email"
            name="contact_email"
            type="text"
            placeholder="Email"
            onChange={handleChange}
            value={values.contact_email}
            errorClass={`form__error ${
              isEmailValid() ? "" : "form__error--show"
            }`}
            errorMessage="Please enter a valid email address"
          />
        </div>
      </div>
      <div className="form__buttons">
        <Link className="form__button-link" to={"/"}>
          <button className="form__button form__button--cancel" type="button">
            Cancel
          </button>
        </Link>
        <button
          className="form__button form__button--action"
          type="submit"
          disabled={!isFormValid()}
        >
          {buttonAction}
        </button>
      </div>
    </form>
  );
}
