import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { LoginRegister } from "../alerts/alerts";


const LoginForm = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    
    const onSubmit = data => {
        let formData = new FormData();
        formData.append('Email', data.Email);
        formData.append('Password', data.Password);
        formData.append('RememberMe', data.RememberMe);


        // send request
        axios.post('/auth/login', formData)
        .then(response => {
            if (response.data.status === 'YES') {
                navigate('/feed');
                LoginRegister.fire({
                    icon: 'success',
                    title: "Welcome, " + response.data.user,
                })
            } else {
                LoginRegister.fire({
                    icon: 'error',
                    title: "Can't login, " + response.data.message,
                })
            }
        })
        .catch(() => {
            LoginRegister.fire({
                icon: 'error',
                title: "Server error",
            })
        });
    };

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
                
                <button type="submit" className="d-mode-button btn btn-primary" style={{backgroundColor: '#1BA39C', borderColor: '#1BA39C'}}>Les's go</button>     
            </form>
            <p className="reg-link d-mode-text">Haven't got an account? <Link to="/register">Register</Link> a new one</p>
            
        </>
    );
}

export default LoginForm;