import "./EditInventory.scss";
import arrowBack from "../../assets/icons/arrow_back-24px.svg";
import drop from "../../assets/icons/arrow_drop_down-24px.svg";
const EditInventory = () => {
  return (
    <section className="editinventory ">
      <div className="editinventory-header">
        <img
          className="editinventory-header-img"
          src={arrowBack}
          alt={`${arrowBack} image`}
        />
        <h1 className="editinventory-header-title">Edit Inventory Item</h1>
      </div>
      <div className="editinventory-containers">
        <div className="editinventory-container">
          <h3 className="editinventory-container-details">Item Details</h3>
          <label className="editinventory-container-item">Item Name</label>
          <input
            className="editinventory-container-itemname"
            type="text"
            placeholder="Television"
          />
          <label className="editinventory-container-description ">
            Description
          </label>
          <textarea
            className="editinventory-container-text"
            name="description"
            placeholder="Television infor"
          ></textarea>
          <label className="editinventory-container-category">Category</label>
          <select className="editinventory-container-dropdown" name="category">
            <option value="television">Electronics</option>
            <option value="computer">Gear</option>
            <option value="phone">Apparel</option>
            <option value="laptop">Accessories</option>
            <option value="other">Health</option>
          </select>
          <img
            className="editinventory-container-drop"
            src={drop}
            alt={`${drop} image`}
          />
        </div>
        <div className="editinventory-wrapper">
          <div className="editinventory-wrap">
            <h3 className="editinventory-wrap-avaibility">Item Avaibility</h3>
            <label className="editinventory-wrap-status">Status</label>
            <div className="editinventory-wrap-stock">
              <div className="editinventory-wrap-stock-one">
                <input
                  className="editinventory-wrap-stock--instock"
                  type="radio"
                  name="inStock"
                />
                In stock
              </div>
              <div className="editinventory-wrap-stock-two">
                <input
                  className="editinventory-wrap-stock--nostock"
                  type="radio"
                  name="outStock"
                />
                Out of stock
              </div>
            </div>
            <label className="editinventory-wrap-quantity">Quantity</label>
            <input
              className="editinventory-wrap-input"
              type="text"
              name="quantity"
            />
            <label className="editinventory-wrap-warehouse">Warehouse</label>
            <select className="editinventory-wrap-dropdown" name="warehouse">
              <option value="location">Manhattan</option>
              <option value="location">Washington</option>
              <option value="location">Jersey</option>
              <option value="location">SF</option>
              <option value="location">Santa Monica</option>
              <option value="location">Seattle</option>
              <option value="location">Miami</option>
              <option value="location">Boston</option>
            </select>
          </div>
        </div>
      </div>
      <div className="editinventory-btn">
        <button className="editinventory-btn-cancel">Cancel</button>
        <button className="editinventory-btn-save">Save</button>
      </div>
    </section>
  );
};

export default EditInventory;
