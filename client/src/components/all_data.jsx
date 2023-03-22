import React from "react";
import { Card } from "./context.js";

export default function AllData() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch("/users")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  let counter = 0;
  const rows = data.map((user, index1) => {
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
            <tbody>{rows}</tbody>
          </table>
        }
      ></Card>
    </>
  );
}
