import logo from "./logo.svg";
import "./App.css";
import MovieList from "./components/MovieList";
import Spinner from "./components/Spinner"; // <-- add
import { useState } from "react"; // <-- add
import ImprovedMovieList from "./components/ImprovedMovieList";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return <Spinner />;
  } else {
    return (
      <div className="App">
        {/* <MovieList /> */}
        <ImprovedMovieList />
      </div>
    );
  }
}

export default App;
