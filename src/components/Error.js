import "../App.css";

const Error = ({ setError, setSearch }) => {
  const handlerError = (e) => {
    e.preventDefault();
    setError(false);
    setSearch("");
  };
  return (
    <div>
      <h1 className="sticky-md m-5">
        What are you looking for Morty for fuck sake click en Clear Filter you
        son of b!@@##$. Oh rigth ERROR 404
      </h1>
      <img
        className="img-fluid"
        src="https://i.imgur.com/WEt6HWB.gif"
        alt="error"
      />
      <div>
        <button
          onClick={handlerError}
          type="button"
          class="btn btn-success mt-4 btn-style"
        >
          Take me back
        </button>
      </div>
    </div>
  );
};

export default Error;
