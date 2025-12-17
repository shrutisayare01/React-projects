import UserInfo from "./UserInfo";

function UserProfile() {
  const userName = "Shruti";
  const userAge = 23;

  return (
    <div>
      <h2>User Profile</h2>
      <UserInfo name={userName} age={userAge} />
    </div>
  );
}

export default UserProfile;
