// import { getRedirectResult } from "firebase/auth";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

import { AuthenticationContainer } from "./authentication.styles";

const Authentication = () => {
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

    return (
        <AuthenticationContainer>
            <SignInForm />
            <SignUpForm />
        </AuthenticationContainer>
    )
}

export default Authentication;