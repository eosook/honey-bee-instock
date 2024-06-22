import { Link } from "react-router-dom";
import "./AddWarehouse.scss";
import WarehouseForm from "../WarehouseForm/WarehouseForm";
import backArrow from "../../assets/icons/arrow_back-24px.svg";

export default function AddWarehouse(props) {
  const { values, setValues } = props;

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
      <WarehouseForm values={values} setValues={setValues} />
    </section>
  );
}
