import { useState, useEffect } from 'react';
import './Home.css';
import Axios from 'axios'

function Home() {
    // const AddCourse = () => {
    //     window.location.href="./CourseList"
    // };

    return (
        <div className="HomePage">  
            <div className='form'>
                <h1> Welcome to UIUC Course Reccomender </h1>
                <label>Options: </label>
                <div>
                    <a href="/CourseList" className = "SubmitButton" value = "addcourse"> Add Courses </a>
                    <a href="/CourseReview" className = "SubmitButton" value = "coursereview"> Post Course Review </a>
                    <button className = "SubmitButton" value = "studygroup"> Find Study Group </button>
                    <a href="/" className = "SubmitButton" value = "logout"> Logout </a>
                </div>
            </div>
        </div>
    );
}

export default Home;
