import InventoryDetails from "../../components/InventoryDetails/InventoryDetails";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import InventoryList from "../../components/InventoryList/InventoryList";
const Inventory = () => {
  const { id } = useParams();
  const [itemData, setItemData] = useState([]);
  const [itemDataDetails, setItemDataDetails] = useState(null);
  const [warehouseData, setWarehouseData] = useState([]);
  const [warehouseDetails, setWarehouseDetails] = useState([]);
  const base_URL = import.meta.env.VITE_API_URL;
  useEffect(() => {
    const getItem = async () => {
      try {
        const response = await axios.get(`${base_URL}/inventory`);
        setItemData(response.data);
      } catch (error) {
        console.error("Error fetching items: 🚛🚛🚛", error);
      }
    };
    const getWarehouse = async () => {
      try {
        const res = await axios.get(`${base_URL}/warehouse`);
        setWarehouseData(res.data);
      } catch (error) {
        console.error("Error fetching warehouses: 🚛🚛🚛", error);
      }
    };
    const getItemDetails = async () => {
      try {
        const response = await axios.get(`${base_URL}/inventory/${id}`);
        setItemDataDetails(response.data);
      } catch (error) {
        console.error("Error fetching item details: 🚛🚛🚛", error);
      }
    };
    const getWarehouseDetails = async () => {
      try {
        const response = await axios.get(`${base_URL}/warehouse/${id}`);
        setWarehouseDetails(response.data);
      } catch (error) {
        console.error("Error fetching item details: 🚛🚛🚛", error);
      }
    };

    if (id) {
      getItemDetails(id);
      getWarehouseDetails(id);
    } else {
      getWarehouse();
      getItem();
    }
  }, [id, base_URL]);
  return (
    <>
      {id ? (
        itemDataDetails && (
          <InventoryDetails
            itemDataDetails={itemDataDetails}
            warehouseDetails={warehouseDetails}
          />
        )
      ) : (
        <InventoryList itemData={itemData} warehouseData={warehouseData} />
      )}
    </>
  );
};

export default Inventory;
