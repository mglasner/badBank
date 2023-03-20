import { Card } from "./context.js";

export default function Home() {
  const logo = require("./bank.png");
  return (
    <>
      <Card
        txtcolor="light"
        bgcolor="dark"
        header="BadBank Landing Module"
        title="Welcome to the bank"
        text="You can move around using the navigation bar."
        body={<img src={logo} className="img-fluid" alt="" />}
      />
    </>
  );
}
