import "./Category.scss";
import sort from "../../assets/icons/sort-24px.svg";
//import { Link } from "react-router-dom";
//import chevron from "../../assets/icons/chevron_right-24px.svg";
//import del from "../../assets/icons/delete_outline-24px.svg";
//import edit from "../../assets/icons/edit-24px.svg";
import ListItem from "../ListItem/ListItem";
import { useState, useEffect } from "react";
import axios from "axios";
//import DeleteInventoryModal from "../DeleteInventoryModal/DeleteInventoryModal";

export default function Category({ itemData, setItemData, isWarehouse }) {
  const [warehouseData, setWarehouseData] = useState([]);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

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
      {itemData.map((item, index)=> {
        const warehouseName = warehouseData.find((warehouse)=>warehouse.id === item.warehouse_id)
        return (
          <ListItem
          key={index}
          item={item}
          warehouseName={warehouseName}
          itemData={itemData}
          setItemData={setItemData}
          isWarehouse={isWarehouse}          
          />
        )
      })}
    </>
  )
}