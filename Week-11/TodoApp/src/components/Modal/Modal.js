import { useRef } from "react";
import "./Modal.scss"


const Modal = ({bgColor="",onSave,onDiscard})=>{
    const textAreaRef = useRef(null);
    return(
        <div className="modalBackground ">
            <div className={"modalContainer "+bgColor}>
                <textarea 
                ref={textAreaRef}
                placeholder="Write your notes here..."></textarea>
                <div className="modal-footer-section">
                <button onClick={()=>onDiscard()}>Discard</button>
                <button onClick={(event)=>onSave(textAreaRef.current.value)}>Save</button>
                </div>
            </div>
        </div>
    )
}
export default Modal;