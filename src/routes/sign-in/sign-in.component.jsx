// import { getRedirectResult } from "firebase/auth";
// import { useEffect } from "react";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import { 
    // auth,
    // SignInWithGoogleRedirect,
    SignInWithGooglePopup, 
    createUserDocumentFromAuth 
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    /*
    useEffect(() => {
        async function fetchResponse() {
            const response = await getRedirectResult(auth);

            if (response) {
                const userDocRef = await createUserDocumentFromAuth(response.user);
                console.log(userDocRef);
            }
        }

        fetchResponse();
    }, []);
    */
   
    const logGoogleUser = async () => {
        const { user } = await SignInWithGooglePopup();
        await createUserDocumentFromAuth(user)
        //console.log(userDocRef);
    }

    return (
        <div>
            <h1>Sign In page</h1>
            <button onClick={logGoogleUser}>
                Sign In with Google Popup
            </button>
            <SignUpForm />
        </div>
    )
}

export default SignIn;