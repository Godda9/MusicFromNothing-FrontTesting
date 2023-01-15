import Comment from '../comment/comment';
import './comments-modal.css';

const CommentsModal = (props) => {
    const {specialKey} = props;

    return (
        <div id={"commentsModal" + specialKey} className="modal">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">{specialKey} - Comments</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" id={'closeCommentsModal' + specialKey}></button>
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