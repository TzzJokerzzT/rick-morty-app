const Header = ({ setSearch }) => {
  const handlerSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <div>
      <h1>Rick and Morty</h1>
      <form className="pb-3">
        <input type="text" onChange={handlerSearch} />
      </form>
    </div>
  );
};

export default Header;
