import React from 'react' 

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import {auth, signInWithGoogle} from '../../firebase/firebase.utils'

import {
    SignInContainer,
    SignInTitle,
    ButtonsBarContainer
} from './sign-in.styles';

class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault()
        const { email, password } = this.state
        try {
            await auth.signInWithEmailAndPassword(email, password )
            //comenta que volvemos email/passw a empty string
            this.setState({ email: '', password: '' })
        } catch (error) {
            console.log("error desde handleSubmit ", error)
        }
        
    }
    handleChange = event => {
        const {value, name} = event.target;
        this.setState({ [name] : value})
    }
    render(){
        return(
            <SignInContainer>
                <SignInTitle>I already have an account</SignInTitle>
                <span>Sign In with your email and password.</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" label="email"
                    value={this.state.email} required 
                    handleChange={this.handleChange}
                    />
                    
                    <FormInput name="password" type="password" label="password"
                    value={this.state.password} required 
                    handleChange={this.handleChange}
                    />
                    <ButtonsBarContainer>
                    <CustomButton type="submit">
                        Sign In
                        </CustomButton>
                        <CustomButton type="button"  onClick={signInWithGoogle} isGoogleSignIn>
                        Sign In with Google
                    </CustomButton>
                    </ButtonsBarContainer>
                </form>
            </SignInContainer>
        )

    }
}

export default SignIn;