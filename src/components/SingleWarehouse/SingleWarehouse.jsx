import "./SingleWarehouse.scss";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import chevronIcon from "../../assets/Icons/chevron_right-24px.svg";

function SingleWarehouse({ warehouse, address, contactName, contactInfo }) {
  return (
    <div className="warehouse">
      <div className="warehouse__info">
        <div className="warehouse--column">
          <div className="warehouse--section warehouse__city">
            <h3 className="warehouse--subheader">WAREHOUSE</h3>
            <p className="warehouse--body">
              <a className="warehouse__details" href="">
                {warehouse}
                <img className="warehouse__icon" src={chevronIcon}></img>
              </a>
            </p>
          </div>
          <div className="warehouse--section">
            <h3 className="warehouse--subheader">ADDRESS</h3>
            <p className="warehouse--body warehouse__address">{address}</p>
          </div>
        </div>
        <div className="warehouse--column">
          <div className="warehouse--section warehouse__contact-name">
            <h3 className="warehouse--subheader">CONTACT NAME</h3>
            <p className="warehouse--body">{contactName}</p>
          </div>
          <div className="warehouse--section">
            <h3 className="warehouse--subheader">CONTACT INFORMATION</h3>
            <p className="warehouse--body warehouse__contact-info">
              {contactInfo}
            </p>
          </div>
        </div>
      </div>
      <div className="warehouse-actions">
        <img className="warehouse-actions__icon" src={deleteIcon}></img>
        <img className="warehouse-actions__icon" src={editIcon}></img>
      </div>
    </div>
  );
}

export default SingleWarehouse;