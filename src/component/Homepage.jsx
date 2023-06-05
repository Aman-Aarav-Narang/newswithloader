import React, { useEffect, useState } from 'react'
import Header from './Header'
import { Backdrop, CircularProgress, makeStyles } from '@mui/material';
import Spinner from './Spinner';
import { Link } from 'react-router-dom';

const Homepage = (props) => {

    const [data, setData] = useState([]);
    const [load, setLoad] = useState(false);
    const [val, setVal] = useState("general");
    


    const dispnews = async () => {
        setLoad(true)
        var info = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${val}&apiKey=bb7efbd53142432684f1911e4a5e1a19`)
        // var info = await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=bb7efbd53142432684f1911e4a5e1a19")
        var actual = await info.json()

        setData(actual.articles)
        console.log(actual.articles)
        setLoad(false)
    }

    function disp(e) {
        console.log(e.target.value)
        setVal(e.target.value)
        console.log(val)
    }
    useEffect(() => {
        dispnews();
    }, [val])

    return (
        <>
            <Header />

            <div className="d-flex justify-content-center flex-wrap align-items-center ">
                <button className='btn btn-outline-primary mt-2 mb-2 mx-2' value="general" onClick={disp}>General</button>
                <button onClick={disp} className='btn btn-outline-primary mt-2 mb-2 mx-2' value="entertainment">Entertainment</button>
                <button className='btn btn-outline-primary mt-2 mb-2 mx-2' onClick={disp} value="health">Health</button>
                <button onClick={disp} className='btn btn-outline-primary mt-2 mb-2 mx-2' value="science">Science</button>
                <button onClick={disp} className='btn btn-outline-primary mt-2 mb-2 mx-2' value="sports">Sports</button>
                <button onClick={disp} className='btn btn-outline-primary mt-2 mb-2 mx-2' value="technology">Technology</button>
            </div>

            <h1 className='text-center'> {`${val}`.toUpperCase()} - News</h1>

            {load && <Spinner />}
            <div className="container">
                <div className="row mt-4">
                    {
                        data ? data.map((item) => {
                            return (
                                <>
                                    <div className="col-md-4 mt-4">
                                        <div className="card">
                                            <img src={item.urlToImage ? item.urlToImage : "https://plus.unsplash.com/premium_photo-1684980182018-56d9a613c713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1295&q=80"} className="card-img-top" alt="..." style={{ width: "100%", height: "30vh" }} />

                                            <div className="card-body">
                                                <h5 className="card-title">{item.title}</h5>
                                                <p className="card-text">{item.description ? item.description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, aperiam."}</p>
                                                <div className="text-center">

                                                    <a href={item.url} target="_blank" className="" style={{textDecoration:"none"}}>Read more...</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        }) : "loading......."

                    }
                    {/* <CircularProgress color='inherit' /> */}
                </div>

            </div>
        </>
    )
}
export default Homepage
