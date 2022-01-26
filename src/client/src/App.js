import './App.css';
import { useState } from "react" 
import Axios from 'axios'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function App() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [year, setYear] = useState(0);
  const [country, setCountry] = useState("");
  const [filmList, setFilmList] = useState([]);

  const addFilm = () => {
    Axios.post("http://filmbase-labproj28.apps.ocp.lab.cloudpak.site/create", {
      name: name,
      type: type,
      year: year,
      country: country,
    }).then(() => {
      console.log("success")
    });
    
  };

  const getFilms = () => {
    Axios.get("http://filmbase-labproj28.apps.ocp.lab.cloudpak.site/films").then((response) => {
      setFilmList(response.data)
    });
  }
  

  return (
    <div className="App">
      <div className="information">
        <p>WPROWADŹ DANE FILMU</p>
        <label>Nazwa filmu:</label>
        <input 
          type="text" 
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label>Gatunek:</label>
        <input type="text" 
          onChange={(event) => {
            setType(event.target.value);
          }}
        />
        <label>Rok produkcji:</label>
        <input type="text"
          onChange={(event) => {
            setYear(event.target.value);
          }}
        />
        <label>Kraj wydania:</label>
        <input type="text"
          onChange={(event) => {
            setCountry(event.target.value);
          }}
        />
        <button onClick={addFilm}>Dodaj</button>
      </div>
      {/* qwe */}
      <div className="filmy">
        <button onClick={getFilms}>Pokaż wszystkie</button>
        {filmList.map((val, key) => {
          return (
            <div className="film">
              <h3>Nazwa filmu: <p>{val.name}</p></h3>
              <h3>Gatunek: <p>{val.type}</p></h3> 
              <h3>Rok produkcji: <p>{val.year}</p></h3> 
              <h3>Kraj wydania: <p>{val.country}</p></h3> 
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
