import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
const ContactCard = (props) => {

    const { id, name, email } = props.contact;
    return (
        <div className='contactcard'>
            <div className='card'>
                <h3>{name}</h3>
                <h6>{email}</h6>
            </div>
            <div className='editbutton'>
                <Link
                    to="/edit"
                    className="btn btn-primary"
                    state={{ id: id, name: name, email: email, update: true }} >
                    Edit
                </Link>
            </div>
            <div className='deletebutton'>
                <button
                    className="btn btn-danger"
                    onClick={() => {props.dispatch({ type:'delete',id:id})}}>
                    Del
                </button>
            </div>
        </div>

        
    );
}
const mapDispatchToProps = dispatch =>{
    return {
        dispatch:dispatch
    }
}

export default connect(mapDispatchToProps)(ContactCard);