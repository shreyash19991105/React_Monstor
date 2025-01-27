const UserStatus = ({ loggedIn, isAdmin }) => {
  return (
    <>
      <div>{loggedIn && isAdmin && "Welcome Admin"}</div>
      <div>{loggedIn && !isAdmin && "Welcome User"}</div>
    </>
  );
};

export default UserStatus;
