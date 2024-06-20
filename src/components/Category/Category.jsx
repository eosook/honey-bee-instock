import "./Category.scss";
import sort from "../../assets/images/sort-24px.svg";
import { Link } from "react-router-dom";
import chevron from "../../assets/images/chevron_right-24px.svg";
import del from "../../assets/images/delete_outline-24px.svg";
import edit from "../../assets/images/edit-24px.svg";
import ListItem from "../ListItem/ListItem";
const Category = ({ itemData, isWarehouse }) => {
  return (
    <>
      {itemData.map((item) => (
        <div className="category" key={item.id}>
          <div className="category-containers">
            <div className="category-container">
              <div className="category-item">
                <h6 className="category-item-text">INVENTORY ITEM</h6>
                <img
                  className="category-item-img category-sort-one"
                  src={sort}
                  alt="Sort logo"
                />
                <div className="category-item-links">
                  <Link className="category-item-link" to="/">
                    <p className="category-item-link-text category-mobile">
                      {item.item_name}
                    </p>
                    <img
                      className="category-item-link-chev category-mobile"
                      src={chevron}
                      alt="Chevron logo"
                    />
                  </Link>
                </div>
                <div className="category-item-container">
                  <h6 className="category-item-container--text">CATEGORY</h6>
                  <img
                    className="category-item-img category-sort-two"
                    src={sort}
                    alt="Sort logo"
                  />
                  <p className="category-item-cat category-mobile">
                    {item.category}
                  </p>
                </div>
                <div className="category-logo">
                  <img
                    className="category-logo-del"
                    src={del}
                    alt="Delete logo"
                  />
                  <img
                    className="category-logo-edit"
                    src={edit}
                    alt="Edit logo"
                  />
                </div>
              </div>
              <div className="category-container-one">
                <div className="category-status">
                  <h6 className="category-status-text">STATUS</h6>
                  <img
                    className="category-item-img category-sort-three"
                    src={sort}
                    alt="Sort logo"
                  />
                  <p
                    className={`category-item-stock ${
                      item.status === "Out of Stock"
                        ? "category-item-stock-notstock"
                        : ""
                    }`}
                  >
                    {item.status}
                  </p>
                </div>
                <div className="category-quantity">
                  <h6 className="category-quantity-text">QTY</h6>
                  <img
                    className="category-item-img category-sort-four"
                    src={sort}
                    alt="Sort logo"
                  />
                  <p className="category-item-cat category-mobile">
                    {item.quantity}
                  </p>
                </div>
                <div
                  className={`category-warehouse ${
                    isWarehouse ? "category-warehouse__remove" : ""
                  }`}
                >
                  <h6 className="category-warehouse-text">WAREHOUSE</h6>
                  <img
                    className="category-item-img category-sort-five"
                    src={sort}
                    alt="Sort logo"
                  />
                  <p className="category-item-cat category-mobile">Manhattan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <nav>
        <div className="nav">
          <div className="nav-inv nav-inv__inventory">
            <h6 className="nav-inv__label">INVENTORY ITEM</h6>
            <img className="nav__sort-logo" src={sort} alt="Sort logo" />
          </div>
          <div className="nav-inv nav-inv__category">
            <h6 className="nav-inv__label">CATEGORY</h6>
            <img className="nav__sort-logo" src={sort} alt="Sort logo" />
          </div>
          <div className={`nav-inv ${isWarehouse ? "nav-inv__status-warehouse" : "nav-inv__status"}`}>
            <h6 className="nav-inv__label">STATUS</h6>
            <img className="nav__sort-logo" src={sort} alt="Sort logo" />
          </div>
          <div className="nav-inv nav-inv__quantity">
            <h6 className="nav-inv__label">{isWarehouse ? "QUANTITY" : "QTY"}</h6>
            <img className="nav__sort-logo" src={sort} alt="Sort logo" />
          </div>
          <div className={`nav-inv ${isWarehouse ? "nav-inv__remove" : ""}`}>
            <h6  className="nav-inv__label">WAREHOUSE</h6>
            <img
              className="nav__sort-logo"
              src={sort}
              alt="Sort logo"
            />
          </div>
          <div className="nav-inv nav-inv__actions">
            <h6 className="nav-inv__label">ACTIONS</h6>
          </div>
        </div>
      </nav>
      <ListItem itemData={itemData} isWarehouse={isWarehouse} />
    </>
  );
};
export default Category;
