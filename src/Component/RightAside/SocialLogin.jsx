import React, { useContext } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../AuthProvide/AuthProvider';

const SocialLogin = () => {

    const { googleSignIn, githubSignIn, user, loading } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    const handleGithubSignIn = () => {
        githubSignIn()
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    if(loading){
        return (
            <div className="flex justify-center py-6">
                <span className="loading loading-infinity loading-xl"></span>
            </div>
        )
    }

    if(user){
        return null;
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

                <button 
                onClick={handleGithubSignIn}
                className='btn w-full btn-outline btn-primary'>
                    <FaGithub size={24}/> Login With Github
                </button>

            </div>
        </div>
    );
};

export default SocialLogin;