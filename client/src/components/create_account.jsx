import React from "react";
import { Card } from "./context.js";

export default function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function validate(field, label) {
    if (!field) {
      setStatus("Error: " + label);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  function validatePassword(field) {
    if (field.length < 8) {
      setStatus("Password must have at least 8 characters");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  function handleCreate() {
    if (!validate(name, "name")) return;
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;
    if (!validatePassword(password)) return;

    (async () => {
      await fetch("users/create", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
    })();

    setShow(false);
  }

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
  }

  return (
    <Card
      bgcolor="dark"
      header="Create Account"
      status={status}
      body={
        show ? (
          <>
            Name
            <br />
            <input
              type="input"
              className="form-control"
              id="name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
            <br />
            Email address
            <br />
            <input
              type="input"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <br />
            Password
            <br />
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <br />
            <button
              type="submit"
              className={`btn btn-light ${
                name.length === 0 && email.length === 0 && password.length === 0
                  ? "disabled"
                  : ""
              }`}
              onClick={handleCreate}
            >
              Create Account
            </button>
          </>
        ) : (
          <>
            <h5>Success</h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}>
              Add another account
            </button>
          </>
        )
      }
    />
  );
}
