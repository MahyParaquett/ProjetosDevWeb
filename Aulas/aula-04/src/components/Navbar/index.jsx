import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <a href="https://www.google.com" target="_blank">
            Google
          </a>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/contatos">Contatos</Link>
        </li>
      </ul>
    </nav>
  );
}
