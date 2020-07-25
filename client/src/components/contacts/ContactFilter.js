import React, { useContext, useRef, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";

const ContactFilter = () => {
    const contactContext = useContext(ContactContext);

    const text = useRef("");

    useEffect(() => {
        if (contactContext.filtered === null) {
            text.current.value = "";
        }
    });

    const onChange = (e) => {
        if (text.current.value !== "") {
            contactContext.filterContacts(e.target.value);
        } else {
            contactContext.clearFilter();
        }
    };

    return (
        <form>
            <div className='filter-contacts'>
                <div className='search-icon'>
                    <i className='fas fa-search' />
                </div>
                <input
                    className='filter-input'
                    ref={text}
                    type='text'
                    placeholder='Filter Contacts...'
                    onChange={onChange}
                />
            </div>
        </form>
    );
};

export default ContactFilter;
