import { useNavigate } from 'react-router-dom'
import '../DeleteInventoryModal/DeleteInventoryModal.scss'
import axios from "axios"
import closeIcon from '../../assets/icons/close-24px.svg'

export default function DeleteInventoryModal({open, onClose, item, id, itemData, setItemData }) {
    const navigate = useNavigate()

    if(!open) return null
    

    function handleClick(){
        deleteWarehouse()
        resetState()
        onClose()
    }

    function resetState(){
        const newItemsList = itemData.filter((items) => {
            return items.id !== id })
        setItemData(newItemsList)   
    }

    async function deleteWarehouse() {
        
        await axios.delete(`http://localhost:8080/inventory/${id}`)
            .then(response => console.log('Delete successful'))
            .then(navigate(-1))
            .catch(error => {
                console.error('There was an error!', error);
            });
    };


    return(
        <div onClick={onClose} className='delete-inventory-modal'>
            <div onClick={(e) => {e.stopPropagation()}} className="delete-inventory-modal__container">
                <div className='delete-inventory-modal__close-container'>
                    <a onClick={onClose} className="delete-inventory-modal__close"><img src={closeIcon}></img></a>
                </div>
                <div className='delete-inventory-modal__text-container'>
                    <h2 className='delete-inventory-modal__header'>Delete {item} inventory?</h2>
                    <p className="delete-inventory-modal__text">Please confirm that you’d like to delete {item} from the inventory list. You won’t be able to undo this action.</p>
                </div>                
                <div className='delete-inventory-modal__button-container'>
                    <button onClick={onClose} className='delete-inventory-modal__button delete-inventory-modal__button--cancel'>Cancel</button>
                    <button onClick={handleClick} className='delete-inventory-modal__button'>Delete</button>
                </div>
            </div>
        </div>
    )
}