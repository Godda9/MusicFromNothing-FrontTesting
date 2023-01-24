import { useState } from "react";
import { useForm } from "react-hook-form";
import PostItemDynamicPreview from "../post-item-dynamic-preview/post-item-dynamic-preview";

import './forms-style.scss';

const PostUploadForm = (props)=> {
    const { register, handleSubmit, formState: { errors } } = useForm();

    // form submit
    const onSubmit = data => {
        console.log(data);
    }

    // states
    const [title, setTitle] = useState('Title');
    const [descr, setDescr] = useState('Track description');
    const [picture, setPicture] = useState(null);
    const [audio, setAudio] = useState(null);
    
    // handlers
    const handleTitle = (text) => text.length === 0 ? setTitle('Title') : setTitle(text);
    const handleDescr = (text) => text.length === 0 ? setDescr('Track description') : setDescr(text);
    const handlePicture = (file) => { 
        if (file !== null) setPicture(file) 
    };
    const handleAudio = (file) => { 
        if (file !== null) setAudio(file); 
    };

    return(
        <>  
            <div className="d-mode-bg post-upload form-with-buttons bordered row border overflow-hidden shadow d-flex justify-content-center align-items-center my-5 p-3">
                <form onSubmit={handleSubmit(onSubmit)} className='column'>
                    <div>
                        <label htmlFor="Title" className="d-mode-text form-label"><b>Title</b></label>
                        <input 
                            className="d-mode-input form-control rounded"
                            type="text" 
                            placeholder="Title"
                            onInput={e => handleTitle(e.target.value || "")}
                            {...register("Title", {
                                maxLength: 10,
                                minLength: 4,
                                required: true,
                            })} 
                        />
                        {errors.Title && <span className="form-text text-danger">Title must be from 4 to 10 characters</span>}
                    </div>

                    <div className="pt-3">
                        <label htmlFor="ShortDescription" className="d-mode-text form-label"><b>Short Description</b></label>
                        <input 
                            className="d-mode-input form-control rounded"
                            type="text" 
                            placeholder="ShortDescription"
                            onInput={e => handleDescr(e.target.value || "")}
                            {...register("ShortDesc", {
                                maxLength: 40,
                                minLength: 4,
                                required: true,
                            })}
                        />
                        {errors.ShortDesc && <span className="form-text text-danger">Short description must be from 4 to 20 characters</span>}
                    </div>
                    
                    <div className="pt-3 w-50">
                        <label className="d-mode-text form-check-label"><b>Music type</b></label>
                        <select 
                            className="d-mode-input form-select" 
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
                        <label className="d-mode-text form-check-label"><b>Image</b></label>
                        <input 
                            className="d-mode-input form-control"
                            type="file" 
                            placeholder="Upload"
                            onInput={e => handlePicture(e.target.files[0] || null)}
                            {...register("Image", {
                                required: true,
                            })} 
                        />
                        {errors.Image && <span className="form-text text-danger">Image file is required</span>}
                    </div>

                    <div className="pt-3">
                        <label className="d-mode-text form-check-label"><b>Your OWN audio</b></label>
                        <input 
                            className="d-mode-input form-control"
                            type="file" 
                            placeholder="Upload"
                            onInput={e => handleAudio(e.target.files[0] || null)}
                            {...register("Audio", {
                                required: true,
                            })} 
                        />
                        {errors.Audio && <span className="form-text text-danger">Audio file is required</span>}
                    </div>
                    
                    
                    <div className="input-group mb-3 pt-3">
                        <input 
                            className="d-mode-input form-check-input"
                            type="checkbox" 
                            {...register("AllowComments", {})} 
                        />
                        <label className="d-mode-text form-check-label mx-2">Allow comments</label>
                    </div>

                    <div className="input-group mb-3">
                        <input 
                            className="d-mode-input form-check-input"
                            type="checkbox" 
                            {...register("AllowDownloads", {})} 
                            />
                        <label className="d-mode-text form-check-label mx-2">Allow downloads</label>
                    </div>

                    <button type="submit" className="btn btn-primary w-100" style={{backgroundColor: '#1BA39C', borderColor: '#1BA39C'}}>Confirm</button>
                </form>
            </div>
            
            <div className="post-upload d-flex justify-content-center">
                <PostItemDynamicPreview 
                    user="UserName"
                    title={title}
                    description={descr}
                    isLiked={false}
                    img={picture !== null ? URL.createObjectURL(picture) : null}
                    audio={audio !== null ? URL.createObjectURL(audio) : null}
                />
            </div>
        </>
    );
}

export default PostUploadForm;