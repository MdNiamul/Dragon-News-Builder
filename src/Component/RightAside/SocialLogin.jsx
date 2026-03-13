import React, { useContext } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../AuthProvide/AuthProvider';
// import { AuthContext } from '../AuthProvide/AuthProvider';

const SocialLogin = () => {

    const { googleSignIn } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    return (
        <div>
            <h3 className='font-bold mb-3'>Login With</h3>
            <div className="space-y-3">

                <button 
                onClick={handleGoogleSignIn}
                className='btn w-full btn-outline btn-secondary'>
                    <FcGoogle size={24}/> Login With Google
                </button>

                <button className='btn w-full btn-outline btn-primary'>
                    <FaGithub size={24}/> Login With Github
                </button>

            </div>
            
        </div>
    );
};

export default SocialLogin;