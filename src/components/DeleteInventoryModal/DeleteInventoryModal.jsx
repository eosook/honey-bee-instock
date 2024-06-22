import { useNavigate } from 'react-router-dom'
import '../DeleteInventoryModal/DeleteInventoryModal.scss'
import axios from "axios"


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
            .then(navigate('/'))
            .catch(error => {
                console.error('There was an error!', error);
            });
    };


    return(
        <div onClick={onClose} className='delete-warehouse-modal'>
            <div onClick={(e) => {e.stopPropagation()}} className="delete-warehouse-modal__container">
                <div className='delete-warehouse-modal__close-container'>
                    <p onClick={onClose} className="delete-warehouse-modal__close">X</p>
                </div>
                <div className='delete-warehouse-modal__text-container'>
                    <h2 className='delete-warehouse-modal__header'>Delete {item} inventory?</h2>
                    <p className="delete-warehouse-modal__text">Please confirm that you’d like to delete {item} from the inventory list. You won’t be able to undo this action.</p>
                </div>                
                <div className='delete-warehouse-modal__button-container'>
                    <button onClick={onClose} className='delete-warehouse-modal__button delete-warehouse-modal__button--cancel'>Cancel</button>
                    <button onClick={handleClick} className='delete-warehouse-modal__button'>Delete</button>
                </div>
            </div>
        </div>
    )
}