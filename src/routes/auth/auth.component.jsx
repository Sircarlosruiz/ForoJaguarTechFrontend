import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up-form";

import './auth.styles.scss'

const Auth = ({ showSignIn, showSignUp }) => {
    return (
        <div className="auth">
            {showSignIn && <SignIn/>}
            {showSignUp && <SignUp/>}
        </div>
    );
};

export default Auth;