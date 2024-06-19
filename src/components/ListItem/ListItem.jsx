import "./ListItem.scss";
import chevron from "../../assets/images/chevron_right-24px.svg";
import del from "../../assets/images/delete_outline-24px.svg";
import edit from "../../assets/images/edit-24px.svg";
import { Link } from "react-router-dom";

const ListItem = ({ itemData }) => {
  return (
    <>
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
            <p className="list-item-category">{item.category}</p>
            <p className="list-item-status">{item.status}</p>
            <p className="list-item-quantity">{item.quantity}</p>
            <p className="list-item-location">Manhattan</p>
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
