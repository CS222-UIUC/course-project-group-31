import './App.css';
import Login from './Login.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />}>
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
