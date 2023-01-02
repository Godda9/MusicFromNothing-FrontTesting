import './PostItem.css'

const PostItem = (props) => {
    return (
        <>
            <div class="col">
                <div class="card shadow-sm">
                    <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder:" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#55595c"></rect>
                        <text x="50%" y="50%" fill="#eceeef" dy=".3em"></text>
                    </svg>

                    <div class="card-body">
                        <p class="card-text">Content</p>
                        <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary">+</button>
                            <button type="button" class="btn btn-sm btn-outline-secondary">-</button>
                        </div>
                        <small class="text-muted">Datetime</small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PostItem;