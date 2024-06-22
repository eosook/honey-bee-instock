// import { useState } from "react";
import "./WarehouseForm.scss";
import FormInput from "../FormInput/FormInput";
import {
  handleChangeInput,
  isEmailValid,
  isPhoneValid,
  isFormValid,
  sendAddFormData,
  handleAddFormSubmit,
} from "../../helpers/formHelpers";

export default function WarehouseForm() {
  return (
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
        <Link className="form__button-link" to={"/"}>
          <button className="form__button form__button--cancel" type="button">
            Cancel
          </button>
        </Link>
        <button
          className="form__button form__button--add"
          type="submit"
          disabled={!isFormValid()}
        >
          + Add Warehouse
        </button>
      </div>
    </form>
  );
}
