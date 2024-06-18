import { BrowserRouter, Routes, Route } from "react-router-dom";
import WareHouse from "./pages/WareHouse/WareHouse";
import Inventory from "./pages/Inventory/Inventory";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Header from "./componenets/Header/Header";
import './App.scss'
import Footer from "./componenets/Footer/Footer";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<WareHouse />}></Route>
          <Route path="/warehouse/:id" element={<WareHouse />}></Route>
          <Route path="/inventory" element={<Inventory />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
