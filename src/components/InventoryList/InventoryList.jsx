import "./InventoryList.scss";
import search from "../../assets/icons/search-24px.svg";
import Category from "../../components/Category/Category";
const InventoryList = ({ itemData }) => {
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
              <button className="inventory-container-four--btn">
                + Add New Item
              </button>
            </div>
          </div>
        </div>
        <Category itemData={itemData} isWarehouse={false} />
      </section>
    </main>
  );
};

export default InventoryList;
