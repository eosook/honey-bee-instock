import "./Inventory.scss";
import search from "../../assets/images/search-24px.svg";
import Category from "../../components/Category/Category";
import { useState, useEffect } from "react";
import axios from "axios";
const Inventory = () => {
  const [itemData, setItemData] = useState([]);
  const base_URL = import.meta.env.VITE_API_URL;
  useEffect(() => {
    const getItem = async () => {
      try {
        const response = await axios.get(`${base_URL}/inventory/inventory`);
        setItemData(response.data);
      } catch (error) {
        console.error("Error fetching items: 🚛🚛🚛", error);
      }
    };

    getItem();
  }, []);
  return (
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
                  alt={`${search} logo`}
                />
              </div>
              <div className="inventory-container-four">
                <button className="inventory-container-four--btn">
                  + Add New Item
                </button>
              </div>
            </div>
          </div>
          <Category itemData={itemData} isWarehouse={false}/>
        </section>
      </main>
    </>
  );
};

export default Inventory;
