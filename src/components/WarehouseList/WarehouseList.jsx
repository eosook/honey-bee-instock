import "./WarehouseList.scss";
import axios from 'axios';
import { useState, useEffect } from "react";
import SingleWarehouse from "../SingleWarehouse/SingleWarehouse";
import sortIcon from "../../assets/Icons/sort-24px.svg";

function WarehouseList() {
  const [warehouses, setWarehouses] = useState([
    {
        id: 1,
        warehouse_name: "",
        address: "",
        city: "",
        country: "",
        contact_name: "",
        contact_position: "",
        contact_phone: "",
        contact_email: "",
      }
  ]);

  useEffect(() => {
    const getWarehouseList = async () => {
        const response = await axios.get(
            `http://localhost:8080/`
        )
        setWarehouses(response.data);
    }
    getWarehouseList();
  },[])
  return (
    <div className="warehouse-list">
      <div className="warehouse-list__header">
        <h1 className="warehouse-list__title">Warehouses</h1>
        <form className="warehouse-list__form">
          <input
            className="warehouse-list__search"
            type="text"
            placeholder="Search..."
          ></input>
          <button className="warehouse-list__button" type="submit">
            + Add New Warehouse
          </button>
        </form>
      </div>
      <div className="warehouse-data">
        <div className="warehouse-data__labels">
          <h3 className="warehouse-data__label warehouse-data__warehouse">
            warehouse
            <img className="warehouse-data__sortIcon" src={sortIcon}></img>
          </h3>
          <h3 className="warehouse-data__label warehouse-data__address">
            address
            <img className="warehouse-data__sortIcon" src={sortIcon}></img>
          </h3>
          <h3 className="warehouse-data__label warehouse-data__contact-name">
            contact name
            <img className="warehouse-data__sortIcon" src={sortIcon}></img>
          </h3>
          <h3 className="warehouse-data__label warehouse-data__contact-info">
            contact information
            <img className="warehouse-data__sortIcon" src={sortIcon}></img>
          </h3>
          <h3 className="warehouse-data__label warehouse-data__actions">
            actions
          </h3>
        </div>
        {warehouses.map((warehouse, index) => {
          console.log(warehouse)
          return (
            <SingleWarehouse
              key={index}
              id={warehouse.id}
              warehouse={warehouse.warehouse_name}
              address={warehouse.address + ', ' + warehouse.city + ', ' + warehouse.country}
              contactName={warehouse.contact_name}
              contactInfo={warehouse.contact_phone + " " + warehouse.contact_email}
              setWarehouses={setWarehouses}
              warehouses={warehouses}
            />
          );
        })}
      </div>
    </div>
  );
}

export default WarehouseList;
