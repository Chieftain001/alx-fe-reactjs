import { Link, Outlet } from "react-router-dom";

function Profile() {
  return (
    <div>
      <h2>User Profile</h2>
      <nav style={{ marginBottom: "1rem" }}>
        <Link to="details">Profile Details</Link> |{" "}
        <Link to="settings">Profile Settings</Link>
      </nav>

      {/* Nested routes render here */}
      <Outlet />
    </div>
  );
}
export default Profile;
