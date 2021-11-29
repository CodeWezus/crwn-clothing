import React from "react";
import FormInput from '../Components/form-input/form-input';
import CustomButton from '../Components/custom-button/custom-button';
import {auth , createUserProfileDocument } from '../Firebase/firebase.utils';
import './sign-up.scss';

class SignUp extends React.Component {
    constructor(){
        super();
        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: "",
        }
    }

    handleSubmit = async event => {
        // Prevents the default action of the form submit
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;

        // If the entered passwords don't match, break free from the handleSubmit
        if(password !== confirmPassword){
            alert("Passwords do not match!")
            return;
        }

        try{

            // Creates a new user account with the specific email and password then signs them in. Returns a userAuth object.
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            createUserProfileDocument(user, {displayName});

            // Resets state upon completion
            this.setState({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: "",
            });
        } catch(error) {
            console.log(error);
        }
    }

    // Destructs name and value from the event then dynamically sets the name state.
    handleChange = event => {

        const {name, value} = event.target;

        this.setState({
            [name]: value
        })

    }

    // Renders a form for user sign up
    render(){
        const {displayName, email, password, confirmPassword} = this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={this.handleChange}
                    label='Display Name'
                    required/>
                    
                    <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={this.handleChange}
                    label='Email'
                    required/>
                    
                    <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={this.handleChange}
                    label='Password'
                    required/>
                    
                    <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={this.handleChange}
                    label='Confirm Password'
                    required/>

                    <CustomButton type='submit'>Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;