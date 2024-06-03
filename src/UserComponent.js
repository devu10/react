const Profile = ({ snameProps, spropsBio }) => {
  // const { snameProps, spropsBio } = dev;

  return (
    <div>
      <h1>heading for react {snameProps}</h1>
      <p>{spropsBio}</p>
      <hr></hr>
    </div>
  );
};

export default Profile;

export const UserBio = () => {
  return (
    <div>
      <h1>THis is user name bio second prop</h1>
      <p>lorem ipsom lorem ipsomlorem ipsomlorem ipsomlorem ipsom</p>
    </div>
  );
};
