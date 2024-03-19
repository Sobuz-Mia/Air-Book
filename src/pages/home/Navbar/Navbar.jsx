const Navbar = () => {
  return (
    <div className="navbar bg-base-100 fixed z-10 -mt-10 max-w-6xl mx-auto right-14">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="font-bold menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Offer</a>
            </li>
            <li>
              <a>Airlines</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
        <p className="text-2xl font-sans text-[#FFB700] font-bold">
          Air<span className="text-[#006CE4]">Book</span>
        </p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold">
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>Offer</a>
          </li>
          <li>
            <a>Airlines</a>
          </li>
          <li>
            <a>About</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn text-xl bg-[#006CE4] text-white px-10">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
