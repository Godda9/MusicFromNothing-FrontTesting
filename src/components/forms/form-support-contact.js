import { useForm } from "react-hook-form";
import './forms-style.css'


const FormSupportContact = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => console.log(data);

    return (
        <>
            <div className="form-support bordered row border overflow-hidden shadow d-flex justify-content-center align-items-center p-3 mt-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <label htmlFor="ContactReason" className="form-label">Contact Reason</label>
                        <select 
                            id="ContactReason" 
                            className="form-control"
                            placeholder="Choose..."
                            {...register("ContactReason", {
                                required: true,
                            })} 
                            >
                            <option>Account problems</option>
                        </select>
                        {errors.ContactReason && <span className="form-text text-danger">Contact reason is not selected</span>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="Email" className="form-label">Your email</label>
                        <input 
                            className="form-control rounded"
                            type="text"
                            placeholder="Email"
                            {...register("Email", {
                                pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                required: true,
                            })} 
                        />
                        {errors.Email && <span className="form-text text-danger">Email address is not valid</span>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="Message" className="form-label">Your message</label>
                        <textarea 
                            className="form-control" 
                            rows="3"
                            placeholder="Message"
                            {...register("Message", {
                                required: true,
                                minLength: 20,
                            })} 
                        />
                        {errors.Message && <span className="form-text text-danger">Email address is not valid</span>}
                    </div>

                    <button type="submit" className="btn btn-primary mt-3">Contact</button>
                </form>
            </div>
        </>
    );
}

export default FormSupportContact;