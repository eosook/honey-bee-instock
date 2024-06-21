import "./Category.scss";
import sort from "../../assets/icons/sort-24px.svg";
import { Link } from "react-router-dom";
import chevron from "../../assets/icons/chevron_right-24px.svg";
import del from "../../assets/icons/delete_outline-24px.svg";
import edit from "../../assets/icons/edit-24px.svg";
import ListItem from "../ListItem/ListItem";
import { useState, useEffect } from "react";
import axios from "axios";

const Category = ({ itemData, isWarehouse }) => {
  const [warehouseData, setWarehouseData] = useState([]);
  const base_URL = import.meta.env.VITE_API_URL;
  useEffect(() => {
    const getWarehouse = async () => {
      try {
        const res = await axios.get(`${base_URL}/warehouse`);
        setWarehouseData(res.data);
      } catch (error) {
        console.error("Error fetching warehouses: 🚛🚛🚛", error);
      }
    };
    getWarehouse();
  });
  return (
    <>
      {itemData.map((item) => {
        const warehouseName = warehouseData.find(
          (warehouse) => warehouse.id === item.warehouse_id
        );
        return (
          <div className="category" key={item.id}>
            <div className="category-containers">
              <div className="category-container">
                <div className="category-item">
                  <h6 className="category__label">INVENTORY ITEM</h6>
                  <img
                    className="category-item-img category-sort-one"
                    src={sort}
                    alt="Sort logo"
                  />
                  <div className="category-item-links">
                    <Link
                      className="category-item-link"
                      to={`/inventory/${item.id}`}
                    >
                      <p className="category-item-link-text category-mobile">
                        {item.item_name}
                      </p>
                      <img
                        className="category-item-link-chev category-mobile"
                        src={chevron}
                        alt="Chevron logo"
                      />
                    </Link>
                  </div>
                  <div className="category-item-container">
                    <h6 className="category__label">CATEGORY</h6>
                    <img
                      className="category-item-img category-sort-two"
                      src={sort}
                      alt="Sort logo"
                    />
                    <p className="category-item-cat category-mobile">
                      {item.category}
                    </p>
                  </div>
                  <div className="category-logo">
                    <img
                      className="category-logo-del"
                      src={del}
                      alt="Delete logo"
                    />
                    <Link to={`/inventory/edit/${item.id}`}>
                      <img
                        className="category-logo-edit"
                        src={edit}
                        alt="Edit logo"
                      />
                    </Link>
                  </div>
                </div>
                <div className="category-container-one">
                  <div className="category-status">
                    <h6 className="category__label">STATUS</h6>
                    <img
                      className="category-item-img category-sort-three"
                      src={sort}
                      alt="Sort logo"
                    />
                    <p
                      className={`category-item-stock ${
                        item.status === "Out of Stock"
                          ? "category-item-stock-notstock"
                          : ""
                      }`}
                    >
                      {item.status}
                    </p>
                  </div>
                  <div className="category-quantity">
                    <h6 className="category__label">QTY</h6>
                    <img
                      className="category-item-img category-sort-four"
                      src={sort}
                      alt="Sort logo"
                    />
                    <p className="category-item-cat category-mobile">
                      {item.quantity}
                    </p>
                  </div>
                  <div className="category-warehouse">
                    <h6 className="category__label">WAREHOUSE</h6>
                    <img
                      className="category-item-img category-sort-five"
                      src={sort}
                      alt="Sort logo"
                    />
                    <p className="category-item-cat category-mobile">
                      {warehouseName.warehouse_name}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <nav>
        <div className="nav">
          <div className="nav-inv nav-inv__inventory">
            <h6 className="nav-inv__label">INVENTORY ITEM</h6>
            <img className="nav__sort-logo" src={sort} alt="Sort logo" />
          </div>
          <div className="nav-inv nav-inv__category">
            <h6 className="nav-inv__label">CATEGORY</h6>
            <img className="nav__sort-logo" src={sort} alt="Sort logo" />
          </div>
          <div
            className={`nav-inv ${
              isWarehouse ? "nav-inv__status-warehouse" : "nav-inv__status"
            }`}
          >
            <h6 className="nav-inv__label">STATUS</h6>
            <img className="nav__sort-logo" src={sort} alt="Sort logo" />
          </div>
          <div className="nav-inv nav-inv__quantity">
            <h6 className="nav-inv__label">
              {isWarehouse ? "QUANTITY" : "QTY"}
            </h6>
            <img className="nav__sort-logo" src={sort} alt="Sort logo" />
          </div>
          <div className={`nav-inv ${isWarehouse ? "nav-inv__remove" : ""}`}>
            <h6 className="nav-inv__label">WAREHOUSE</h6>
            <img className="nav__sort-logo" src={sort} alt="Sort logo" />
          </div>
          <div className="nav-inv nav-inv__actions">
            <h6 className="nav-inv__label">ACTIONS</h6>
          </div>
        </div>
      </nav>
      <ListItem
        itemData={itemData}
        warehouseData={warehouseData}
        isWarehouse={isWarehouse}
      />
    </>
  );
};
export default Category;
