import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Register = () => {
    const { createUser } = useContext(AuthContext);

    const [registerError, setRegisterError] = useState()
    const [passwordError, setSetPasswordError] = useState()
    const [upperCaseErr, setUpperCaseErr ] = useState()
    const [success, setSuccess] = useState('')



    const handelRegister = (e) => {
        e.preventDefault();

        // reset error 
        setRegisterError('');
        setSuccess('');
        setSetPasswordError('')
        setUpperCaseErr('')

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        if (password.length < 6) {
            // Password is too short
            console.log('Password at least 6 characters');
            setSetPasswordError('Password at least 6 characters');
            return; 
        } else if ((/^(?![A-Z])[^!@#$%^&*()_+{}\[\]:;<>,.?~\\\/]*$/.test(password))) {
            setUpperCaseErr(' At least one uppercase(A-Z) and Special Character');
            return; 
        }



        createUser(email, password)
        .then(result => {
            console.log(result);
            setSuccess('User Created Successfully')
            return
        })
        .catch(error => {
            // setRegisterError(error.message);
            // setRegisterError(error.message)
            if(error.message){
                setRegisterError('Already Register')
                return
            }

        })




    }







    return (
        <div>

            <div>
                <div className=" max-w-7xl mx-auto">
                    <h1 data-aos="flip-up" className="text-4xl font-extrabold text-center my-8 text-[#79C23F]">REGISTER</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-4 ">

                        <div data-aos="fade-up-right" className="border rounded-lg">
                            <h1 className="text-2xl font-bold text-gray-400 mt-4 text-center">Please Register & Access Brand Service</h1>
                            <form onSubmit={handelRegister} className="card-body px-4 ">
                                <div className="form-control">
                                    <input type="text" placeholder="Name" name='name' className="input w-full input-bordered rounded-md" required />
                                </div>
                                <div className="form-control">
                                    <input type="email" placeholder="Email" name='email' className="input input-bordered rounded-md my-4" required />
                                </div>
                                <div className="form-control">
                                    <input type="password" name='password' placeholder="Password" className="input input-bordered rounded-md" required />
                                </div>
                                <h1 className="text-sm p-2">Forget Password</h1>
                                {/* Display the error message */}
                                {registerError && (
                                    <div className="text-red-500 font-bold text-center my-2">      
                                          {registerError}
                                    </div>
                                )}
                                {upperCaseErr && (
                                    <div className="text-red-500 font-bold text-center my-2">      
                                          {upperCaseErr}
                                    </div>
                                )}
                                {passwordError && (
                                    <div className="text-red-500 font-bold text-center my-2">      
                                          {passwordError}
                                    </div>
                                )}
                                {success && (
                                    <div className="text-green-500 font-bold text-center my-2">      
                                         {success}  
                                    </div>
                                )}
                                <div className="flex justify-center">
                                    <button className="btn bg-[#79C23F] hover:text-gray-500 px-8 rounded-md text-white">Register</button>
                                </div>

                            </form>
                            <h2 className="text-center text-lg font-semibold">Already have an Account ? Please <Link to='/login' className="text-[#79C23F] underline">Login</Link> </h2>


                        </div>
                        <div data-aos="fade-up-left" className="">
                            <img src={'https://i.ibb.co/9gq6QY9/pngegg-9.png'} className="rounded-lg " />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;