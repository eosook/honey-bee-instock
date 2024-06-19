import "./SingleWarehouse.scss";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import chevronIcon from "../../assets/Icons/chevron_right-24px.svg";
import { Link } from "react-router-dom";

function SingleWarehouse({ id, warehouse, address, contactName, contactInfo }) {
  return (
    <div className="single-warehouse">
      <div className="single-warehouse__info">
        <div className="single-warehouse--column">
          <div className="single-warehouse--section single-warehouse__city">
            <h3 className="single-warehouse--subheader">WAREHOUSE</h3>
            <Link to={`/warehouse/${id}`}>
            <p className="single-warehouse--body single-warehouse__details">
                {warehouse}
                <img className="single-warehouse__icon" src={chevronIcon}></img>
            </p>
            </Link>
          </div>
          <div className="single-warehouse--section">
            <h3 className="single-warehouse--subheader">ADDRESS</h3>
            <p className="single-warehouse--body single-warehouse__address">{address}</p>
          </div>
        </div>
        <div className="single-warehouse--column">
          <div className="single-warehouse--section single-warehouse__contact-name">
            <h3 className="single-warehouse--subheader">CONTACT NAME</h3>
            <p className="single-warehouse--body">{contactName}</p>
          </div>
          <div className="single-warehouse--section">
            <h3 className="single-warehouse--subheader">CONTACT INFORMATION</h3>
            <p className="single-warehouse--body single-warehouse__contact-info">
              {contactInfo}
            </p>
          </div>
        </div>
      </div>
      <div className="single-warehouse-actions">
        <img className="single-warehouse-actions__icon" src={deleteIcon}></img>
        <img className="single-warehouse-actions__icon" src={editIcon}></img>
      </div>
    </div>
  );
}

export default SingleWarehouse;
