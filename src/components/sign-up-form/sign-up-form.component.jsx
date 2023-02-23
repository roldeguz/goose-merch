import { useState } from "react";
import {
    createUserDocumentFromEmailAndPassword,
    createUserDocumentFromAuth 
} from '../../utils/firebase/firebase.utils';
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { SignupContainer } from "./sign-up-form.styles";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleOnChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    }

    const handleOnSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert ("Passwords do not match. Please try again.");
            return;
        }

        try {
            const { user } = await createUserDocumentFromEmailAndPassword(email, password);
            
            await createUserDocumentFromAuth(user, {displayName})
            resetFormFields();
        } catch(error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('User creation error. Email already in use.');
            } else {
                console.log('User creation error', error.message);
            }
        }
    }

    return (
        <SignupContainer>
            <h2>Need an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleOnSubmit}>
                <FormInput label="Name" type="text" required onChange={handleOnChange} name="displayName" value={displayName} />
                <FormInput label="Email" type="email" required onChange={handleOnChange} name="email" value={email} />
                <FormInput label="Password" type="password" required onChange={handleOnChange} name="password" value={password} />
                <FormInput label="Confirm password" type="password" required onChange={handleOnChange} name="confirmPassword" value={confirmPassword} />
                <Button type="submit">Sign up</Button>
            </form>
        </SignupContainer>
    )
}

export default SignUpForm;