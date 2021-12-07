import React from "react";
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';


function AddContact(props) {
    const navigate = useNavigate();
    const location = useLocation();
    const [state, setState] = useState({ name: '', email: '', id: '' })

    useEffect(() => {
        if (location.state.update)
            setState({
                name: location.state.name,
                email: location.state.email,
                id: location.state.id
            });
    }, [
        location.state.name,
        location.state.email,
        location.state.id,
        location.state.update
    ]);

    const add = (e) => {
        e.preventDefault();
        if (state.name === '' || state.email === '') {
            alert("All fields are manadatory");
            return;
        }

        if (!location.state.update)
            props.addContactHandler(state);
        else
            props.updateContactHandler(state);
        //setState({ name: '', email: '' });
        //window.history.back();
        navigate("/");
    }


    return (
        <div>
            <form className="container">
                <h2 className="display-4">Add Contact</h2>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        className="form-control"
                        type='text'
                        name='name'
                        placeholder='Name'
                        value={state.name}
                        onChange={(e) => setState({ ...state, name: e.target.value })} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        className="form-control"
                        type='text'
                        name='email'
                        placeholder='Email'
                        value={state.email}
                        onChange={(e) => setState({ ...state, email: e.target.value })} />
                </div>
                <button className="btn btn-primary" onClick={add}>Add</button>
            </form>
        </div>
    );
}

export default AddContact;
