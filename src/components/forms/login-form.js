import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const LoginForm = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <>
            <p className="d-mode-text">Please sign in</p>
            <form className="m-5 login-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="Email" className="form-label d-mode-text">Email</label>
                    <input
                        className="form-control rounded d-mode-input"
                        type="text"
                        {...register("Email", {
                            required: true,
                            pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        })}
                    />
                    {errors.Email && <span className="form-text text-danger">Email address is not valid </span>}
                </div>

                <div className="mb-3">
                    <label htmlFor="Password" className="form-label d-mode-text">Password</label>
                    <input 
                        className="form-control rounded d-mode-input"
                        type="password" 
                        {...register("Password", {
                            maxLength: 20,
                            minLength: 8,
                            required: true,
                        })} 
                    />
                    {errors.Password && <span className="form-text text-danger">Password is not valid</span>}
                </div>

                <div className="mb-3 form-check">
                    <input 
                        className="form-check-input d-mode-input"
                        type="checkbox" 
                        {...register("RememberMe", {})} 
                    />
                    <label className="form-check-label d-mode-text" htmlFor="exampleCheck1">Remember me</label>
                </div>
                
                <button type="submit" className="d-mode-button btn btn-primary">Les's go</button>     
            </form>
            <p className="reg-link d-mode-text">Haven't got an account? <Link to="/register">Register</Link> a new one</p>
        </>
    );
}

export default LoginForm;