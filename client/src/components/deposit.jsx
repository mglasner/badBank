import React from "react";
import { Card, UserContext } from "./context.js";

export default function Deposit() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [user, setUser] = React.useState("");
  const [deposit, setDeposit] = React.useState(0);
  const ctx = React.useContext(UserContext);

  function validate_deposit(field) {
    if (isNaN(field)) {
      setStatus("Please enter a valid number");
      setDeposit(0);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    if (field <= 0) {
      setStatus("Deposits must be greater than $0");
      setDeposit(0);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  function validate_user(field) {
    if (field === "") {
      setStatus("Please select an user from the dropdown menu");
      setUser("");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  function handleDeposit() {
    if (!validate_user(user)) return;
    if (!validate_deposit(deposit)) return;
    let current_user = findCurrentUser();
    current_user.balance += deposit / 1;
    current_user.history.unshift({ type: "deposit", amount: deposit });
    setShow(false);
  }

  function clearForm() {
    setDeposit(0);
    setUser("");
    setShow(true);
  }

  function findCurrentUser() {
    return ctx.users.filter((u) => u.name === user)[0];
  }

  return (
    <Card
      bgcolor="dark"
      header={`Balance: ${
        user
          ? `$${findCurrentUser().balance} (${user})`
          : "(Select user to display balance)"
      } `}
      status={status}
      body={
        show ? (
          <>
            Select User
            <br />
            <select
              name="users"
              className="form-control"
              onChange={(e) => setUser(e.currentTarget.value)}
            >
              <option value="" key="-1"></option>
              {ctx.users.map((user, index) => (
                <option value={user.name} key={index}>
                  {user.name}
                </option>
              ))}
            </select>
            <br />
            Deposit
            <br />
            <input
              type="number"
              className="form-control"
              id="name"
              placeholder="Enter deposit"
              value={deposit}
              onChange={(e) => setDeposit(e.currentTarget.value)}
            />
            <br />
            <button
              type="submit"
              className={`btn btn-light ${
                user === "" && deposit === 0 ? "disabled" : ""
              }`}
              onClick={handleDeposit}
            >
              Deposit
            </button>
          </>
        ) : (
          <>
            <h5>Success</h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}>
              Add another deposit
            </button>
          </>
        )
      }
    />
  );
}
