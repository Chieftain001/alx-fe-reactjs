import { Link, Outlet, Routes, Route } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

function Profile() {
  return (
    <div>
      <h2>User Profile</h2>

      <nav style={{ marginBottom: "1rem" }}>
        <Link to="details" style={{ marginRight: "8px" }}>Profile Details</Link>
        <Link to="settings">Profile Settings</Link>
      </nav>

      {/* Nested routes declared inside this component */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>

      {/* Outlet is optional here but harmless — it can be used if needed */}
      <Outlet />
    </div>
  );
}

export default Profile;
