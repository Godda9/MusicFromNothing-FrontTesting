import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const AccountRestoreForm = (props)=> {
    const { register, handleSubmit, getValues, formState: { errors } } = useForm({
        defaultValues:{
            Password:'',
            ConfirmPassword:''
        }
    });
    
    const[password, setPassword] = useState('')
    const[confirmPassword, setConfirmPassword] = useState('')
    const[passError, setPassError] = useState(false)

    const onSubmit = data => {
        console.log(data);
        if(data.Password != data.ConfirmPassword){
            setPassError(true);
        }
    }

    const HandleConfirmPassword =(e)=>{
        setConfirmPassword(e.target.value);
        if(e.target.value != password){
            setPassError(true)
        }else{
            setPassError(false)
        }
    }

    return(
        <>
            <p>Password</p>
            <form className="m5 login-form" style={{alignItems:'left'}} onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="Password" className="form-label"><b>New</b></label>
                    <input 
                        className="form-control rounded"
                        type="password" 
                        placeholder="Your password"
                        onInput={(e) => setPassword(e.target.value)}
                        {...register("Password", {
                            maxLength: 20,
                            minLength: 8,
                            required: true,
                        })} 
                    />
                    {errors.Password && <span className="form-text text-danger">Password is not valid</span>}
                </div>
                
                <div className="mb-3">
                    <label htmlFor="ConfirmPassword" className="form-label" ><b>Repeat</b></label>
                    <input
                        className="form-control rounded"
                        type="password"
                        placeholder="Your password"
                        onInput={(e)=>HandleConfirmPassword(e)}
                        {...register("ConfirmPassword", {
                            maxLength: 20,
                            minLength: 8,
                            required: true,
                        },
                        {
                            validations:(value) =>
                            value === getValues('Password')
                        })}
                    />
                    {(errors.ConfirmPassword) && <span className="form-text text-danger">Password is not valid </span>}
                    {(!errors.ConfirmPassword && passError) && <span className="form-text text-danger"> Passwords are not matching</span>}
                </div>
                
                <button disabled={passError || errors.Password || errors.ConfirmPassword} type="submit" style={{borderColor:'#1BA39C'}} className="btn btn-outline">Confirm</button>     
                
            </form>
        </>
    );
}

export default AccountRestoreForm;