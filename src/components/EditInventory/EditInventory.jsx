import "./EditInventory.scss";
import arrowBack from "../../assets/icons/arrow_back-24px.svg";
import drop from "../../assets/icons/arrow_drop_down-24px.svg";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const EditInventory = () => {
  const { id } = useParams();
  const [item, setItem] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [warehouse, setWarehouse] = useState("");
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const base_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        const response = await axios.get(`${base_URL}/inventory/${id}`);
        const {
          item_name,
          description,
          quantity,
          category,
          status,
          warehouse_id,
        } = response.data;
        setItem(item_name);
        setDescription(description);
        setQuantity(quantity);
        setCategory(category);
        setStatus(status);
        setWarehouse(warehouse_id);
      } catch (error) {
        console.error("Error fetching item details:", error);
      }
    };
    fetchItemDetails();
  }, [id, base_URL]);
  useEffect(() => {
    validateForm();
  }, [item, description, quantity, category, status, warehouse]);
  const validateForm = () => {
    const newErrors = {};
    if (!item) newErrors.item = "This field is required!";
    if (!description) newErrors.description = "This field is required!";
    if (!category) newErrors.category = "This field is required!";
    if (!warehouse) newErrors.warehouse = "This field is required!";
    if (
      status === "In Stock" &&
      (!quantity || isNaN(quantity) || quantity <= 0)
    )
      newErrors.quantity = "Quantity must be greater than 0";
    setErrors(newErrors);
    setIsFormValid(Object.keys(newErrors).length === 0);
  };
  //new function to check if the status is out of stock
  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
    if (newStatus === "Out of Stock") {
      setQuantity(0);
    }
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    const data = {
      warehouse_id: warehouse,
      item_name: item,
      description,
      category,
      status,
      quantity,
    };
    try {
      await axios.put(`${base_URL}/inventory/edit/${id}`, data);
      navigate(-1);
    } catch (error) {
      console.error("Error updating item:", error.response.data);
    }
  };
  return (
    <form onSubmit={handleFormSubmit} className="editinventory">
      <div className="editinventory-header">
        <Link to={-1}>
          <img
            className="editinventory-header-img"
            src={arrowBack}
            alt="Back arrow"
          />
        </Link>
        <h1 className="editinventory-header-title">Edit Inventory Item</h1>
      </div>
      <div className="editinventory-containers">
        <div className="editinventory-container">
          <h3 className="editinventory-container-details">Item Details</h3>
          <label className="editinventory-container-item">Item Name</label>
          <input
            className="editinventory-container-itemname"
            type="text"
            placeholder={item}
            onChange={(e) => setItem(e.target.value)}
          />
          {errors.item && <p className="error-message">{errors.item}</p>}
          <label className="editinventory-container-description">
            Description
          </label>
          <textarea
            className="editinventory-container-text"
            name="description"
            placeholder={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          {errors.description && (
            <p className="error-message">{errors.description}</p>
          )}
          <div className="editinventory-container-one">
            <label className="editinventory-container-category">Category</label>
            <select
              className="editinventory-container-dropdown"
              name="category"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            >
              <option value="">Select Category</option>
              <option value="Electronics">Electronics</option>
              <option value="Gear">Gear</option>
              <option value="Apparel">Apparel</option>
              <option value="Accessories">Accessories</option>
              <option value="Health">Health</option>
            </select>
            {errors.category && (
              <p className="error-message">{errors.category}</p>
            )}
            <img
              className="editinventory-container-drop"
              src={drop}
              alt="Drop down arrow"
            />
          </div>
        </div>
        <div className="editinventory-wrapper">
          <div className="editinventory-wrap">
            <h3 className="editinventory-wrap-availability">
              Item Availability
            </h3>
            <label className="editinventory-wrap-status">Status</label>
            <div className="editinventory-wrap-stock">
              <div
                className={`editinventory-wrap-stock-one ${
                  status === "In Stock" ? "active" : ""
                }`}
              >
                <input
                  className="editinventory-wrap-stock--instock"
                  type="radio"
                  name="status"
                  value="In Stock"
                  onChange={() => handleStatusChange("In Stock")}
                  checked={status === "In Stock"}
                />
                In Stock
              </div>
              <div
                className={`editinventory-wrap-stock-two ${
                  status === "Out of Stock" ? "active" : ""
                }`}
              >
                <input
                  className="editinventory-wrap-stock--nostock"
                  type="radio"
                  name="status"
                  value="Out of Stock"
                  onChange={() => handleStatusChange("Out of Stock")}
                  checked={status === "Out of Stock"}
                />
                Out of Stock
              </div>
            </div>
            {status === "In Stock" && (
              <div className="editinventory-wrap-three">
                <label className="editinventory-wrap-quantity">Quantity</label>
                <input
                  className="editinventory-wrap-quantities"
                  type="text"
                  name="quantity"
                  placeholder="Quantity"
                  onChange={(e) => setQuantity(e.target.value)}
                  value={quantity}
                />
                {errors.quantity && (
                  <p className="error-message">{errors.quantity}</p>
                )}
              </div>
            )}
            <div className="editinventory-wrap-four">
              <label className="editinventory-wrap-warehouse">Warehouse</label>
              <select
                className="editinventory-wrap-dropdown"
                name="warehouse"
                onChange={(e) => setWarehouse(e.target.value)}
                value={warehouse}
              >
                <option value="">Please Select</option>
                <option value="1">Manhattan</option>
                <option value="2">Washington</option>
                <option value="3">Jersey</option>
                <option value="4">SF</option>
                <option value="5">Santa Monica</option>
                <option value="6">Seattle</option>
                <option value="7">Miami</option>
                <option value="8">Boston</option>
              </select>
              {errors.warehouse && (
                <p className="error-message">{errors.warehouse}</p>
              )}
              <img
                className="editinventory-wrap-drop"
                src={drop}
                alt="Drop down arrow"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="editinventory-btn">
        <button type="button" className="editinventory-btn-cancel">
          Cancel
        </button>
        <button
          type="submit"
          className="editinventory-btn-save"
          disabled={!isFormValid}
        >
          Save
        </button>
      </div>
    </form>
  );
};
export default EditInventory;
