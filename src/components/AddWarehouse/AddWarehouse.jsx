import { Link } from "react-router-dom";
import "./AddWarehouse.scss";
import FormInput from "../FormInput/FormInput";

function AddWarehouse() {
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
      <form className="form">
        <div className="form__inputs">
          <div className="form__details">
            <h2 className="form__subheading">Warehouse Details</h2>
            <FormInput
              htmlFor="warehouse-name"
              label="Warehouse Name"
              id="warehouse-name"
              name="warehouse-name"
              type="text"
              placeholder="Warehouse Name"
            />
            <FormInput
              htmlFor="address"
              label="Street Address"
              id="address"
              name="address"
              type="text"
              placeholder="Street Address"
            />
            <FormInput
              htmlFor="city"
              label="City"
              id="city"
              name="city"
              type="text"
              placeholder="City"
            />
            <FormInput
              htmlFor="country"
              label="Country"
              id="country"
              name="country"
              type="text"
              placeholder="Country"
            />
          </div>
          <div className="form__contact">
            <h2 className="form__subheading">Contact Details</h2>
            <FormInput
              htmlFor="contact-name"
              label="Contact Name"
              id="contact-name"
              name="contact-name"
              type="text"
              placeholder="Contact Name"
            />
            <FormInput
              htmlFor="position"
              label="Position"
              id="position"
              name="position"
              type="text"
              placeholder="Position"
            />
            <FormInput
              htmlFor="phone"
              label="Phone Number"
              id="phone"
              name="phone"
              type="text"
              placeholder="Phone Number"
            />
            <FormInput
              htmlFor="email"
              label="Email"
              id="email"
              name="email"
              type="text"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="form__buttons">
          <button className="button button--cancel">Cancel</button>
          <button className="button button--add">+ Add Warehouse</button>
        </div>
      </form>
    </section>
  );
}

export default AddWarehouse;
