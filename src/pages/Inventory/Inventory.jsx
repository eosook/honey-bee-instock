import "./Inventory.scss";
import search from "../../assets/images/search-24px.svg";
import Category from "../../components/Category/Category";
import InventoryDetails from "../../components/InventoryDetails/InventoryDetails";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

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
        <>
          <main className="inventory">
            <section className="inventory-containers">
              <div className="inventory-container">
                <div className="inventory-container-one">
                  <h1 className="inventory-container-one--text">Inventory</h1>
                </div>
                <div className="inventory-container-two">
                  <div className="inventory-container-three">
                    <input
                      className="inventory-container-three--search"
                      type="text"
                      placeholder="Search..."
                    />
                    <img
                      className="inventory-container-three-img"
                      src={search}
                      alt="Search logo"
                    />
                  </div>
                  <div className="inventory-container-four">
                    <button className="inventory-container-four--btn">
                      + Add New Item
                    </button>
                  </div>
                </div>
              </div>
              <Category itemData={itemData} warehouseData={warehouseData} />
            </section>
          </main>
        </>
      )}
    </>
  );
};

export default Inventory;
