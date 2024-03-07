import Contact from "../Contact/Contact.jsx";
import styles from '../ContactList/ContactList.module.css';

function ContactList({ contacts, onDelete }) {
    return (
        <div>
            <ul className={styles["contact-list"]}>
                {contacts.map((contact) => (
                    <li key={contact.id} className={styles["contact-item"]}>
                        <Contact data={contact} onDelete={onDelete} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ContactList;