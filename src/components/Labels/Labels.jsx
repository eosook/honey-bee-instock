import sort from "../../assets/images/sort-24px.svg";
import "./Labels.scss";
const Labels = () => {
  return (
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
  );
};

export default Labels;
