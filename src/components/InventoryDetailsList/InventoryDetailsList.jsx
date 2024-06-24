import "./InventoryDetailsList.scss";
const InventoryDetailsList = ({ itemDataDetails, warehouseDetails }) => {
  console.log(warehouseDetails);
  const { description, category, status, quantity } = itemDataDetails;
  const filterWarehouse = warehouseDetails.filter(
    (warehouse) => warehouse.id === itemDataDetails.warehouse_id
  );
  const warehouseName = filterWarehouse?.length > 0 ? filterWarehouse[0] : {};
  return (
    <div className="item">
      <div className="item-container">
        <div className="item-container-one">
          <h6 className="item-container-one-title item-container__label">ITEM DESCRIPTION:</h6>
          <p className="item-container-one-description item-container__body">{description}</p>
        </div>
        <div className="item-container-two">
          <h6 className="item-container-two-category item-container__label">CATEGORY</h6>
          <p className="item-container-two-item item-container__body">{category}</p>
        </div>
      </div>
      <div className="item-container-right">
        <div className="item-container-right-one">
          <h6 className="item-container-right-one-status item-container__label">STATUS:</h6>
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
          <h6 className="item-container-right-two-warehouse item-container__label">WAREHOUSE</h6>
          <p className="item-container-right-two-location item-container__body">
            {warehouseName.warehouse_name}
          </p>
        </div>
        <div className="item-container-right-three">
          <h6 className="item-container-right-three-quantity item-container__label">QUANTITY:</h6>
          <p className="item-container-right-three-quans item-container__body">{quantity}</p>
        </div>
      </div>
    </div>
  );
};

export default InventoryDetailsList;
