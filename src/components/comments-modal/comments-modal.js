import Comment from '../comment/comment';
import './comments-modal.scss';

const CommentsModal = (props) => {
    const {specialKey} = props;

    return (
        <div className='comments-modal'>
            <div id={"commentsModal"} className="modal">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="d-mode-bg modal-content">
                        <div className="modal-header">
                            <h5 className="d-mode-text modal-title">{specialKey} - Comments</h5>
                            <button type="button" className="btn btn-primary d-mode-text" data-bs-dismiss="modal" aria-label="Close" id={'closeCommentsModal'}>X</button>
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
                            <input className="d-mode-input form-control" type="text" placeholder='Comment text'/>
                            <button type="button" className="d-mode-button btn btn-primary">Comment</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CommentsModal;