import styles from './Contact.module.css';
import { FaUser, FaPhone } from 'react-icons/fa';
function Contact({ data: { id, name, number }, onDelete }) {
    return (
        <div className={styles["contact-item"]}>
            <div className={styles["contact-info"]}>
                <p><FaUser />{name}</p>
                <p><FaPhone />{number}</p>
            </div>
            <button onClick={() => onDelete(id)}>Delete</button>
        </div>
    );
}

export default Contact;