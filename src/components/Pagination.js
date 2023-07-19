import ReactPaginate from "react-paginate";

const Pagination = ({ page, setPage, info }) => {
  return (
    <ReactPaginate
      className="pagination justify-content-center gap-1"
      pageCount={info.pages}
      forcePage={page === 1 ? 0 : page - 1}
      nextLabel="Next"
      previousLabel="Prev"
      nextClassName="btn btn-outline-success"
      previousClassName="btn btn-outline-success"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      breakClassName="page-item"
      breakLinkClassName="page-link"
      activeClassName="active"
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={(data) => {
        setPage(data.selected + 1);
      }}
    />
  );
};

export default Pagination;
