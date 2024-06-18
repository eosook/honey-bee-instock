import "./Warehouse.scss";
import WarehouseList from "../../components/WarehouseList/WarehouseList";
import WarehouseDetails from '../../components/WarehouseDetails/WarehouseDetails'

export default function Warehose() {
  return (
    <main className='main'>
      <WarehouseList/>
      <WarehouseDetails />
    </main>
  )
}
