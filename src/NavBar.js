import React from "react";
import "./index.css";

export function NavBar({
  toggleMenu,
  changePage,
  isLoggedIn,
  loginData,
  evidenceList,
  setIsLoggedIn,
  setIsAdmin,
  isAdmin,
}) {
  const navItems = [
    { text: "Informace", page: "informace", condition: !isLoggedIn },
    { text: "Registrace", page: "register", condition: !isLoggedIn },
    { text: "Login", page: "login", condition: !isLoggedIn },
    { text: "Evidence", page: "evidence", condition: isAdmin },
    { text: "Contact", page: "contact", condition: !isLoggedIn },
    { text: "Pojištěnci", page: "pojistenci", condition: isAdmin },
    { text: "Pojištění", page: "pojisteni", condition: isLoggedIn },
    { text: "Udalosti", page: "Udalosti", condition: isLoggedIn },
    {
      text: loginData.firstName,
      page: "login-jmeno",
      condition: isLoggedIn,
    },
  ];

  const handleLogout = () => {
    changePage("login");
    setIsLoggedIn(false);
    setIsAdmin(false);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <p>Pojišťovna React</p>
        </div>
        <div className="bar-container" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className="nav-links" id="nav-links">
          {navItems.map(
            (item, index) =>
              item.condition && (
                <li key={index}>
                  <a
                    href="#"
                    alt={item.text}
                    onClick={() => changePage(item.page)}
                  >
                    {item.text}
                  </a>
                </li>
              )
          )}
          {isLoggedIn && (
            <li>
              <a href="#" alt="Odhlásit" onClick={handleLogout}>
                Odhlásit
              </a>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}
