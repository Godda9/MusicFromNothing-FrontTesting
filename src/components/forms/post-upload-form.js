import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import ProfileCardEdit from "../profile-card-edit/profile-card-edit";

const PostUploadForm = (props)=> {
    const { register, handleSubmit, getValues, formState: { errors } } = useForm();
    const {handleTitle, handleDescr, handlePicture, handleAudio} = props;

    // form submit
    const onSubmit = data => {
        console.log(data);
    }

    return(
        <>  
            <div className="bordered row border overflow-hidden shadow d-flex justify-content-center align-items-center w-75 m-5 p-3">
                <form onSubmit={handleSubmit(onSubmit)} className='column'>
                    <div>
                        <label htmlFor="Title" className="form-label"><b>Title</b></label>
                        <input 
                            className="form-control rounded"
                            type="text" 
                            placeholder="Title"
                            onInput={e => handleTitle(e.target.value)}
                            {...register("Title", {
                                maxLength: 10,
                                minLength: 4,
                                required: true,
                            })} 
                        />
                        {errors.Title && <span className="form-text text-danger">Title must be from 4 to 10 characters</span>}
                    </div>

                    <div className="pt-3">
                        <label htmlFor="ShortDescription" className="form-label"><b>Short Description</b></label>
                        <input 
                            className="form-control rounded"
                            type="text" 
                            placeholder="ShortDescription"
                            onInput={e => handleDescr(e.target.value)}
                            {...register("ShortDesc", {
                                maxLength: 20,
                                minLength: 4,
                                required: true,
                            })}
                        />
                        {errors.ShortDesc && <span className="form-text text-danger">Short description must be from 4 to 20 characters</span>}
                    </div>
                    
                    <div className="pt-3 w-50">
                        <label className="form-check-label"><b>Music type</b></label>
                        <select 
                            className="form-select" 
                            id="floatingSelect"
                            {...register("MusicType", {
                                required: true,
                            })}>
                            <option value="0">Default</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        {errors.MusicType && <span className="form-text text-danger">Music type is required</span>}
                    </div>
                    
                    <div className='w-100 pt-3'>
                        <label className="form-check-label"><b>Image</b></label>
                        <input 
                            className="form-control"
                            type="file" 
                            placeholder="Upload"
                            onInput={e => handlePicture(e.target.files[0])}
                            
                            {...register("Image", {
                                required: true,
                            })} 
                        />
                        {errors.Image && <span className="form-text text-danger">Image file is required</span>}
                    </div>

                    <div className="pt-3">
                        <label className="form-check-label"><b>Your OWN audio</b></label>
                        <input 
                            className="form-control"
                            type="file" 
                            placeholder="Upload"
                            onInput={e => handleAudio(e.target.files[0])}
                            {...register("Audio", {
                                required: true,
                            })} 
                        />
                        {errors.Audio && <span className="form-text text-danger">Audio file is required</span>}
                    </div>
                    
                    
                    <div className="input-group mb-3 pt-3">
                        <input 
                            className="form-check-input"
                            type="checkbox" 
                            {...register("AllowComments", {})} 
                        />
                        <label className="form-check-label mx-2">Allow comments</label>
                    </div>

                    <div className="input-group mb-3">
                        <input 
                                className="form-check-input"
                                type="checkbox" 
                                {...register("AllowDownloads", {})} 
                            />
                        <label className="form-check-label mx-2">Allow downloads</label>
                    </div>

                    <button type="submit" className="btn btn-primary w-100">Confirm</button>
                </form>
            </div>
        </>
    );
}

export default PostUploadForm;