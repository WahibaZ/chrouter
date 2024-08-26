
import './App.css';
import MovieList from "./component/MovieList";
import MovieData from "./component/MovieData";
import Description from "./component/Description";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
   
    
       <Router>
      <div className="App">
        <Routes>
          {/* définir les routes  */}
          <Route path="/" element={<MovieList />} />
          <Route path="/movie/:id" element={<Description />} />
          {/* :id est un paramètre de route dynamique */}
        </Routes>
      </div>
    </Router>
      
    
    
  );
}

export default App;
