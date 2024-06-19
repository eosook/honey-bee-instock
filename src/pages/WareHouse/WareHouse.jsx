import "./WareHouse.scss";
import WarehouseList from "../../components/WarehouseList/WarehouseList";
import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";
export default function Warehouse() {
  return (
    <main className="main">
      <WarehouseList />
      <WarehouseDetails />
    </main>
  );
}
