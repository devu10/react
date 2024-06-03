import { useState } from "react";
import "./App.css";
import ProfileCom from "./UserComponent";
import { UserBio } from "./UserComponent";

const App = () => {
  const [name] = useState("devendra dahal");

  const bio =
    "lorElit amet officia minim dolor ad deserunt nisi sit voluptate ullamco.";
  return (
    <>
      <ProfileCom snameProps={name} spropsBio={bio} />
      <ProfileCom snameProps={"swek ss"} spropsBio="alpha" />
      <ProfileCom snameProps="anav dahal" spropsBio="beta" />
      <UserBio />
    </>
  );
};

export default App;
