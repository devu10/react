import { useState } from "react";
import "./App.css";
import ProfileCom from "./UserComponent";
import { UserBio } from "./UserComponent";

import { UserProfile } from "./UserProfile";

const App = () => {
  // const [name] = useState("devendra dahal");

  // const bio =
  //   "lorElit amet officia minim dolor ad deserunt nisi sit voluptate ullamco.";
  const [counter, setCounter] = useState(10);

  const increase = () => {
    setCounter(counter + 1);
  };

  const decrease = () => {
    setCounter(counter - 1);
  };
  console.log(counter);
  return (
    <div
      className="user-page"
      style={{
        color: "white",
      }}
    >
      {/* <ProfileCom snameProps={name} spropsBio={bio} />
      <ProfileCom snameProps={"swek ss"} spropsBio="alpha" />
      <ProfileCom snameProps="anav dahal" spropsBio="beta" />
      <UserBio /> */}
      {/*
      <div>{counter}</div>
      <button onClick={increase}>+</button>
  <button onClick={() => setCounter(counter - 1)}>-</button>*/}
      <UserProfile />
    </div>
  );
};

export default App;
