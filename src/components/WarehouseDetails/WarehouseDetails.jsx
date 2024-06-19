import './WarehouseDetails.scss'
import backArrow from '../../assets/Icons/arrow_back-24px.svg'
import edit from '../../assets/Icons/edit-24px.svg'


export default function WarehouseDetails() {

    return (
        <section className="warehouse">
            <div className="warehouse__title-container">
                <div className='warehouse__title-subcontainer'>                
                    <img src={backArrow} alt="back arrow" className="warehouse__back" />
                    <h1 className="warehouse__title">Washington</h1>
                </div>
                <button className="warehouse__edit">
                    <img src={edit} alt="edit" className='warehouse__icon' />
                </button>
            </div>
            <div className="warehouse__details">
                <div className="warehouse__location">
                    <p className="warehouse__label">WAREHOUSE ADDRESS:</p>
                    <p className="warehouse__address">33 Pearl Street SW, Washington, USA</p>
                </div>
                <div className="warehouse__contact-container">
                    <div className="warehouse__contact-name">
                        <p className="warehouse__label">CONTACT NAME:</p>
                        <p className="warehouse__contact">Grame Lyon</p>
                        <p className="warehouse__contact">Warehouse Manager</p>
                    </div>
                    <div className="warehouse__contact-info">
                        <p className="warehouse__label">CONTACT INFORMATION:</p>
                        <p className="warehouse__contact">+1 (647) 504-0911</p>
                        <p className="warehouse__contact">glyon@instock.com</p></div>
                </div>
            </div>
        </section>
    )
}