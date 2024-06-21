import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./AddWarehouse.scss";
import FormInput from "../FormInput/FormInput";
import backArrow from "../../assets/icons/arrow_back-24px.svg";

function AddWarehouse() {
  const baseUrl = import.meta.env.VITE_API_URL;

  const initialValues = {
    warehouse_name: "",
    address: "",
    city: "",
    country: "",
    contact_name: "",
    contact_position: "",
    contact_phone: "",
    contact_email: "",
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

  const sendFormData = async (warehouseObj) => {
    try {
      const sendResponse = await axios.post(`${baseUrl}/`, warehouseObj);
      return sendResponse;
    } catch (error) {
      console.error(error);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = { ...values };

    if (isFormValid()) {
      sendFormData(formData);
      console.log("warehouse added", formData);
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
            src={backArrow}
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
              htmlFor="warehouse_name"
              label="Warehouse Name"
              inputClass="form__input"
              id="warehouse_name"
              name="warehouse_name"
              type="text"
              placeholder="Warehouse Name"
              onChange={handleChangeInput}
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
              htmlFor="contact_name"
              label="Contact Name"
              inputClass="form__input"
              id="contact_name"
              name="contact_name"
              type="text"
              placeholder="Contact Name"
              onChange={handleChangeInput}
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
              onChange={handleChangeInput}
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
              onChange={handleChangeInput}
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
              onChange={handleChangeInput}
              value={values.contact_email}
              errorClass={`form__error ${
                isEmailValid() ? "" : "form__error--show"
              }`}
              errorMessage="Please enter a valid email address"
            />
          </div>
        </div>
        <div className="form__buttons">
          <Link to={"/"}>
            <button className="button button--cancel" type="button">
              Cancel
            </button>
          </Link>
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
