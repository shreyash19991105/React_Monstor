import { useState } from "react";

const Profile = () => {
  const [profileInfo, setProfileInfo] = useState({ name: "", age: "" });

  const handleName = (e) => {
    setProfileInfo((prev) => {
      return { ...prev, name: e.target.value };
    });
  };

  const handleAge = (e) => {
    setProfileInfo((prev) => {
      return { ...prev, age: e.target.value };
    });
  };

  return (
    <div>
      <h1>Profile</h1>

      {/* Render the name and age if they exist */}
      <div>
        {profileInfo.name ? `Name: ${profileInfo.name}` : "loading name..."}
      </div>
      <div>
        {profileInfo.age ? `Age: ${profileInfo.age}` : "loading age..."}
      </div>

      <div>
        <label htmlFor="name">UserName</label>
        <input
          type="text"
          id="name"
          value={profileInfo.name} // Controlled input
          onChange={handleName}
        />

        <label htmlFor="age">UserAge</label>
        <input
          type="number"
          id="age"
          value={profileInfo.age} // Controlled input
          onChange={handleAge}
        />
      </div>
    </div>
  );
};

export default Profile;
