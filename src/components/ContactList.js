import React from "react";
import { Link } from "react-router-dom";
import ContactCard from './ContactCard';
import { connect } from "react-redux";

const ContactList = (props) => {

    const renderContactList = props.contacts.map((contact) => {
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


const mapStateToProps = state => {
    return {
        contacts:state
    }
}


export default connect(mapStateToProps)(ContactList);