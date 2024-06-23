import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./EditWarehouse.scss";
import WarehouseForm from "../WarehouseForm/WarehouseForm";
import backArrow from "../../assets/icons/arrow_back-24px.svg";

export default function EditWarehouse() {
  const baseUrl = import.meta.env.VITE_API_URL;
  const { id } = useParams();
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

  const editWarehouse = async (values) => {
    try {
      const response = await axios.put(`${baseUrl}/warehouse/${id}`, values);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="edit-warehouse">
      <div className="edit-warehouse__heading">
        <Link className="edit-warehouse__link" to={"/"}>
          <img
            className="edit-warehouse__icon"
            src={backArrow}
            alt="Blue back arrow"
          />
        </Link>
        <h1 className="edit-warehouse__title">Edit Warehouse</h1>
      </div>
      <WarehouseForm
        initialValues={initialValues}
        onSubmit={editWarehouse}
        buttonAction="Save"
      />
    </section>
  );
}
