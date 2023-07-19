const APIcall = async ({ page, search }) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?name=${search}&page=${page}`
  );
  const data = await response.json();
  return data;
};

export default APIcall;
