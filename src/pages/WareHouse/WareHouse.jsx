import "./WareHouse.scss";
import WarehouseList from "../../components/WarehouseList/WarehouseList.jsx";
import WarehouseDetails from '../../components/WarehouseDetails/WarehouseDetails.jsx'

export default function Warehose() {
  return (
    <main className='main'>
      <WarehouseList />
      {/* <WarehouseDetails /> */}
    </main>
  )
}
