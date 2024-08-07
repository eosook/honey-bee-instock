import InventoryDetails from "../../components/InventoryDetails/InventoryDetails";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import InventoryList from "../../components/InventoryList/InventoryList";
const Inventory = () => {
  const { id } = useParams();
  const [itemDataDetails, setItemDataDetails] = useState(null);
  const [warehouseDetails, setWarehouseDetails] = useState([]);
  const base_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
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
        const response = await axios.get(`${base_URL}/warehouse`);
        setWarehouseDetails(response.data);
      } catch (error) {
        console.error("Error fetching item details: 🚛🚛🚛", error);
      }
    };
    if (id) {
      getItemDetails();
      getWarehouseDetails();
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
        <InventoryList />
      )}
    </>
  );
};

export default Inventory;
