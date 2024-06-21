import "./ListItem.scss";
import chevron from "../../assets/icons/chevron_right-24px.svg";
import del from "../../assets/icons/delete_outline-24px.svg";
import edit from "../../assets/icons/edit-24px.svg";
import { Link } from "react-router-dom";
import Labels from "../Labels/Labels";
import { useState } from "react";
import DeleteInventoryModal from "../DeleteInventoryModal/DeleteInventoryModal";

const ListItem = ({ item, itemData, warehouseName, setItemData, isWarehouse }) => {

  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  return (
    <>
      <div className="list">
        <div className="list-containers">
          <div className="list__ogitest-div1">
            <div className="list__ogitest-1">
              <div className="list-container">
                <Link
                  className="list-container-link"
                  to={`/inventory/${item.id}`}
                >
                  <h3 className="list__title--mobile">INVENTORY ITEM</h3>
                  <div className="list__sub-basement">
                    <p className="list-container-item">{item.item_name}</p>
                    <img
                      className="list-container-chev"
                      src={chevron}
                      alt="Chevron logo"
                    />
                  </div>
                </Link>
              </div>
              <div className="list-item-one">
                <h3 className="list__title--mobile">CATEGORY</h3>
                <p className="list__item-category">{item.category}</p>
              </div>
            </div>
            <div className="list__ogitest-2">
              <div className="list-item-two">
                <h3 className="list__title--mobile">STATUS</h3>
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
              <div className={` list-item-three ${
                  isWarehouse ? "list-item-quantity-warehouse" : ""
                }`}>
                <h3 className="list__title--mobile">QTY</h3>
                <p className="list-item-quantity">{item.quantity}</p>
              </div>
            </div>
          </div>

          <div className={`list__ogitest-3 ${
            isWarehouse ? "list-item-remove" : ""
          }`}>
            <h3 className="list__title--mobile">WAREHOUSE</h3>
            <p className="list-item-location">
              {warehouseName.warehouse_name}
            </p>
          </div>
          <div className="list-logo">
            <a href="#top" ><img onClick={() => setOpenDeleteModal(true)} className="list-logo-del" src={del} alt="Delete logo" /></a>
            <DeleteInventoryModal
              itemData={itemData}
              setItemData={setItemData}
              id={item.id}
              item={item.item_name}
              open={openDeleteModal}
              onClose={() => setOpenDeleteModal(false)}
            />
            <img className="list-logo-edit" src={edit} alt="Edit logo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ListItem;