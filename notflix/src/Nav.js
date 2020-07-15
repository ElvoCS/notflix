import React, { useEffect, handleShow, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://fontmeme.com/permalink/200715/059dca03259b9ed6f884568e9a03da35.png"
        alt="Notflix Logo"
      />
      <img
        className="nav_avatar"
        src="//i.imgur.com/QpLXDs4.png"
        alt="Notflix Logo"
      />
    </div>
  );
}

export default Nav;
