import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [menu, setMenu] = React.useState(false);
  const [isCreateAccountActive, setCreateAccountActive] = React.useState(false);
  const [isDepositActive, setDepositActive] = React.useState(false);
  const [isWithdrawActive, setWithdrawActive] = React.useState(false);
  const [isAllDataActive, setAllDataActive] = React.useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  let show = menu ? "show" : "";

  const toogleCreateAccountActive = () => {
    setCreateAccountActive(true);
    setDepositActive(false);
    setWithdrawActive(false);
    setAllDataActive(false);
  };

  const toogleDepositActive = () => {
    setCreateAccountActive(false);
    setDepositActive(true);
    setWithdrawActive(false);
    setAllDataActive(false);
  };

  const toogleWithdrawActive = () => {
    setCreateAccountActive(false);
    setDepositActive(false);
    setWithdrawActive(true);
    setAllDataActive(false);
  };

  const toogleAllDataActive = () => {
    setCreateAccountActive(false);
    setDepositActive(false);
    setWithdrawActive(false);
    setAllDataActive(true);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to={"/"} className="navbar-brand">
          BadBank
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${show}`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                id="create-account"
                to={"create-account"}
                className={`nav-link ${isCreateAccountActive ? "active" : ""}`}
                onClick={toogleCreateAccountActive}
              >
                Create Account
                <span>Create new account</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"deposit"}
                className={`nav-link ${isDepositActive ? "active" : ""}`}
                onClick={toogleDepositActive}
              >
                Deposit
                <span>Make new deposit</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"withdraw"}
                className={`nav-link ${isWithdrawActive ? "active" : ""}`}
                onClick={toogleWithdrawActive}
              >
                Withdraw
                <span>Make new withdraw</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"all-data"}
                className={`nav-link ${isAllDataActive ? "active" : ""}`}
                onClick={toogleAllDataActive}
              >
                All Data
                <span>Sorted data</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
