import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import ProfileCardEdit from "../profile-card-edit/profile-card-edit";

const PostUploadForm = (props)=> {
    const { register, handleSubmit, getValues, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
    }

    return(
        <>  
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="Title" className="form-label"><b>Title</b></label>
                <input 
                    className="form-control rounded"
                    type="text" 
                    placeholder="Title"
                    {...register("Title", {
                        maxLength: 10,
                        minLength: 4,
                        required: true,
                    })} 
                />
                {errors.Title && <span className="form-text text-danger">Title must be from 4 to 10 characters</span>}
            </div>

            <div className="mb-3">
                <label htmlFor="ShortDescription" className="form-label"><b>Short Description</b></label>
                <input 
                    className="form-control rounded"
                    type="text" 
                    placeholder="ShortDescription"
                    {...register("ShortDesc", {
                        maxLength: 20,
                        minLength: 4,
                        required: true,
                    })} 
                />
                {errors.ShortDesc && <span className="form-text text-danger">Short description must be from 4 to 20 characters</span>}
            </div>

            <div className="pt-3 w-50">
                <label htmlFor="MusicType" className="form-label"><b>Music Type:</b></label>
                <div class="dropdown">
                    <button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Select
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" selected href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
            
            </div>
            

            <div className='pt-3 w-50 mt-5'>
                <label htmlFor="UploadImage" className="form-label"><b>Image:</b></label>
                <input className="form-control" type="file" id="formFile" placeholder="Upload"/>
            </div>

            <div className='pt-3 w-50'>
                <label htmlFor="ChooseAudio" className="form-label"><b>Audio</b></label>
                <input className="form-control" type="file" id="formFile" placeholder="Choose from creations"/>
            </div>

            <div className='pt-3 w-50'>
                <input placeholder="Upload" className="form-control" type="file" id="formFile" />
            </div>
        </form>
        </>
    );
}

export default PostUploadForm;