import { Link } from "react-router-dom";
import "./AddWarehouse.scss";

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
          <label className="form__label" htmlFor="warehouse-name">
            Warehouse Name
          </label>
          <input
            className="form__input"
            id="warehouse-name"
            type="text"
            name="warehouse-name"
          />
          <label className="form__label" htmlFor="address">
            Street Address
          </label>
          <input
            className="form__input"
            id="address"
            type="text"
            name="address"
          />
          <label className="form__label" htmlFor="city">
            City
          </label>
          <input className="form__input" id="city" type="text" name="city" />
          <label className="form__label" htmlFor="country">
            Country
          </label>
          <input
            className="form__input"
            id="country"
            type="text"
            name="country"
          />
        </div>
        <div className="form__contact">
          <h2 className="form__subheading">Contact Details</h2>
          <label className="form__label" htmlFor="contact-name">
            Contact Name
          </label>
          <input
            className="form__input"
            id="contact-name"
            type="text"
            name="contact-name"
          />
          <label className="form__label" htmlFor="position">
            Position
          </label>
          <input
            className="form__input"
            id="position"
            type="text"
            name="position"
          />
          <label className="form__label" htmlFor="phone">
            Phone Number
          </label>
          <input className="form__input" id="phone" type="text" name="phone" />
          <label className="form__label" htmlFor="email">
            Email
          </label>
          <input className="form__input" id="email" type="text" name="email" />
        </div>
        <div className="form__buttons">
          <button className="button__cancel">Cancel</button>
          <button className="button__add-warehouse">+ Add Warehouse</button>
        </div>
      </form>
    </section>
  );
}
