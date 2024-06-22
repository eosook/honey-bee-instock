import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import WareHouse from "./pages/WareHouse/WareHouse";
import Inventory from "./pages/Inventory/Inventory";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AddWarehouse from "./components/AddWarehouse/AddWarehouse";
import EditInventory from "./components/EditInventory/EditInventory";
import EditWarehouse from "./components/EditWarehouse/EditWarehouse";

function App() {
  const initialValues = {
    warehouse_name: "",
    address: "",
    city: "",
    country: "",
    contact_name: "",
    contact_position: "",
    contact_phone: "",
    contact_email: "",
  };
  const [values, setValues] = useState(initialValues);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<WareHouse />}></Route>
          <Route path="/warehouse/:warehouseId" element={<WareHouse />}></Route>
          <Route
            path="/add-warehouse"
            element={<AddWarehouse values={values} setValues={setValues} />}
          ></Route>
          <Route
            path="/edit-warehouse"
            element={<EditWarehouse values={values} setValues={setValues} />}
          ></Route>
          <Route path="/inventory" element={<Inventory />}></Route>
          <Route path="/inventory/:id" element={<Inventory />}></Route>
          <Route path="/inventory/edit/:id" element={<EditInventory />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
