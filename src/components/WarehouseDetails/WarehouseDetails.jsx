import "./WarehouseDetails.scss";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import edit from "../../assets/Icons/edit-24px.svg";
import Category from "../Category/Category";
import sortIcon from "../../assets/Icons/sort-24px.svg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import ListItem from "../ListItem/ListItem";

export default function WarehouseDetails({ warehouse }) {
  const [warehouseInventory, setWarehouseInventory] = useState([]);

  useEffect(() => {
    const getInventory = async () => {
      const response = await axios.get(
        `http://localhost:8080/warehouse/${warehouse.id}/inventories`
      );
      setWarehouseInventory(response.data);
    };
    getInventory();
  });
  return (
    <section className="warehouse-details">
      <div className="warehouse-details__title-container">
        <div className="warehouse-details__title-subcontainer">
          <Link to="/">
            <img
              src={backArrow}
              alt="back arrow"
              className="warehouse-details__back"
            />
          </Link>
          <h1 className="warehouse-details__title">
            {warehouse.warehouse_name}
          </h1>
        </div>
        <button className="warehouse-details__edit">
          <img src={edit} alt="edit" className="warehouse-details__icon" />
        </button>
      </div>
      <div className="warehouse-details__details">
        <div className="warehouse-details__location">
          <p className="warehouse-details__label">WAREHOUSE ADDRESS:</p>
          <p className="warehouse-details__address">
            {warehouse.address +
              ", " +
              warehouse.city +
              ", " +
              warehouse.country}
          </p>
        </div>
        <div className="warehouse-details__contact-container">
          <div className="warehouse-details__contact-name">
            <p className="warehouse-details__label">CONTACT NAME:</p>
            <p className="warehouse-details__contact">
              {warehouse.contact_name}
            </p>
            <p className="warehouse-details__contact">
              {warehouse.contact_position}
            </p>
          </div>
          <div className="warehouse-details__contact-info">
            <p className="warehouse-details__label">CONTACT INFORMATION:</p>
            <p className="warehouse-details__contact">
              {warehouse.contact_phone}
            </p>
            <p className="warehouse-details__contact">
              {warehouse.contact_email}
            </p>
          </div>
        </div>
      </div>
      <div className="warehouse-details__list">
        <Category itemData={warehouseInventory} isWarehouse={true}/>
      </div>
    </section>
  );
}
