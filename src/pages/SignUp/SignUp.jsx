import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from 'react-helmet-async';
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from 'sweetalert2';

const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();        // from "react hook form". 
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();


    const onSubmit = data => {
        // console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        console.log("user profile info updated");
                        reset();
                        Swal.fire({
                            position: "top-middle",
                            icon: "success",
                            title: "User created successfully!",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate('/');
                    })
                    .catch(error => console.log(error))
            })
    }

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content mt-10 flex-col lg:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Sign In</h1>
                        <p className="py-6">
                            Sign our site Bistro Boss for accessing features and order our different foods you like most.
                        </p>
                    </div>
                    <div className="card md:w-1/2 bg-base-100 max-w-sm shadow-2xl">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" {...register("photoURL", { required: true })} placeholder="photoURL" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-600">photoURL is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20
                                })} name="password" placeholder="password" className="input input-bordered" />
                                {errors.password && <span className="text-red-600">Password is required</span>}
                                {errors.minLength?.type === 'required' && <p role="alert">Password must more than 6 characters. </p>}
                                {errors.maxLength?.type === 'required' && <p role="alert">Password not more than 20 characters. </p>}
                            </div>

                            <div className="form-control mt-6">
                                <input type="submit" value="Sign Up" className="btn btn-primary" />

                            </div>
                            <p>Already have an account <Link to="/login" className="text-blue-500"> Login.  </Link> </p>
                        </form>

                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;