import React from "react";
import myImage from './uss.jpg'
const Navbar = ({ currentUserEmail, onLogout }) => {
  return (<>
    <header>
      {/* Sidenav */}
      <div
        id="sidenav-1"
        className="sidenav"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "250px",
          height: "100vh",
          backgroundColor: "grey",
          color: "white",
          paddingTop: "56px", // leave space for navbar
          overflowY: "auto",
          zIndex: 1030,
        }}
        role="navigation"
      >
        <a
          href="#!"
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "1rem",
          }}
        >
          <img
            src={myImage}
            alt="USS Logo"
            height="100"
            draggable="false"
          />
        </a>
        <ul className="sidenav-menu" style={{ listStyle: "none", paddingLeft: "1rem" }}>
          <li className="sidenav-item" style={{ padding: "10px 0" }}>
            <a href="#!" style={{ color: "white", textDecoration: "none" }}>
              <i className="fas fa-home fa-fw me-3"></i> Home
            </a>
          </li>
          <li className="sidenav-item" style={{ padding: "10px 0" }}>
            <a href="#!" style={{ color: "white", textDecoration: "none" }}>
              <i className="fas fa-fire fa-fw me-3"></i> Trending
            </a>
          </li>
          {/* Add more links similarly */}
        </ul>
      </div>

      {/* Navbar */}
      <nav
        id="main-navbar"
        className="navbar navbar-expand-lg navbar-light bg-white fixed-top"
        style={{
          height: "56px",
          paddingLeft: "250px", // offset for sidenav
          boxShadow: "0 2px 4px rgba(0,0,0,.1)",
          zIndex: 1040,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingRight: "1rem",
        }}
      >
        <a href="/" className="navbar-brand" style={{ fontWeight: "bold" }}>
          StudentGrader
        </a>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          {currentUserEmail ? (
            <>
              <span>Welcome, {currentUserEmail}</span>
              <button className="btn btn-outline-danger btn-sm" onClick={onLogout}>
                Logout
              </button>
            </>
          ) : (
            <span>Please login or signup</span>
          )}
        </div>
      </nav>
    </header>
    <footer>
        <div>
            <h3 style={{color:"grey"}}>work in progress.</h3>
        </div>
    </footer>
    </>
    
  );
};

export default Navbar;
