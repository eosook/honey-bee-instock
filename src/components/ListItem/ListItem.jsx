import './ListItem.scss'
import chevron from '../../assets/images/chevron_right-24px.svg'
import del from '../../assets/images/delete_outline-24px.svg'
import edit from '../../assets/images/edit-24px.svg'
import { Link } from 'react-router-dom'
const ListItem = () => {
  return (
    <>
      <div className='list'>
        <div className='list-containers'>
          <div className='list-container'>
            <Link className='list-container-link' to='/'>
              <p className='list-container-item'>Television</p>
              <img
                className='list-container-chev'
                src={chevron}
                alt={`${chevron} logo`}
              />
            </Link>
          </div>
          <p className='list-item-category'>Electronics</p>
          <p className='list-item-status'>Instock</p>
          <p className='list-item-quantity'>500</p>
          <p className='list-item-location'>Manhattan</p>
          <div className='list-logo'>
            <img className='list-logo-del' src={del} alt={`${del} logo `} />
            <img className='list-logo-edit' src={edit} alt={`${edit} logo `} />
          </div>
        </div>
      </div>
    </>
  )
}

export default ListItem
