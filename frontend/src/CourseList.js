import { useState, useEffect } from 'react';
import './CourseList.css';
import Axios from 'axios'

function CourseList() {
    const [coursename, setcoursename] = useState('');
    const [coursestartdate, setcoursestartdate] = useState('');
    const [courseenddate, setcourseenddated] = useState('');

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
        }).then(() => {
            alert("insert succesful");
        });
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
                <button onClick={submitCourseInfo}> Submit </button>
            </div>
            { UIUCCourseList.map((val) => {
                return <h1>Course Name: {val.coursename} | Start Date: {val.coursestartdate} | End Date: {val.courseenddate}</h1>
            })}
        </div>
    );
}

export default CourseList;
