import { useState } from "react";
import { Link } from "react-router-dom";
import "./AddWarehouse.scss";
import FormInput from "../FormInput/FormInput";

function AddWarehouse() {
  const initialValues = {
    warehouse: "",
    address: "",
    city: "",
    country: "",
    contact: "",
    position: "",
    phone: "",
    email: "",
  };
  const [values, setValues] = useState(initialValues);

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const isPhoneValid = () => {
    if (
      values.phone &&
      !values.phone.match(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/)
    ) {
      return false;
    }
    return true;
  };

  const isEmailValid = () => {
    if (
      values.email &&
      !values.email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
    ) {
      return false;
    }
    return true;
  };

  const isFormValid = () => {
    if (
      !values.warehouse ||
      !values.address ||
      !values.city ||
      !values.country ||
      !values.contact ||
      !values.position ||
      !values.phone ||
      !values.email
    ) {
      return false;
    }
    if (!isPhoneValid() || !isEmailValid()) {
      return false;
    }

    return true;
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (isFormValid()) {
      console.log("warehouse added");
    } else {
      console.log("unable to add warehouse");
    }
  };
  return (
    <section className="add-warehouse">
      <div className="add-warehouse__heading">
        <Link className="add-warehouse__link" to={"/"}>
          <img
            className="add-warehouse__icon"
            src="src/assets/icons/arrow_back-24px.svg"
            alt="Blue back arrow"
          />
        </Link>
        <h1 className="add-warehouse__title">Add New Warehouse</h1>
      </div>
      <form className="form" onSubmit={handleFormSubmit}>
        <div className="form__inputs">
          <div className="form__details">
            <h2 className="form__subheading">Warehouse Details</h2>
            <FormInput
              htmlFor="warehouse-name"
              label="Warehouse Name"
              inputClass="form__input"
              id="warehouse-name"
              name="warehouse"
              type="text"
              placeholder="Warehouse Name"
              onChange={handleChangeInput}
              value={values.warehouse}
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
              onChange={handleChangeInput}
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
              onChange={handleChangeInput}
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
              onChange={handleChangeInput}
              value={values.country}
              errorClass="form__error"
              errorMessage="This field is required"
            />
          </div>
          <div className="form__contact">
            <h2 className="form__subheading">Contact Details</h2>
            <FormInput
              htmlFor="contact-name"
              label="Contact Name"
              inputClass="form__input"
              id="contact-name"
              name="contact"
              type="text"
              placeholder="Contact Name"
              onChange={handleChangeInput}
              value={values.contact}
              errorClass="form__error"
              errorMessage="This field is required"
            />
            <FormInput
              htmlFor="position"
              label="Position"
              inputClass="form__input"
              id="position"
              name="position"
              type="text"
              placeholder="Position"
              onChange={handleChangeInput}
              value={values.position}
              errorClass="form__error"
              errorMessage="This field is required"
            />
            <FormInput
              htmlFor="phone"
              label="Phone Number"
              inputClass={`form__input ${
                isPhoneValid() ? "" : "form__input--invalid"
              }`}
              id="phone"
              name="phone"
              type="text"
              placeholder="Phone Number"
              onChange={handleChangeInput}
              value={values.phone}
              errorClass={`form__error ${
                isPhoneValid() ? "" : "form__error--show"
              }`}
              errorMessage="Please enter a valid phone number"
            />
            <FormInput
              htmlFor="email"
              label="Email"
              inputClass={`form__input ${
                isEmailValid() ? "" : "form__input--invalid"
              }`}
              id="email"
              name="email"
              type="text"
              placeholder="Email"
              onChange={handleChangeInput}
              value={values.email}
              errorClass={`form__error ${
                isEmailValid() ? "" : "form__error--show"
              }`}
              errorMessage="Please enter a valid email address"
            />
          </div>
        </div>
        <div className="form__buttons">
          <button className="button button--cancel" type="button">
            Cancel
          </button>
          <button
            className="button button--add"
            type="submit"
            disabled={!isFormValid()}
          >
            + Add Warehouse
          </button>
        </div>
      </form>
    </section>
  );
}

export default AddWarehouse;
