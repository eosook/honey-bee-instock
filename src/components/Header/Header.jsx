import { useNavigate, useLocation } from 'react-router-dom'
import logo from '../../assets/Logo/InStock-Logo.svg'
import './Header.scss'
import Button from '../Button/Button'

// created routes for warehouse and inventory,
// not sure if these will be final routes so not adding them to app.
// created button component so we can reuse it later
// created onClick functions that use useNavigate to route to respective pages
//button takes active as a prop which is equal to the pathname that we are setting using useLocation

export default function Header() {
  const navigate = useNavigate()
  const location = useLocation()

  function warehouseClick() {
    navigate('/')
  }

  function inventoryClick() {
    navigate('/inventory')
  }
  return (
    <header className='header'>
      <div className='header__logo-container'>
        <img className='header__logo' src={logo} alt='InStock logo' />
      </div>
      <nav className='header__nav'>
        <Button
          text='Warehouses'
          onClick={warehouseClick}
          active={location.pathname === '/'}
        />
        <Button
          text='Inventory'
          onClick={inventoryClick}
          active={location.pathname === '/inventory'}
        />
      </nav>
    </header>
  )
}
