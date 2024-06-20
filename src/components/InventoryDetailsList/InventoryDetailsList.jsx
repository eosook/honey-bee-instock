import "./InventoryDetailsList.scss";
const InventoryDetailsList = ({ itemDataDetails, warehouseDetails }) => {
  const { description, category, status, quantity } = itemDataDetails;
  const warehouseName = warehouseDetails.find(
    (warehouse) => warehouse.id === itemDataDetails.id
  );
  return (
    <div className="item">
      <div className="item-container">
        <div className="item-container-one">
          <h6 className="item-container-one-title">ITEM DESCRIPTION:</h6>
          <p className="item-container-one-description">{description}</p>
        </div>
        <div className="item-container-two">
          <h6 className="item-container-two-category">CATEGORY</h6>
          <p className="item-container-two-item">{category}</p>
        </div>
      </div>
      <div className="item-container-right">
        <div className="item-container-right-one">
          <h6 className="item-container-right-one-status">STATUS:</h6>
          <p
            className={`item-container-right-one-stock ${
              status === "Out of Stock"
                ? "item-container-right-one-notstock"
                : ""
            }`}
          >
            {status}
          </p>{" "}
        </div>
        <div className="item-container-right-two">
          <h6 className="item-container-right-two-warehouse">WAREHOUSE</h6>
          <p className="item-container-right-two-location">
            {warehouseName.warehouse_name}
          </p>
        </div>
        <div className="item-container-right-three">
          <h6 className="item-container-right-three-quantity">QUANTITY:</h6>
          <p className="item-container-right-three-quans">{quantity}</p>
        </div>
      </div>
    </div>
  );
};

export default InventoryDetailsList;
