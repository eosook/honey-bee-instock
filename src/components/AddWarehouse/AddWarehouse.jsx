import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./AddWarehouse.scss";
import WarehouseForm from "../WarehouseForm/WarehouseForm";
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
      <WarehouseForm />
    </section>
  );
}

export default AddWarehouse;
