const Cards = ({ characters }) => {
  return (
    <>
      {characters.map((items) => {
        return (
          <div key={items.id} className="col-xl-3 col-md-4 col-12 mb-3">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={items.image}
                className="card-img-top"
                alt={items.name}
              />
              <div className="card-body">
                <h5 className="card-title">{items.name}</h5>
                <p className="card-text">Status: {items.status}</p>
                <p className="card-text">Species: {items.species}</p>
                <p className="card-text">Gender: {items.gender}</p>
                <a href="/" className="btn btn-primary">
                  Get Info
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Cards;
