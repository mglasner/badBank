import React from "react";
import { Card, UserContext } from "./context.js";

export default function Withdraw() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [user, setUser] = React.useState("");
  const [withdraw, setWithdraw] = React.useState(0);
  const ctx = React.useContext(UserContext);

  function validate_withdraw(field) {
    let current_user = findCurrentUser();

    if (isNaN(field)) {
      setStatus("Please enter a valid number");
      setWithdraw(0);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    if (field <= 0) {
      setStatus("Withdraws must be greater than $0");
      setWithdraw(0);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    if (field >= current_user.balance) {
      setStatus(
        `Maximum amount available to withdraw: $${current_user.balance}`
      );
      setWithdraw(0);
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

  function handleWithdraw() {
    if (!validate_user(user)) return;
    if (!validate_withdraw(withdraw)) return;
    let current_user = findCurrentUser();
    current_user.balance -= withdraw / 1;
    current_user.history.unshift({ type: "withdraw", amount: withdraw });
    setShow(false);
  }

  function clearForm() {
    setWithdraw(0);
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
            Withdraw
            <br />
            <input
              type="number"
              className="form-control"
              id="name"
              placeholder="Enter withdraw"
              value={withdraw}
              onChange={(e) => setWithdraw(e.currentTarget.value)}
            />
            <br />
            <button
              type="submit"
              className={`btn btn-light ${
                user === "" && withdraw === 0 ? "disabled" : ""
              }`}
              onClick={handleWithdraw}
            >
              Withdraw
            </button>
          </>
        ) : (
          <>
            <h5>Success</h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}>
              Make another withdraw
            </button>
          </>
        )
      }
    />
  );
}
