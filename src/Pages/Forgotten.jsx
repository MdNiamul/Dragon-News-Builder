import React, { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router";
import app from '../Firebase/Firebase.config';

const ForgotPassword = () => {

    const [email, setEmail] = useState("");
    const auth = getAuth(app);
    const navigate = useNavigate();

    const handleReset = (e) => {
        e.preventDefault();

        sendPasswordResetEmail(auth, email)
        .then(() => {
            alert("Password reset email sent");
            setEmail("");
            navigate("/"); // login page এ নিয়ে যাবে
        })
        .catch((error) => {
            alert(error.message);
        });
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleReset} className="p-6 shadow-lg">
                <h2 className="text-xl mb-4">Reset Password</h2>

                <input 
                    type="email"
                    placeholder="Enter your email"
                    className="input input-bordered w-full"
                    required
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />

                <button className="btn btn-primary mt-3 w-full">
                    Reset Password
                </button>
            </form>
        </div>
    );
};

export default ForgotPassword;