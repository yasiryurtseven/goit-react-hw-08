import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { useId } from "react";
import * as Yup from "yup"
import css from "./ContactForm.module.css"


const ContactForm = () => {
    const nameFieldId = useId();
    const numberFieldId = useId();

    const dispatch = useDispatch();

    const handleSubmit = (contact) => {
        dispatch(addContact(contact));
    };

    return (
        <Formik initialValues={{ name: "", number: ""}} 
        onSubmit={(values, actions) => {
            handleSubmit(values);
            actions.resetForm();
        }} 
        validationSchema={userSchema}>
            <Form className={css.contactForm}>
                
                <label className={css.label} htmlFor={nameFieldId}>Name</label>
                <Field className={css.field} name="name" id={nameFieldId} autoComplete="on" />
                <ErrorMessage name="name" component="div" className={css.error} />
                
                <label className={css.label} htmlFor={numberFieldId}>Number</label>
                <Field className={css.field} name="number" id={numberFieldId} autoComplete="on" />
                <ErrorMessage name="number" component="div" className={css.error} />

                <button className={css.formButton} type="submit">Add Contact</button>
            </Form>
        </Formik>
        )
};

const userSchema = Yup.object().shape({
    name: Yup.string()
    .min(3, "Dostum gerçekten böyle bir isim olmadığını ikimiz de biliyoruz!")
    .max(50, "Hangi kabiledensin hahahahaha!")
    .required("Name is required"),
    number: Yup.string()
    .min(5, "Kimi aramayı düşünüyorsun?")
    .max(15, "Kankaa beni kandıramazsın!")
    .required("Number is required")
}) 

export default ContactForm;