import React from "react";
import { Link } from "react-router-dom";

const ContactCard = (props) => {
    const { id, name, email } = props.contact;
    return (
        <div className='contactcard'>
            <div className='card'>
                <h3>{name}</h3>
                <h6>{email}</h6>
            </div>
            <div className='editbutton'>
                <Link to="/edit" className="btn btn-primary" state={{id:id,name:name,email:email,update:true}} >Edit</Link>
            </div>
            <div className='deletebutton'>
                <button className="btn btn-danger" onClick={() => props.clickHandler(id)}>Del</button>
            </div>
        </div>
    );
}

export default ContactCard;