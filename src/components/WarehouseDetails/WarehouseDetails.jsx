import './WarehouseDetails.scss'
import backArrow from '../../assets/Icons/arrow_back-24px.svg'
import edit from '../../assets/Icons/edit-24px.svg'


export default function WarehouseDetails() {

    return (
        <section className="warehouse-details">
            <div className="warehouse-details__title-container">
                <div className='warehouse-details__title-subcontainer'>                
                    <img src={backArrow} alt="back arrow" className="warehouse-details__back" />
                    <h1 className="warehouse-details__title">Washington</h1>
                </div>
                <button className="warehouse-details__edit">
                    <img src={edit} alt="edit" className='warehouse-details__icon' />
                </button>
            </div>
            <div className="warehouse-details__details">
                <div className="warehouse-details__location">
                    <p className="warehouse-details__label">WAREHOUSE ADDRESS:</p>
                    <p className="warehouse-details__address">33 Pearl Street SW, Washington, USA</p>
                </div>
                <div className="warehouse-details__contact-container">
                    <div className="warehouse-details__contact-name">
                        <p className="warehouse-details__label">CONTACT NAME:</p>
                        <p className="warehouse-details__contact">Grame Lyon</p>
                        <p className="warehouse-details__contact">Warehouse Manager</p>
                    </div>
                    <div className="warehouse-details__contact-info">
                        <p className="warehouse-details__label">CONTACT INFORMATION:</p>
                        <p className="warehouse-details__contact">+1 (647) 504-0911</p>
                        <p className="warehouse-details__contact">glyon@instock.com</p></div>
                </div>
            </div>
        </section>
    )
}