import "./ListItem.scss";
import chevron from "../../assets/icons/chevron_right-24px.svg";
import del from "../../assets/icons/delete_outline-24px.svg";
import edit from "../../assets/icons/edit-24px.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import DeleteInventoryModal from "../DeleteInventoryModal/DeleteInventoryModal";

const ListItem = ({
  item,
  itemData,
  warehouseName,
  setItemData,
  isWarehouse,
}) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  return (
    <div className="inventory-item">
      <div className="inventory-item__data-container">
        <div className="inventory-item__column">
          <div className="inventory-item__name">
            <h3 className="inventory-item__label">INVENTORY ITEM</h3>
            <Link
              className="inventory-item__link inventory-item__body"
              to={`/inventory/${item.id}`}
            >
              <p>{item.item_name}</p>
              <img
                className="inventory-item__chevron"
                src={chevron}
                alt="Chevron logo"
              />
            </Link>
          </div>
          <div className="inventory-item__category">
            <h3 className="inventory-item__label">CATEGORY</h3>
            <p className="inventory-item__body">{item.category}</p>
          </div>
        </div>
        <div className="inventory-item__column">
          <div className="inventory-item__status">
            <h3 className="inventory-item__label">STATUS</h3>
            <p
              className={`inventory-item__body inventory-item-status ${
                item.status === "Out of Stock"
                  ? "inventory-item-status-notstock"
                  : ""
              }`}
            >
              {item.status}
            </p>
          </div>
          <div className={`inventory-item__quantity ${
              isWarehouse ? "inventory-item__quantity-warehouse" : ""
            }`}>
            <h3 className="inventory-item__label">QTY</h3>
            <p className="inventory-item__body">{item.quantity}</p>
          </div>
          <div className={`inventory-item__warehouse ${
              isWarehouse ? "inventory-item__remove" : ""
            }`}>
            <h3 className="inventory-item__label">WAREHOUSE</h3>
            <p className="inventory-item__body">
              {warehouseName}
            </p>
          </div>
        </div>
      </div>
      <div className="inventory-item__logo">
        <a href="#top">
          <img
            onClick={() => setOpenDeleteModal(true)}
            className="inventory-item__del"
            src={del}
            alt="Delete logo"
          />
        </a>
        <DeleteInventoryModal
          itemData={itemData}
          setItemData={setItemData}
          id={item.id}
          item={item.item_name}
          open={openDeleteModal}
          onClose={() => setOpenDeleteModal(false)}
        />
        <Link to={`/inventory/edit/${item.id}`}>
          <img className="list-logo-edit" src={edit} alt="Edit logo" />
        </Link>
      </div>
    </div>
  );
};

export default ListItem;
