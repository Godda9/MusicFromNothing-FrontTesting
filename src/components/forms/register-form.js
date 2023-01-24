import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const RegisterForm = (props) => {
    const { register, handleSubmit, formState: { errors }, getValues } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <>
            <p className="d-mode-text">Creating new account</p>
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
                    <label htmlFor="Nickname" className="form-label d-mode-text">Nickname</label>
                    <input 
                        className="form-control rounded d-mode-input"
                        type="text" 
                        {...register("Nickname", {
                            maxLength: 20,
                            required: true,
                        })} 
                    />
                    {errors.Nickname && <span className="form-text text-danger">Nickname is not valid</span>}
                </div>

                <div className="mb-3">
                    <label htmlFor="Password" className="form-label d-mode-text">Password</label>
                    <input 
                        className="form-control rounded d-mode-input"
                        type="password" 
                        {...register("Password", {
                            minLength: 8,
                            required: "Password is required!",
                        })} 
                    />
                    {errors.Password && <span className="form-text text-danger">Password is not valid</span>}
                </div>

                <div className="mb-3">
                    <label htmlFor="ConfirmPassword" className="form-label d-mode-text">Confirm Password</label>
                    <input 
                        className="form-control rounded d-mode-input"
                        type="password" 
                        {...register("ConfirmPassword", {
                            required: "Please confirm password!",
                            validate: {
                                matchesPreviousPassword: (value) => {
                                    const { Password } = getValues();
                                    return Password === value || "Passwords should match!";
                                }
                            }
                        })} 
                    />
                    {errors.ConfirmPassword && <span className="form-text text-danger">Confirmination password is not valid</span>}
                </div>

                <div className="mb-3 form-check">
                    <input 
                        className="form-check-input d-mode-input"
                        type="checkbox" 
                        {...register("RememberMe", {})} 
                    />
                    <label className="form-check-label d-mode-text" htmlFor="exampleCheck1">Remember me</label>
                </div>
                
                <button type="submit" className="btn btn-primary" style={{backgroundColor: '#1BA39C', borderColor: '#1BA39C'}}>Register</button>     
            </form>
            <p className="reg-link d-mode-text">Already registered? <Link to="/login">Login</Link></p>
        </>
    );
}

export default RegisterForm;