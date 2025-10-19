import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/login">Login</Link> |{" "}
      <Link to="/profile">Go to Profile (Protected)</Link> |{" "}
      <Link to="/post/1">View Post 1 (Dynamic Route)</Link>
    </div>
  );
}
export default Home;
