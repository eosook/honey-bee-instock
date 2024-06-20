import "./WareHouse.scss";
import WarehouseList from "../../components/WarehouseList/WarehouseList";
import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Warehouse() {
  const [warehouses, setWarehouses] = useState([
    {
      id: null,
      warehouse_name: "",
      address: "",
      city: "",
      country: "",
      contact_name: "",
      contact_position: "",
      contact_phone: "",
      contact_email: "",
    },
  ]);
  const [currentWarehouse, setCurrentWarehouse] = useState([
    {
      id: null,
      warehouse_name: "",
      address: "",
      city: "",
      country: "",
      contact_name: "",
      contact_position: "",
      contact_phone: "",
      contact_email: "",
    },
  ]);
  const { warehouseId } = useParams();

  useEffect(() => {
    const getWarehouseList = async () => {
      const response = await axios.get(`http://localhost:8080/`);
      setWarehouses(response.data);
    };
    getWarehouseList();
  }, []); //added an empty dependency array to terminate an infinite loop
  useEffect(() => {
    if (warehouseId) {
      const getSingleWarehouse = async () => {
        const response = await axios.get(
          `http://localhost:8080/warehouse/${warehouseId}`
        );
        setCurrentWarehouse(response.data);
      };
      getSingleWarehouse();
    }
  });

  if (warehouseId) {
    return (
      <main className="main">
        <WarehouseDetails warehouse={currentWarehouse[0]} />
      </main>
    );
  } else {
    return (
      <main className="main">
        <WarehouseList warehouses={warehouses} />
      </main>
    );
  }
}
