import "./InventoryDetails.scss";
import arrowBack from "../../assets/images/arrow_back-24px.svg";
import edit from "../../assets/images/edit-24px.svg";
import InventoryDetailsList from "../InventoryDetailsList/InventoryDetailsList";
const InventoryDetails = () => {
  return (
    <nav className="inventories">
      <section className="inventories-container">
        <div className="inventories-container-header">
          <img
            className="inventories-container-arrow"
            src={arrowBack}
            alt={`{arrowBack} logo`}
          />
          <h1 className="inventories-container-title">Television</h1>
        </div>
        <div className="inventories-container-edit">
          <img
            className="inventories-container-edit-img"
            src={edit}
            alt={`{edit} logo}`}
          />
          <h3 className="inventories-container-edit-text">Edit</h3>
        </div>
      </section>
      <InventoryDetailsList />
    </nav>
  );
};

export default InventoryDetails;
