import { useEffect } from 'react';
import Comment from '../comment/comment';
import './comments-modal.css';

const CommentsModal = (props) => {
    useEffect(() => {
        const modal = document.querySelector('#commentsModal');
        const btn = document.querySelector('#openComments');
        const closeBtn = document.querySelector('#closeCommentsModal');

        btn.addEventListener('click', (e) => {
            modal.style.display = "block";
        })
        closeBtn.addEventListener('click', (e) => {
            modal.style.display = "none";
        })

        return () => {
            btn.removeEventListener('click', null);
            closeBtn.removeEventListener('click', null);
        }
    }, [])


    return (
        <div id="commentsModal" className="modal">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Track Title - Comments</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" id='closeCommentsModal'></button>
                </div>
                <div className="modal-body">
                    <Comment/>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                </div>
                <div className="modal-footer d-flex justify-content-center flex-nowrap">
                    <input className="form-control" type="text" placeholder='Comment text'/>
                    <button type="button" className="btn btn-primary">Comment</button>
                </div>
                </div>
            </div>
        </div>
    );
}

export default CommentsModal;