import "./Category.scss";
import sort from "../../assets/images/sort-24px.svg";
import { Link } from "react-router-dom";
import chevron from "../../assets/images/chevron_right-24px.svg";
import del from "../../assets/images/delete_outline-24px.svg";
import edit from "../../assets/images/edit-24px.svg";
import ListItem from "../ListItem/ListItem";
const Category = ({ itemData }) => {
  return (
    <>
      <div className="category">
        <div className="category-containers">
          <div className="category-container">
            <div className="category-item">
              <h6 className="category-item-text">IVENTORY ITEM</h6>
              <img
                className="category-item-img category-sort-one"
                src={sort}
                alt={`${sort}logo`}
              />
              <div className="category-item-links">
                {itemData.splice(0, 8).map((item) => (
                  <div key={item.id}>
                    <p className="category-item-link-text category-mobile">
                      {item.item_name}
                    </p>
                    <p className="category-item-cat category-mobile">
                      {item.category}
                    </p>
                    <p className="category-item-stock category-mobile">
                      {item.status}
                    </p>
                    <p className="category-item-cat category-mobile">
                      {item.quantity}
                    </p>
                  </div>
                ))}
                <Link className="category-item-link" to="/">
                  <img
                    className="category-item-link-chev category-mobile"
                    src={chevron}
                    alt={`${chevron} logo`}
                  />
                </Link>
              </div>
              <div className="category-item-container">
                <h6 className="category-item-container--text">CATEGORY</h6>
                <img
                  className="category-item-img category-sort-two"
                  src={sort}
                  alt={`${sort}logo`}
                />
              </div>
              <div className="category-logo">
                <img
                  className="category-logo-del"
                  src={del}
                  alt={`${del} logo `}
                />
                <img
                  className="category-logo-edit"
                  src={edit}
                  alt={`${edit} logo `}
                />
              </div>
            </div>
            <div className="category-container-one">
              <div className="category-status">
                <h6 className="category-status-text">STATUS</h6>
                <img
                  className="category-item-img category-sort-three"
                  src={sort}
                  alt={`${sort}logo`}
                />
              </div>
              <div className="category-quantity">
                <h6 className="category-quantity-text">QTY</h6>
                <img
                  className="category-item-img category-sort-four"
                  src={sort}
                  alt={`${sort}logo`}
                />
              </div>
              <div className="category-warehouse">
                <h6 className="category-warehouse-text">WAREHOUSE</h6>
                <img
                  className="category-item-img category-sort-five"
                  src={sort}
                  alt={`${sort}logo`}
                />
                <p className="category-item-cat category-mobile">Manhattan</p>
              </div>
              <h6 className="category-warehouse-action">ACTIONS</h6>
            </div>
          </div>
          <ListItem itemData={itemData} />
        </div>
      </div>
    </>
  );
};

export default Category;
