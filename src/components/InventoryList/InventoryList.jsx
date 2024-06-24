import "./InventoryList.scss";
import search from "../../assets/icons/search-24px.svg";
import Category from "../../components/Category/Category";
import { useNavigate } from "react-router-dom";

const InventoryList = () => {
  const navigate = useNavigate();

  function click() {
    navigate("/add-inventory");
  }

  return (
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
              <button onClick={click} className="inventory-container-four--btn">
                + Add New Item
              </button>
            </div>
          </div>
        </div>
        <Category isWarehouse={false}/>
      </section>
    </main>
  );
};

export default InventoryList;
