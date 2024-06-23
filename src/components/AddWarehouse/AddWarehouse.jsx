import { Link } from "react-router-dom";
import axios from "axios";
import "./AddWarehouse.scss";
import WarehouseForm from "../WarehouseForm/WarehouseForm";
import backArrow from "../../assets/icons/arrow_back-24px.svg";

export default function AddWarehouse() {
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

  const addWarehouse = async (values) => {
    try {
      const sendResponse = await axios.post(`${baseUrl}/warehouse`, values);
      return sendResponse;
    } catch (error) {
      console.error(error);
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
      <WarehouseForm
        initialValues={initialValues}
        onSubmit={addWarehouse}
        buttonAction="+ Add Warehouse"
      />
    </section>
  );
}
