import "./App.css";
import ProfileCom from "./UserComponent";
import { UserBio } from "./UserComponent";

const App = () => {
  const name = "devendra dahal";
  const bio =
    "lorElit amet officia minim dolor ad deserunt nisi sit voluptate ullamco.";
  return (
    <>
      <ProfileCom nameProps={name} propsBio={bio} />
      <ProfileCom nameProps={"swek ss"} propsBio="alpha" />
      <UserBio />
    </>
  );
};

export default App;
