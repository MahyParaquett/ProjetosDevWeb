import { Link } from "react-router-dom";
import "./style.css";

export default function Navbar({ user }) {
  return (
    <nav>
      <ul>
        <li>
          {user == undefined ? (
            console.log("É necessario fazer login antes de acessar")
          ) : (
            <Link to={`/home/${user}`}>Home</Link>
          )}
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to={`/tasklist/${user}`}>Task list</Link>
        </li>
      </ul>
    </nav>
  );
}
