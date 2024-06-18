import "./SingleWarehouse.scss";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";

function SingleWarehouse({ warehouse, address, contactName, contactInfo }) {
  return (
    <div className="warehouse">
      <div className="warehouse__info">
        <div className="warehouse--column">
          <div className="warehouse__city warehouse--section">
            <h3 className="warehouse--subheader">WAREHOUSE</h3>
            <p className="warehouse--body">
              <a href="">{warehouse}</a>
            </p>
          </div>
          <div className="warehouse__address warehouse--section">
            <h3 className="warehouse--subheader">ADDRESS</h3>
            <p className="warehouse--body">{address}</p>
          </div>
        </div>
        <div className="warehouse--column">
          <div className="warehouse__contact-name warehouse--section">
            <h3 className="warehouse--subheader">CONTACT NAME</h3>
            <p className="warehouse--body">{contactName}</p>
          </div>
          <div className="warehouse__contact-info warehouse--section">
            <h3 className="warehouse--subheader">CONTACT INFORMATION</h3>
            <p className="warehouse--body">{contactInfo}</p>
          </div>
        </div>
      </div>
      <div className="warehouse__clickable">
        <img className="warehouse__delete" src={deleteIcon}></img>
        <img className="warehouse__edit" src={editIcon}></img>
      </div>
    </div>
  );
}

export default SingleWarehouse;
