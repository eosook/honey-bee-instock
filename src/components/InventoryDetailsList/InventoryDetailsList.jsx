import "./InventoryDetailsList.scss";
const InventoryDetailsList = () => {
  return (
    <div className="item">
      <div className="item-container">
        <div className="item-container-one">
          <h6 className="item-container-one-title">ITEM DESCRIPTION:</h6>
          <p className="item-container-one-description">asdasdasd</p>
        </div>
        <div className="item-container-two">
          <h6 className="item-container-two-category">CATEGORY</h6>
          <p className="item-container-two-item">Electronics</p>
        </div>
      </div>
      <div className="item-container-right">
        <div className="item-container-right-one">
          <h6 className="item-container-right-one-status">STATUS:</h6>
          <p className="item-container-right-one-stock">INSTOCK</p>
        </div>
        <div className="item-container-right-two">
          <h6 className="item-container-right-two-warehouse">WAREHOUSE</h6>
          <p className="item-container-right-two-location">Washington</p>
        </div>
        <div className="item-container-right-three">
          <h6 className="item-container-right-three-quantity">QUANTITY:</h6>
          <p className="item-container-right-three-quans">500</p>
        </div>
      </div>
    </div>
  );
};

export default InventoryDetailsList;
