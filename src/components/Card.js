import Cards from "./Cards";
import Loading from "./Loading";

const Card = ({ characters }) => {
  return (
    <>
      {<Loading /> === true ? <Loading /> : <Cards characters={characters} />}
    </>
  );
};

export default Card;
