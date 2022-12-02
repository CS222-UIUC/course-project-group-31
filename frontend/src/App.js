import './App.css';
import Login from './Login.js'
import SignUp from './SignUp.js'
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
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
