import React, { useContext, Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import ContactContext from "../../context/contact/contactContext";

const Navbar = ({ title, icon }) => {
    const authContext = useContext(AuthContext);
    const contactContext = useContext(ContactContext);

    const { isAuthenticated, logout, user } = authContext;
    const { clearContacts } = contactContext;

    const onLogout = () => {
        logout();
        clearContacts();
    };

    const authLinks = (
        <Fragment>
            <li>Welcome, {user && user.name} </li>
            <li>
                <a onClick={onLogout} href='#!'>
                    <i
                        className='fas fa-sign-out-alt'
                        style={{ marginLeft: "15px", color: "yellow" }}
                    />{" "}
                    <span style={{ color: "yellow" }}>
                        <strong>Logout</strong>
                    </span>
                </a>
            </li>
        </Fragment>
    );

    const guestLinks = (
        <Fragment>

            <li>
                <Link to='/register'>Sign Up</Link>
            </li>
            <li>
                <Link to='/Login'>Login</Link>
            </li>
        </Fragment>
    );

    return (
        <div className='navbar bg-primary'>
            <h1>
                <a href="/"><i className={icon} />
                {title}</a>
            </h1>
            <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
        </div>
    );
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
};

Navbar.defaultProps = {
    title: " KeepMe",
    icon: "fas fa-users",
};

export default Navbar;
