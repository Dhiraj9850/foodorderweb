import React from 'react'

const AddReview = () => {
    return (

        <div className="shadow-sm bg-white p-3 rounded mb-3">
            <h5 className="mb-2">Leave Comment</h5>
            <label htmlFor="comment" className="small text-dark my-2">Your comment</label>
            <textarea name="" id="" className="form-control"></textarea>
            <button className="btn btn-sm btn-primarygred w-100 my-3">Submit Comment</button>
        </div>

    )
}

export default AddReview