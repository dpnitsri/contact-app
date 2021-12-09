import React from "react";
import { Link } from "react-router-dom";
import ContactCard from './ContactCard';
import { useSelector } from "react-redux";

const ContactList = () => {
    const contacts = useSelector(state=>state);

    const renderContactList = contacts.map((contact) => {
        return <ContactCard contact={contact} key={contact.id}/>
    })

    return (
        <div className="container">
            <div className="addcontact">
            <h2>Contact list</h2>
            <Link className="btn btn-success" to="/add" state={{update:false}}>
                 Add Contact
            </Link>
            </div>
            {renderContactList}
        </div>
    );
}

export default ContactList;