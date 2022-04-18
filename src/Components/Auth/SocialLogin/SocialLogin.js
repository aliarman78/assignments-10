import React from 'react';
import {
    useSignInWithGoogle
} from 'react-firebase-hooks/auth';
import {
    useNavigate
} from 'react-router-dom';
import auth from '../../../firebase.init';


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()

    if (user) {
        navigate('/')
    }
    return (<div className='ms-3' >
        <input onClick={
            () => signInWithGoogle()
        }
            className="login-btn"
            type="submit"
            name=""
            value="Google Sign In"

        />
    </div>
    );
};

export default SocialLogin;