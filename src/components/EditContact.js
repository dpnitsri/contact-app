import React, { useState } from "react";
import { useEffect } from "react";
import {useLocation,useNavigate } from "react-router-dom";

function EditContact(props) {

    const [state, setState] = useState({ name: '', email: '' })
    const location = useLocation();
    const navigate = useNavigate();

    const update = (e) => {
        e.preventDefault();
        if (state.name === '' || state.email === '') {
            alert("All fields are manadatory");
            return;
        }
        props.updateContactHandler(state);
        //setState({ name: '', email: '' });
        navigate("/");
    }

    useEffect(() => {
        setState({
            name:location.state.name,
            email:location.state.email,
            id:location.state.id
        });
    }, [location.state.name,location.state.email,location.state.id]);
    
    return (
        <div>
            <h2>Add Contact</h2>
            <form onSubmit={update}>
                <div className='contactform'>
                    <label>Name</label>
                    <input
                        type='text'
                        name='name'
                        placeholder='Name'
                        value={state.name}
                        onChange={(e) => setState({ ...state, name: e.target.value })} />
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type='text'
                        name='email'
                        placeholder='Email'
                        value={state.email}
                        onChange={(e) => setState({ ...state, email: e.target.value })} />
                </div>
                <button>Update</button>
            </form>
        </div>
    );
}


export default EditContact;