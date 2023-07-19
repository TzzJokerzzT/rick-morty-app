const Sidebar = () => {
  return (
    <div className="d-flex justify-content-center col-12 pb-4">
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Species
        </button>
        <ul class="dropdown-menu">
          <li>
            <a className="dropdown-item" href="/">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/">
              Another action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/">
              Something else here
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
