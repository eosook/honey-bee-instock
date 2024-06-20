import "./InventoryDetails.scss";
import arrowBack from "../../assets/images/arrow_back-24px.svg";
import edit from "../../assets/images/edit-24px.svg";
import InventoryDetailsList from "../InventoryDetailsList/InventoryDetailsList";
import { Link } from "react-router-dom";
const InventoryDetails = ({ itemDataDetails, warehouseDetails }) => {
  const { item_name } = itemDataDetails;
  return (
    <nav className="inventories">
      <section className="inventories-container">
        <div className="inventories-container-header">
          <Link to="/inventory">
            <img
              className="inventories-container-arrow"
              src={arrowBack}
              alt="Back arrow logo"
            />
          </Link>
          <h1 className="inventories-container-title">{item_name}</h1>
        </div>
        <div className="inventories-container-edit">
          <img
            className="inventories-container-edit-img"
            src={edit}
            alt="Edit logo"
          />
          <h3 className="inventories-container-edit-text">Edit</h3>
        </div>
      </section>
      <InventoryDetailsList
        itemDataDetails={itemDataDetails}
        warehouseDetails={warehouseDetails}
      />
    </nav>
  );
};

export default InventoryDetails;
