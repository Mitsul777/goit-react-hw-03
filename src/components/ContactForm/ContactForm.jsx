import { Formik, Form, Field } from 'formik';
import { nanoid } from 'nanoid'
import styles from "./ContactForm.module.css";
import * as Yup from "yup";
import { ErrorMessage } from "formik";



const initialValues = {
    username: "",
    phone: ""
};

const ContactForm = () => {
    const nameFieldId = nanoid();
    const phoneFieldId = nanoid();
    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .min(3, "Username must be at least 3 characters")
            .max(50, "Username must be at most 50 characters")
            .required("Username is required"),
        phone: Yup.string().matches(/^\d{3}-\d{3}-\d{4}$/, "Invalid phone number format") // Перевірка формату номера телефону
    });
    const handleSubmit = (values, actions) => {
        console.log(values);
        actions.resetForm();
    };


    return (
        <div className={styles["form-container"]}>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
                <Form>
                    <div className={styles["form-group"]}>
                        <label htmlFor={nameFieldId} className={styles["label"]}>Name</label>
                        <Field type="text" name="username" id={nameFieldId} className={styles["input"]}  />
                        <ErrorMessage name="username" as="span" className={styles.errorMessage} />
                    </div>

                    <div className={styles["form-group"]}>
                        <label htmlFor={phoneFieldId} className={styles["label"]}>Number</label>
                        <Field type="phone" name="phone" id={phoneFieldId} className={styles["input"]} />
                        <ErrorMessage name="phone" as="span" className={styles.errorMessage} />
                    </div>

                    <button type="submit" className={styles["button"]}>Submit</button>
                </Form>
            </Formik>
        </div>
    );
};
export default ContactForm;
