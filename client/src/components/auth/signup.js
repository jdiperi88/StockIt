import React, { Component } from 'react';
import { reduxForm } from 'redux-form'
import * as actions from '../../actions'

class Signup extends Component {
    render() {
        const{ handleSubmit, fields: {firstname, lastname, username, email, password, passwordConfirm}} = this.props
        return (
            <form>
                <fieldset className='form-group'>
                    <label>First Name: </label>
                    <input className='form-control' {...firstname} />
                </fieldset>
                <fieldset className='form-group'>
                    <label>Last Name: </label>
                    <input className='form-control' {...lastname} />
                </fieldset>
                <fieldset className='form-group'>
                    <label>UserName: </label>
                    <input className='form-control' {...username} />
                </fieldset>
                <fieldset className='form-group'>
                    <label>Email: </label>
                    <input className='form-control' {...email} />
                </fieldset>
                <fieldset className='form-group'>
                    <label>Password: </label>
                    <input className='form-control' type="password" {...password} />
                </fieldset>
                <fieldset className='form-group'>
                    <label>Confirm Password: </label>
                    <input className='form-control' type="password" {...passwordConfirm} />
                </fieldset>
                <button action="submit" className="btn btn-primary">Sign up</button>

            </form>
        );
    }
}

function validate(formProps){
    const errors = {};
}

export default reduxForm({
    form: 'signup',
    fields: ['firstname','lastname','username','email','password','passwordConfirm'],
    validate
})(Signup);