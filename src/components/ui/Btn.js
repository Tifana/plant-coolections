import { useState } from 'react/cjs/react.development'
import Backdrop from './Backdrop'
import classes from './Btn.module.css'
import Modal from './Modal'

function Btn() {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    
    function btnHandler() {
        setModalIsOpen(true)
    }

    function closeHandler() {
        setModalIsOpen(false)
    }

    return (
        <div>
            <div>
                <button className={classes.btn} onClick={btnHandler}>'Click here'</button>
            </div>
            {modalIsOpen && <Modal />}
            {modalIsOpen && <Backdrop onCancel={closeHandler} />}
        </div>
    )
    
}

export default Btn