// import logo from './logo.svg';
import './App.css';
import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("/movies")
      .then((r) => r.json())
      .then((movies) => console.log(movies[0]));
  }, []);

  return(    <div>
    <h1>Hello from React!</h1>
    <img src={movies[0].poster_url} alt={movies[0].title} />
  </div>
 )
}

export default App;
