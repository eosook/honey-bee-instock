import "./ListItem.scss";
import chevron from "../../assets/icons/chevron_right-24px.svg";
import del from "../../assets/icons/delete_outline-24px.svg";
import edit from "../../assets/icons/edit-24px.svg";
import { Link } from "react-router-dom";
import Labels from "../Labels/Labels";
const ListItem = ({ itemData }) => {
  return (
    <>
      <Labels />
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
              <p
                className={`list-item-status ${
                  item.status === "Out of Stock"
                    ? "list-item-status-notstock"
                    : ""
                }`}
              >
                {item.status}
              </p>
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
