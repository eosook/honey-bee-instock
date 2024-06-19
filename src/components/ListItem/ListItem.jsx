import "./ListItem.scss";
import chevron from "../../assets/images/chevron_right-24px.svg";
import del from "../../assets/images/delete_outline-24px.svg";
import edit from "../../assets/images/edit-24px.svg";
import { Link } from "react-router-dom";
import sort from "../../assets/images/sort-24px.svg";

const ListItem = ({ itemData }) => {
  return (
    <>
      <nav>
        <div className="nav">
          <h6>INVENTORY ITEM</h6>
          <img className="nav-inv-one" src={sort} alt="Sort logo" />
          <h6>CATEGORY</h6>
          <img className="nav-inv-two" src={sort} alt="Sort logo" />
          <h6>STATUS</h6>
          <img className="nav-inv-three" src={sort} alt="Sort logo" />
          <h6 className="nav-quantity">QTY</h6>
          <img className="nav-inv-four" src={sort} alt="Sort logo" />
          <h6>WAREHOUSE</h6>
          <img className="nav-inv-five" src={sort} alt="Sort logo" />
          <h6>ACTIONS</h6>
        </div>
      </nav>
      {itemData.slice(0, 8).map((item) => (
        <div className="list" key={item.id}>
          <div className="list-containers">
            <div className="list-container">
              <Link className="list-container-link" to="/">
                <p className="list-container-item">{item.item_name}</p>
                <img
                  className="list-container-chev"
                  src={chevron}
                  alt="Chevron logo"
                />
              </Link>
            </div>
            <div className="list-item-one">
              <p className="list-item-category">{item.category}</p>
            </div>
            <div className="list-item-two">
              <p className="list-item-status">{item.status}</p>
            </div>
            <div className="list-item-three">
              <p className="list-item-quantity">{item.quantity}</p>
            </div>
            <div className="list-item-four">
              <p className="list-item-location">Manhattan</p>
            </div>
            <div className="list-logo">
              <img className="list-logo-del" src={del} alt="Delete logo" />
              <img className="list-logo-edit" src={edit} alt="Edit logo" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ListItem;
