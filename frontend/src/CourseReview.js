import { useState, useEffect } from 'react';
import './CourseReview.css';
import Axios from 'axios'

function CourseReview() {
    const [coursename, setcoursename] = useState("");
    const [coursereview, setcoursereview] = useState("");

    const [newCourseReview, setnewCourseReview] = useState("");
    const [UIUCCourseReviews, setUIUCCourseReviews] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3001/api/get/review").then((response) => {
            setUIUCCourseReviews(response.data)
        })
    }, []);

    const submitCourseReview = () => {
        Axios.post("http://localhost:3001/api/insert/review", {
            coursename:coursename,
            coursereview:coursereview, 
        });
        setUIUCCourseReviews([
            ...UIUCCourseReviews, 
            {coursename:coursename, coursereview:coursereview}]);
    };

    const updateCourseReview = (course) => {
        Axios.put("http://localhost:3001/api/update/courseReview/review", {
            coursename:course,
            coursereview:newCourseReview,
        });
        setnewCourseReview("");
    };

    return (
        <div className="CourseReviewPage">  
            <div className='form'>
                <h1> Add Course Review </h1>
                <a href="/Home" className = "SubmitButton" value = "home"> Home </a>
                <label>Course Name: </label>
                <input type="text" name="coursename" onChange={(e) => { setcoursename(e.target.value) }}/>
                <label>Course Review: </label>
                <input type="text" name="coursereview" onChange={(e) => { setcoursereview(e.target.value) }}/>
                <button className = "SubmitButton" onClick={submitCourseReview}> Submit </button>
            

            { UIUCCourseReviews.map((val) => {
                return (
                    <div className='card'>
                        <h1> {val.coursename} 
                        </h1>
                        <p>Review: {val.coursereview}
                            <input class = "textbox" type ="text" id = "updateInput" onChange={(e) => {
                                setnewCourseReview(e.target.value)
                            }}/>
                            <button onClick = {() => {updateCourseReview(val.coursename)}}> Update </button>
                        </p>                      
                    </div>
                );
            })}
            </div>
        </div>
    );
}

export default CourseReview;
