import Home from './Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Movie from './Home/Movie';
import AddHospitals from './Hospital/AddHospitals';

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
