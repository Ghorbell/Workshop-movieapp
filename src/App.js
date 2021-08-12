import { useState } from "react";
import "./App.css";
import List from "./Component/List";
import { moviesData } from "./movieData";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Component/Search";
import AddMovie from "./Component/AddMovie";
function App() {
  const [movies, setMovies] = useState(moviesData);
  const handleAdd = (newMovie) => {
    setMovies([...movies, newMovie]);
  };
  const [search, setSearch] = useState("");
  const handleSearch = (input) => {
    setSearch(input);
  };
  const [rate, setRate] = useState(1);
  const handleRate = (rating) => {
    setRate(rating);
  };

  return (
    <div className="App">
      <Search handleSearch={handleSearch} handleRate={handleRate} />
      <List
        films={movies.filter((elt) =>
          elt.name.toLowerCase().includes(search.toLowerCase().trim()) 
          &&elt.rating>=rate
        )}
      />
      <AddMovie handleAdd={handleAdd} />
    </div>
  );
}

export default App;
