import React from 'react';
 
const NavBar = () => {
  return (
      <nav className="navbar justify-center d-flex navbar-light bg-light">
          <a href="https://react.dev">
              <img
                  src="favicon.ico"
                  style={{ height: "48px" }}
                  alt="logo"
              />
          </a>
          <a
              className="navbar-brand"
              href="https://www.youtube.com/watch?v=Ke90Tje7VS0"
          >
              Watch: "React for Beginners"
          </a>
          <a href="https://getbootstrap.com">
              <img
                  src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png"
                  style={{ height: "48px" }}
                  alt="logo"
              />
          </a>
      </nav>
  );
};


export default NavBar;