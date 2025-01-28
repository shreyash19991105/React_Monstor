import { useContext } from "react";
import { UserContext } from "./UserContext";

const UserProfile = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>UserProfile</h1>
      <div>UserName : {user.name}</div>
    </div>
  );
};

export default UserProfile;
