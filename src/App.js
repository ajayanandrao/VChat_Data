import Home from './Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Movie from './Home/Movie';
import AddHospitals from './Hospital/AddHospitals';
import "./App.css";
import movie from "./movie.json";
import { useEffect, useState } from 'react';

function App() {

  return (
    <div className="App">
      <Router basename='/VChat_Data'>
        <Routes>
          <Route path='/' element={<AddHospitals />} />
          <Route path='/movie:id/' element={<Movie />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
