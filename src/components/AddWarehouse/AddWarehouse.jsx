import { Link } from "react-router-dom";
import "./AddWarehouse.scss";
import FormInput from "../FormInput/FormInput";

function AddWarehouse() {
  return (
    <section className="add-warehouse">
      <div className="add-warehouse__heading">
        <Link className="add-warehouse__link">
          <img
            className="add-warehouse__icon"
            src="src/assets/icons/arrow_back-24px.svg"
            alt="Blue back arrow"
          />
        </Link>
        <h1 className="add-warehouse__title">Add New Warehouse</h1>
      </div>
      <form className="form">
        <div className="form__details">
          <h2 className="form__subheading">Warehouse Details</h2>
          <FormInput
            labelClass="form__label"
            htmlFor="warehouse-name"
            label="Warehouse Name"
            inputClass="form__input"
            id="warehouse-name"
            name="warehouse-name"
            type="text"
            placeholder="Warehouse Name"
          />
          <FormInput
            labelClass="form__label"
            htmlFor="address"
            label="Street Address"
            inputClass="form__input"
            id="address"
            name="address"
            type="text"
            placeholder="Street Address"
          />
          <FormInput
            labelClass="form__label"
            htmlFor="city"
            label="City"
            inputClass="form__input"
            id="city"
            name="city"
            type="text"
            placeholder="City"
          />
          <FormInput
            labelClass="form__label"
            htmlFor="country"
            label="Country"
            inputClass="form__input"
            id="country"
            name="country"
            type="text"
            placeholder="Country"
          />
        </div>
        <div className="form__contact">
          <h2 className="form__subheading">Contact Details</h2>
          <FormInput
            labelClass="form__label"
            htmlFor="contact-name"
            label="Contact Name"
            inputClass="form__input"
            id="contact-name"
            name="contact-name"
            type="text"
            placeholder="Contact Name"
          />
          <FormInput
            labelClass="form__label"
            htmlFor="position"
            label="Position"
            inputClass="form__input"
            id="position"
            name="position"
            type="text"
            placeholder="Position"
          />
          <FormInput
            labelClass="form__label"
            htmlFor="phone"
            label="Phone Number"
            inputClass="form__input"
            id="phone"
            name="phone"
            type="text"
            placeholder="Phone Number"
          />
          <FormInput
            labelClass="form__label"
            htmlFor="email"
            label="Email"
            inputClass="form__input"
            id="email"
            name="email"
            type="text"
            placeholder="Email"
          />
        </div>
        <div className="form__buttons">
          <button className="button__cancel">Cancel</button>
          <button className="button__add-warehouse">+ Add Warehouse</button>
        </div>
      </form>
    </section>
  );
}

export default AddWarehouse;
