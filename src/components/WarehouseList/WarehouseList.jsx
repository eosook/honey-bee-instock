import "./WarehouseList.scss";
import { useState, setState } from "react";
import SingleWarehouse from "../SingleWarehouse/SingleWarehouse";
import sortIcon from "../../assets/Icons/sort-24px.svg";

function WarehouseList() {
  const [warehouses, setWarehouses] = useState([
    {
      warehouse: "Manhatten",
      address: "503 Broadway, New York, USA",
      contactName: "Parmin Aujla",
      contactInfo: "+1 (629) 555-0129 paujla@instock.com",
    },
    {
      warehouse: "Washington",
      address: "33 Pearl Street SW, Washington, USA",
      contactName: "Graeme Lyon",
      contactInfo: "+1 (647) 504-0911 glyon@instock.com",
    },
    {
      warehouse: "Jersey",
      address: "300 Main Street, New Jersey, USA",
      contactName: "Brad MacDonald",
      contactInfo: "+1 (401) 377-2337 bmcdonald@instock.com",
    },
    {
      warehouse: "Manhatten",
      address: "503 Broadway, New York, USA",
      contactName: "Parmin Aujla",
      contactInfo: "+1 (629) 555-0129 paujla@instock.com",
    },
    {
      warehouse: "Washington",
      address: "33 Pearl Street SW, Washington, USA",
      contactName: "Graeme Lyon",
      contactInfo: "+1 (647) 504-0911 glyon@instock.com",
    },
    {
      warehouse: "Jersey",
      address: "300 Main Street, New Jersey, USA",
      contactName: "Brad MacDonald",
      contactInfo: "+1 (401) 377-2337 bmcdonald@instock.com",
    },
  ]);
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
          <h3 className="warehouse-data__label warehouse-data__actions">actions</h3>
        </div>
        {warehouses.map((warehouse, index) => {
          return (
            <SingleWarehouse
              key={index}
              warehouse={warehouse.warehouse}
              address={warehouse.address}
              contactName={warehouse.contactName}
              contactInfo={warehouse.contactInfo}
            />
          );
        })}
      </div>
    </div>
  );
}

export default WarehouseList;
