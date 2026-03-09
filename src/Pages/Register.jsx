import {  useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../AuthProvide/AuthProvider';


const Register = () => {
    const { createUser, setUser } = useContext(AuthContext);

    const handleregisterChange = (e) => {
        e.preventDefault();


        console.log(e.target);
        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        console.log({ name, email, photo, password });

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                // console.log(user);
                setUser(user);
            })
            .catch((error) => {
                alert(error.message);
            });

    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="card bg-base-100 w-full max-w-sm shadow-2xl py-5">
                <h2 className='font-semibold text-center'>Register Your account</h2>
                <form onSubmit={handleregisterChange} className="card-body">

                    <fieldset className="fieldset">

                        {/* name */}
                        <label className="label">Name</label>
                        <input required type="text" name='name' className="input" placeholder="Name" />

                        {/* Photo URl */}
                        <label className="label">Photo URL</label>
                        <input required type="text" name='photo' className="input" placeholder="Photo URL" />

                        {/* email */}
                        <label className="label">Email</label>
                        <input required type="email" name='email' className="input" placeholder="Email" />

                        {/* password */}
                        <label className="label">Password</label>
                        <input required type="password" name='password' className="input" placeholder="Password" />

                        {/* <div>
                            <a className="link link-hover">Forgot password?</a>
                        </div> */}

                        <button required type='submit' className="btn btn-neutral mt-4">Register</button>

                        <h2 className='font-semibold text-center p-6'>Already Have An Account ? <Link to='/auth/login' className='text-red-700'>Please Login</Link></h2>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;