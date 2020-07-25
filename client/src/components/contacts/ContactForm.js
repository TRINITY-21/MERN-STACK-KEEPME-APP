import React, { useEffect, useState, useContext } from "react";
import ContactContext from "../../context/contact/contactContext";

const ContactForm = () => {
    const contactContext = useContext(ContactContext);

    const { addContact, current, clearCurrent, updateContact } = contactContext;

    useEffect(() => {
        if (current !== null) {
            setContact(current);
        } else {
            setContact({
                name: "",
                email: "",
                phone: "",
                type: "Friends",
            });
        }
    }, [contactContext, current]);

    const [contact, setContact] = useState({
        name: "",
        email: "",
        phone: "",
        type: "Friends",
    });

    const { name, email, phone, type } = contact;

    const onChange = (e) =>
        setContact({ ...contact, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        if (current === null) {
            addContact(contact);
        } else {
            updateContact(contact);
        }
        clearAll();
    };

    const clearAll = () => {
        clearCurrent();
    };

    return (
        <form className='form-container form-card' onSubmit={onSubmit}>
            <h2 className='text-primary'>
                {current ? "Edit Contact" : "Add Contact"}
            </h2>
            <input
                type='text'
                name='name'
                placeholder='Name'
                value={name}
                onChange={onChange}
            />
            <input
                type='email'
                name='email'
                placeholder='Email'
                value={email}
                onChange={onChange}
            />
            <input
                type='text'
                name='phone'
                placeholder='Phone'
                value={phone}
                onChange={onChange}
            />
            <h4>Contact Type:</h4>
            <input
                type='radio'
                name='type'
                value='Friends'
                checked={type === "Friends"}
                onChange={onChange}
            />{" "}
            Friends{" "}
            <input
                type='radio'
                name='type'
                value='Family'
                checked={type === "Family"}
                onChange={onChange}
            />{" "}
            Family{" "}
            <div>
                <input
                    type='submit'
                    value={current ? "Update Contact" : "Add Contact"}
                    className='btn btn-primary btn-block'
                />
            </div>
            {current && (
                <div>
                    <button
                        className='btn btn-light btn-block'
                        onClick={clearAll}
                    >
                        Clear
                    </button>
                </div>
            )}
        </form>
    );
};

export default ContactForm;
