const Profile = (dev) => {
  const { nameProps, bio } = dev;
  console.log(dev);
  return (
    <div>
      <h1>heading for react {nameProps}</h1>
      <p>{bio}</p>
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
