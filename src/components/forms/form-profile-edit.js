import { useForm } from "react-hook-form";

const FormProfileEdit = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {title, current} = props;
    const onSubmit = data => console.log(data);

    return (
        <>
        <div className="bordered row border overflow-hidden d-flex justify-content-center align-items-center m-3 p-3">
            <span className="fs-4 my-3">{title}</span>
            <form onSubmit={handleSubmit(onSubmit)}>
                { title === "Password" ? <Password register={register} errors={errors}/> : null }
                { title === "Nickname" ? <Nickname register={register} errors={errors}/> : null }
                { title === "Email"    ? <Email    register={register} errors={errors} current={current}/> : null }
                { title === "Phone"    ? <Phone    register={register} errors={errors} current={current}/> : null }

                <button type="submit" className="btn btn-primary mt-3">Submit</button>
            </form>
        </div>
        </>
    );
}


const Password = (props) => {
    const {register, errors} = props;
    return (
        <>
            <div className="mb-3">
                <label htmlFor="inputPassword" className="form-label">Old</label>
                <input 
                    className="form-control rounded"
                    type="password"
                    placeholder="Old Password"
                    {...register("OldPassword", {
                        maxLength: 20,
                        minLength: 8,
                        required: true,
                    })} 
                />
                {errors.OldPassword && <span className="form-text text-danger">Password is not valid</span>}
            </div>

            <div className="mb-3">
                <label htmlFor="inputPassword" className="form-label">New</label>
                <input 
                    className="form-control rounded"
                    type="password"
                    placeholder="New Password"
                    {...register("NewPassword", {
                        maxLength: 20,
                        minLength: 8,
                        required: true,
                    })} 
                />
                {errors.NewPassword && <span className="form-text text-danger">Password is not valid</span>}
            </div>
        </>
    );
}


const Nickname = (props) => {
    const {register, errors} = props;
    return (
        <>
            <div className="mb-3">
                <label htmlFor="inputNickname" className="form-label">New</label>
                <input 
                    className="form-control rounded"
                    type="text"
                    placeholder="New Nickname"
                    {...register("NewNickname", {
                        maxLength: 20,
                        minLength: 4,
                        required: true,
                    })} 
                />
                {errors.NewNickname && <span className="form-text text-danger">Nickname is not valid</span>}
            </div>
        </>
    );
}


const Email = (props) => {
    const {register, errors, current} = props;
    return (
        <>
            <div className="mb-3">
                <label htmlFor="inputOldEmal" className="form-label">Current email: {current}</label>
                <input 
                    className="form-control rounded"
                    type="text"
                    placeholder="Old Email"
                    {...register("OldEmail", {
                        minLength: 4,
                        required: true,
                    })}
                />
                {errors.OldEmail && <span className="form-text text-danger">Email is not valid</span>}
            </div>

            <div className="mb-3">
                <label htmlFor="inputNewEmal" className="form-label">New</label>
                <input 
                    className="form-control rounded"
                    type="text"
                    placeholder="New Email"
                    {...register("NewEmail", {
                        minLength: 4,
                        required: true,
                    })}
                />
                {errors.NewEmail && <span className="form-text text-danger">Email is not valid</span>}
            </div>
        </>
    );
}


const Phone = (props) => {
    const {register, errors, current} = props;
    return (
        <>
            <div className="mb-3">
                <label htmlFor="inputOldPhone" className="form-label">Current phone: {current}</label>
                <input 
                    className="form-control rounded"
                    type="text"
                    placeholder="Old Phone"
                    {...register("OldPhone", {
                        minLength: 6,
                        required: true,
                    })} 
                />
                {errors.OldPhone && <span className="form-text text-danger">Phone is not valid</span>}
            </div>

            <div className="mb-3">
                <label htmlFor="inputNewPhone" className="form-label">New</label>
                <input 
                    className="form-control rounded"
                    type="text"
                    placeholder="New Phone"
                    {...register("NewPhone", {
                        minLength: 6,
                        required: true,
                    })} 
                />
                {errors.NewPhone && <span className="form-text text-danger">Phone is not valid</span>}
            </div>
        </>
    );
}

export default FormProfileEdit;