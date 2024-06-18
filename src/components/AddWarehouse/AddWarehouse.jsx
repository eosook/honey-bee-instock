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

  const isEmailValid = () => {
    if (!values.email.includes("@") || !values.email.includes(".com")) {
      return false;
    }
    return true;
  };

  const isPhoneValid = () => {
    const phonenum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (values.phone.match(phonenum)) {
      return true;
    }
    return false;
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
    if (!isEmailValid() || !isPhoneValid()) {
      return false;
    }
    return true;
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (isFormValid()) {
      console.log("valid form submission");
    } else {
      console.log("that's invalid");
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
              id="warehouse-name"
              name="warehouse"
              type="text"
              placeholder="Warehouse Name"
              onChange={handleChangeInput}
              value={values.warehouse}
            />
            <FormInput
              htmlFor="address"
              label="Street Address"
              id="address"
              name="address"
              type="text"
              placeholder="Street Address"
              onChange={handleChangeInput}
              value={values.address}
            />
            <FormInput
              htmlFor="city"
              label="City"
              id="city"
              name="city"
              type="text"
              placeholder="City"
              onChange={handleChangeInput}
              value={values.city}
            />
            <FormInput
              htmlFor="country"
              label="Country"
              id="country"
              name="country"
              type="text"
              placeholder="Country"
              onChange={handleChangeInput}
              value={values.country}
            />
          </div>
          <div className="form__contact">
            <h2 className="form__subheading">Contact Details</h2>
            <FormInput
              htmlFor="contact-name"
              label="Contact Name"
              id="contact-name"
              name="contact"
              type="text"
              placeholder="Contact Name"
              onChange={handleChangeInput}
              value={values.contact}
            />
            <FormInput
              htmlFor="position"
              label="Position"
              id="position"
              name="position"
              type="text"
              placeholder="Position"
              onChange={handleChangeInput}
              value={values.position}
            />
            <FormInput
              htmlFor="phone"
              label="Phone Number"
              id="phone"
              name="phone"
              type="text"
              placeholder="Phone Number"
              onChange={handleChangeInput}
              value={values.phone}
            />
            <FormInput
              htmlFor="email"
              label="Email"
              id="email"
              name="email"
              type="text"
              placeholder="Email"
              onChange={handleChangeInput}
              value={values.email}
            />
          </div>
        </div>
        <div className="form__buttons">
          <button className="button button--cancel" type="button">
            Cancel
          </button>
          <button className="button button--add" type="submit">
            + Add Warehouse
          </button>
        </div>
      </form>
    </section>
  );
}

export default AddWarehouse;
