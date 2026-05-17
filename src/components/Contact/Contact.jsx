import css from "./Contact.module.css"
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

const Contact = ({ data: {id, name, number}}) => {
    const dispatch = useDispatch();

    const onDelete = (id) => {
        dispatch(deleteContact(id))
    }

    return(
        <>
        <div className={css.contact}>
            
            <p className={css.contact__name}><IoPerson className={css.contact__icon} />{name}</p>
            <p className={css.contact__number}><FaPhone className={css.contact__icon} />{number}</p>
        </div>
        <button className={css.contact__delete} onClick={() => onDelete(id)}>Delete</button>
        </>
        
    )
}
export default Contact;