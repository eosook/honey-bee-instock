import "./EditWarehouse.scss";
import backArrow from "../../assets/icons/arrow_back-24px.svg";

export default function EditWarehouse(props) {
  const { values, setValues } = props;

  return (
    <section className="edit-warehouse">
      <div className="edit-warehouse__heading">
        <Link className="edit-warehouse__link" to={"/"}>
          <img
            className="edit-warehouse__icon"
            src={backArrow}
            alt="Blue back arrow"
          />
        </Link>
        <h1 className="edit-warehouse__title">Edit Warehouse</h1>
      </div>
      <EditWarehouse values={values} setValues={setValues} />
    </section>
  );
}
