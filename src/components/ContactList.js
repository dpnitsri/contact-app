import React from "react";
import { Link } from "react-router-dom";
import ContactCard from './ContactCard';

const ContactList = (props) => {
    const deleteContactHandler = (id) => {
        props.removeContact(id);
    }

    const renderContactList = props.contacts.map((contact) => {
        return <ContactCard contact={contact} key={contact.id} clickHandler={deleteContactHandler} />
    })

    const renderContactList2 = props.contactList.map((contact) => {
        return <ContactCard contact={contact} key={contact.id} clickHandler={deleteContactHandler} />
    })
    return (
        <div className="container">
            <div className="addcontact">
            <h2>Contact list</h2>
            <Link className="btn btn-success" to="/add" state={{update:false}}>
                 Add Contact
            </Link>
            </div>
            
            {renderContactList2}
        </div>
    );
}

export default ContactList;