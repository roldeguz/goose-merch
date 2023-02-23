import { useState } from "react";
import { 
    // auth,
    // SignInWithGoogleRedirect,
    signInUserWithEmailAndPassword,
    SignInWithGooglePopup, 
    //createUserDocumentFromAuth 
} from "../../utils/firebase/firebase.utils";
import FormInput from "../../components/form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../../components/button/button.component";

import { SigninContainer, ButtonsContainer } from "./sign-in-form.styles";

const defaultFormFields = {
    email: '',
    password: ''
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleOnChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    }

    const SignInWithGoogle = async () => {
        await SignInWithGooglePopup();
    }

    const handleOnSubmit = async (event) => {
        event.preventDefault();

        try {
            const { user } = await signInUserWithEmailAndPassword(email, password);
            
            resetFormFields();
        } catch(error) {
            if (error.code === 'auth/user-not-found') {
                alert('Invalid email address and/or paswword. Please try again.');
            } else if (error.code === 'auth/wrong-password') {
                alert('Invalid email address and/or paswword. Please try again.');
            } else {
                console.log('Sign-in error', error.message);
            }
        }
    }

    return (
        <SigninContainer>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleOnSubmit}>
                <FormInput label="Email" type="email" required onChange={handleOnChange} name="email" value={email} />
                <FormInput label="Password" type="password" required onChange={handleOnChange} name="password" value={password} />
                <ButtonsContainer>
                    <Button type="submit">
                        Sign In
                    </Button>
                    <Button buttonType={BUTTON_TYPE_CLASSES.google} onClick={SignInWithGoogle}>
                        Google Sign In
                    </Button>
                </ButtonsContainer>
            </form>
        </SigninContainer>
    )
}

export default SignInForm;