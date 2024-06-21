import "./EditInventory.scss";
import arrowBack from "../../assets/icons/arrow_back-24px.svg";
import drop from "../../assets/icons/arrow_drop_down-24px.svg";
import { useLocation } from "react-router-dom";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
const EditInventory = () => {
  const location = useLocation();
  const { itemDataDetails, editItemDetails } = location.state;
  const { description, quantity, item_name } = itemDataDetails;
  const [item, setitem] = useState("");
  const [descript, setDescript] = useState("");
  const [quantities, setQuantiities] = useState("");
  const itemRef = useRef(null);
  const descriptRef = useRef(null);
  const quantityRef = useRef(null);
  const handleitem = (com) => {
    setitem(com.target.value);
  };
  const handledescript = (descript) => {
    setDescript(descript.target.value);
  };
  const handlequantities = (quantity) => {
    setQuantiities(quantity.target.value);
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (descript === "" || item === "" || quantities === "") {
      if (descript === "") {
        descriptRef.current.focus();
      } else if (item === "") {
        itemRef.current.focus();
      } else if (quantities === "") {
        descriptRef.current.focus();
      }
      return;
    }
    await editItemDetails(descript, item);
    setDescript("");
    setitem("");
  };
  return (
    <form onSubmit={handleFormSubmit} className="editinventory ">
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
            placeholder={item_name}
            onChange={handleitem}
            ref={itemRef}
            value={item}
          />
          <label className="editinventory-container-description ">
            Description
          </label>
          <textarea
            className="editinventory-container-text"
            name="description"
            placeholder={description}
            onChange={handledescript}
            ref={descriptRef}
            value={descript}
          ></textarea>
          <div className="editinventory-container-one">
            <label className="editinventory-container-category">Category</label>
            <select
              className="editinventory-container-dropdown"
              name="category"
            >
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
            <div className="editinventory-wrap-three">
              <label className="editinventory-wrap-quantity">Quantity</label>
              <input
                className="editinventory-wrap-quantities"
                type="text"
                name="quantity"
                placeholder={quantity}
                onChange={handlequantities}
                value={quantities}
                ref={quantityRef}
              />
            </div>
            <div className="editinventory-wrap-four">
              <label className="editinventory-wrap-warehouse">Warehouse</label>
              <select className="editinventory-wrap-dropdown" name="warehouse">
                <option
                  className="editinventory-wrap-dropdown-select"
                  value="location"
                >
                  Please Select
                </option>
                <option value="location">Manhattan</option>
                <option value="location">Washington</option>
                <option value="location">Jersey</option>
                <option value="location">SF</option>
                <option value="location">Santa Monica</option>
                <option value="location">Seattle</option>
                <option value="location">Miami</option>
                <option value="location">Boston</option>
              </select>
              <img
                className="editinventory-wrap-drop"
                src={drop}
                alt={`${drop} image`}
              />
            </div>
          </div>
        </div>
      </div>
      <Link to={`/inventory/${itemDataDetails.id}`}>
        <div className="editinventory-btn">
          <button className="editinventory-btn-cancel">Cancel</button>

          <button className="editinventory-btn-save">Save</button>
        </div>
      </Link>
    </form>
  );
};
export default EditInventory;
