import { useState } from "react";
import "./App.css";
import ProfileCom from "./UserComponent";
import { UserBio } from "./UserComponent";

const App = () => {
  // const [name] = useState("devendra dahal");

  // const bio =
  //   "lorElit amet officia minim dolor ad deserunt nisi sit voluptate ullamco.";
  const [counter, setCounter] = useState(10);

  const increase = () => {
    setCounter(counter + 1);
  };
  console.log(counter);
  return (
    <>
      hello
      {/* <ProfileCom snameProps={name} spropsBio={bio} />
      <ProfileCom snameProps={"swek ss"} spropsBio="alpha" />
      <ProfileCom snameProps="anav dahal" spropsBio="beta" />
      <UserBio /> */}
      <div>{counter}</div>
      <button onClick={increase}>+</button>
      <button>-</button>
    </>
  );
};

export default App;
