import React from 'react';
import SignInAndSignUpPage from '../../pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle, SignInWithGoogle } from '../../firebase/firebase.util.js';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password:''
        }
    }

    handleSubmit =event => {
        event.preventDefault();
        this.setState({email: '', password:''});
    }

    handleChange =event => {
        const {value, name} = event.target;
        
        this.setState({ [name]: value});
    }

    render(){
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        label='Email'
                        handleChange={this.handleChange} 
                        value={this.state.email} 
                        required
                    />
                    <FormInput 
                        name='password' 
                        type='password' 
                        label='Password'
                        handleChange={this.handleChange} 
                        value={this.state.password} 
                        required
                    />
                    <div className='buttons'>
                        <CustomButton type='submit'> Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            Sign In With Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }

}

export default SignIn;