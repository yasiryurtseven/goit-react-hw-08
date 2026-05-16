import Contact from "../Contact/Contact.jsx"
import { useSelector } from "react-redux"
import { selectFilteredContacts } from "../../redux/contacts/selectors.js"
import css from "./ContactList.module.css"


const ContactList = () => {
    const visibleContacts = useSelector(selectFilteredContacts);


    return (
        <div className={css.contactListContainer}>
            <ul className={css.contactList}>
                {visibleContacts.map((contact) => (
                    <li className={css.contactList__item} key={contact.id}>
                        <Contact data={contact}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default ContactList;