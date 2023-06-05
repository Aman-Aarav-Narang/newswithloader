import React from 'react'
import { Link } from 'react-router-dom'

const Category = () => {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center bg-dark">
                <button className='btn btn-primary mt-2 mb-2 mx-2' value="Entertainment">
                    <Link to="/entertainment" className="nav-link">Entertainment</Link>
                    Entertainment</button>
                <button className='btn btn-primary mt-2 mb-2 mx-2' value="General">General</button>
                <button className='btn btn-primary mt-2 mb-2 mx-2' value="Health">Health</button>
                <button className='btn btn-primary mt-2 mb-2 mx-2' value="Science">Science</button>
                <button className='btn btn-primary mt-2 mb-2 mx-2' value="Sports">Sports</button>
                <button className='btn btn-primary mt-2 mb-2 mx-2' value="Technology">Technology</button>
            </div>
        </>
    )
}

export default Category
