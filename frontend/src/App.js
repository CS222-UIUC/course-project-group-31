import './App.css';
import Login from './Login.js'
import SignUp from './SignUp.js'
import CourseList from './CourseList.js'
import CourseReview from './CourseReview.js'

import Home from './Home.js'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />}>
          </Route>
          <Route exact path="/SignUp" element={<SignUp />}>
          </Route>
          <Route exact path="/CourseList" element={<CourseList />}>
          </Route>
          <Route exact path="/Home" element={<Home />}>
          </Route>
          <Route exact path="/CourseReview" element={<CourseReview />}>
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
