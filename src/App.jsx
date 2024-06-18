import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './componenets/Header/Header'
import Warehouses from './pages/Warehouses/Warehouses'
import Inventory from './pages/Inventory/Inventory'
function App() {

  return (
    <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Warehouses />} />
      <Route path="/warehouses" element={<Warehouses />} />
      <Route path="/inventory" element={<Inventory />} />
    </Routes>
  </Router>
  )
}

export default App
