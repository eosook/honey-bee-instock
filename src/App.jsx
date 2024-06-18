import { BrowserRouter, Routes, Route } from "react-router-dom";
import WareHouse from "./pages/Warehouse/Warehouse";
import Inventory from "./pages/Inventory/Inventory";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WareHouse />}></Route>
          <Route path="/warehouse/:id" element={<WareHouse />}></Route>
          <Route path="/inventory" element={<Inventory />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
