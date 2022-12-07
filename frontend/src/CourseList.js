import { useState, useEffect } from 'react';
import './CourseList.css';
import Axios from 'axios'

function CourseList() {
    const [coursename, setcoursename] = useState("");
    const [coursestartdate, setcoursestartdate] = useState("");
    const [courseenddate, setcourseenddated] = useState("");

    const [newCoursestartdate, setnewCoursestartdate] = useState("");
    const [newCourseenddate, setnewCourseenddated] = useState("");

    const [UIUCCourseList, setUIUCCourseList] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3001/api/get/course").then((response) => {
            setUIUCCourseList(response.data)
        })
    }, []);

    const submitCourseInfo = () => {
        Axios.post("http://localhost:3001/api/insert/course", {
            coursename:coursename, 
            coursestartdate:coursestartdate, 
            courseenddate:courseenddate
        });
        setUIUCCourseList([
            ...UIUCCourseList, 
            {coursename:coursename, coursestartdate:coursestartdate, courseenddate:courseenddate}]);
    };

    const deleteCourse = (course) => {
        Axios.delete('http://localhost:3001/api/delete/course/${coursename}');
    };

    const updateCourseStartDate = (course) => {
        Axios.put("http://localhost:3001/api/update/course/coursestartdate", {
            coursename:course,
            coursestartdate:newCoursestartdate,
        });
        setnewCoursestartdate("");
    };

    const updateCourseEndDate = (course) => {
        Axios.put("http://localhost:3001/api/update/course/courseenddate", {
            coursename:course,
            courseenddate:newCourseenddate,
        });
        setnewCourseenddated("");
    };

    return (
        <div className="CourseListPage">  
            <div className='form'>
                <h1> Add Classes </h1>
                <label>Class Name: </label>
                <input type="text" name="coursename" onChange={(e) => { setcoursename(e.target.value) }}/>
                <label>Class Start Date: </label>
                <input type="text" name="coursestartdate" onChange={(e) => { setcoursestartdate(e.target.value) }}/>
                <label>Class End Date: </label>
                <input type="text" name="courseenddate" onChange={(e) => { setcourseenddated(e.target.value) }}/>
                <div>
                <button className = "SubmitButton" onClick={submitCourseInfo}> Submit </button>
                <a href="/Home" className = "SubmitButton" value = "home"> Home </a>
                </div>
                
            </div>

            <div className='form'>
            { UIUCCourseList.map((val) => {
                return (
                    <div className='card'>
                        <h1> {val.coursename} 
                            <button onClick = {() => {deleteCourse(val.coursename)}}>Delete</button>
                        </h1>
                        <p>{val.coursestartdate}
                            <input type ="text" id = "updateInput" onChange={(e) => {
                                setnewCoursestartdate(e.target.value)
                            }}/>
                            <button onClick = {() => {updateCourseStartDate(val.coursename)}}> Update </button>
                        </p>
                        <p>{val.courseenddate}
                        <input type ="text" id = "updateInput" onChange={(e) => {
                                setnewCourseenddated(e.target.value)
                            }}/>
                        <button onClick = {() => {updateCourseEndDate(val.coursename)}}> Update </button> 
                        </p>
                        
                    </div>
                );
            })}
            </div>
            
        </div>
    );
}

export default CourseList;
