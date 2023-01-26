import { SignInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await SignInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
        console.log(userDocRef);
    }

    return (
        <div>
            <h1>Sign In page</h1>
            <button onClick={logGoogleUser}>
                Sign In with Google
            </button>
        </div>
    )
}

export default SignIn;