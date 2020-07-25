import React, { useContext } from "react";
import PropTypes from "prop-types";
import ContactContext from "../../context/contact/contactContext";

const ContactItem = ({ contact }) => {
    const contactContext = useContext(ContactContext);
    const { deleteContact, setCurrent, clearCurrent } = contactContext;

    const { _id, name, email, phone, type } = contact;

    const onDelete = () => {
        deleteContact(_id);
        clearCurrent();
    };

    return (
        <div className='contact-item card bg-light'>
            <h3 className='text-primary text-left'>
                {name}{" "}
                <span
                    style={{ float: "right" }}
                    className={
                        "badge " +
                        (type === "Family"
                            ? "badge-success"
                            : "badge-primary")
                    }
                >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                </span>
            </h3>
            <ul className='list'>
                {email && (
                    <li>
                        <i className='fas fa-envelope'></i> {email}
                    </li>
                )}
                {phone && (
                    <li>
                        <i className='fas fa-phone'></i> {phone}
                    </li>
                )}
            </ul>
            <p className='contact-item-btns'>
                <button
                    className='btn btn-dark btn-sm'
                    onClick={() => setCurrent(contact)}
                >
                    Edit
                    <i className='fas fa-user-edit'></i>
                </button>
                <button className='btn btn-danger btn-sm' onClick={onDelete}>
                    Delete
                    <i className='fas fa-user-times'></i>
                </button>
            </p>
        </div>
    );
};

ContactItem.propTypes = {
    contact: PropTypes.object.isRequired,
};

export default ContactItem;
