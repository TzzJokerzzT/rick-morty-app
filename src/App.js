import { useEffect, useState } from "react";
import APIcall from "./services/API";
import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import Error from "./components/Error";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [info, setInfo] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await APIcall({ page, search });
        if (data.error) throw Error("Esto es un error");
        setCharacters(data.results);
        setInfo(data.info);
      } catch (error) {
        setError(true);
      }
    };
    fetchData();
  }, [page, search, loading]);
  return (
    <div className="App">
      {error === true ? (
        <Error setError={setError} setSearch={setSearch} />
      ) : (
        <div className="container">
          <div className="row align-items-center">
            <Header setSearch={setSearch} />
            <Card characters={characters} />
            <Pagination page={page} setPage={setPage} info={info} />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
