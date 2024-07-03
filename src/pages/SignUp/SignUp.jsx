import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center md:w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold">Sign In</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card md:w-1/2 bg-base-100 max-w-sm shadow-2xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", {required:true})} name="name" placeholder="name" className="input input-bordered" required />
                            {errors.name && <span className="red-text-600">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email")} name="email" placeholder="email" className="input input-bordered" required />
                            {errors.email && <span className="red-text-600">This field is required</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", {minLength:6, maxLength: 20})} name="password" placeholder="password" className="input input-bordered" required />
                            {errors.password && <span className="red-text-600">This field is required</span>}
                        
                        </div>
                        
                        <div className="form-control mt-6">
                            <input type="submit" value="signIn" className="btn btn-primary" />

                        </div>
                        <p><small>Already <Link to="/login"> account. </Link> </small></p>
                    </form>
                    
                </div>
            </div>
        </div>
    );
};

export default SignUp;