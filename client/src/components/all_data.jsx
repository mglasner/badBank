import React from "react";
import { Card, UserContext } from "./context.js";

async function getUsers() {
  let response = await fetch("users");
  return await response.json();
}

export default function AllData() {
  const ctx = React.useContext(UserContext);
  let counter = 0;
  const rows = ctx["users"].map((user, index1) => {
    return user.history.map((record, index2) => {
      counter += 1;
      return (
        <tr key={index1 + index2} className="table-dark">
          <td>{counter}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{record.type}</td>
          <td>
            {record.type === "deposit"
              ? `+${record.amount}`
              : `-${record.amount}`}
          </td>
          <td>{user.balance}</td>
        </tr>
      );
    });
  });

  const rows2 = getUsers().then((u) => {
    let users = u;
    let counter2 = 0;
    const rows2 = users.map((user, index1) => {
      counter2 += 1;
      return (
        <tr key={counter2} className="table-dark">
          <td>{counter}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>"lala"</td>
          <td>"lele"</td>
          <td>{user.balance}</td>
        </tr>
      );
    });
    return rows2;
  });

  return (
    <>
      <Card
        bgcolor="dark"
        title="Transaction History"
        body={
          <table className="table table-striped table-hover">
            <thead>
              <tr className="table-dark">
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Current Balance</th>
              </tr>
            </thead>
            <tbody>{rows3}</tbody>
          </table>
        }
      ></Card>
    </>
  );
}
