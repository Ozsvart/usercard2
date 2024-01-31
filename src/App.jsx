import React from "react";
import { UserCard2 } from "./UserCard2";
import "./user.css";
import user from "./user.json";

function App() {
  return (
    <UserCard2
      name={user.name}
      age={user.age}
      phoneNumber={user.phoneNumber}
      address={user.address}
    />
  );
}

export default App;
