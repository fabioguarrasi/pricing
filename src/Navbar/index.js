import { Link } from 'react-router-dom';
import './style.css';

function Navbar() {
  return (
    <nav>
      <Link to="/">Homepage</Link>
      <Link to="/regular">Regular</Link>
      <Link to="/pro">Pro</Link>
    </nav>
  );
}

export default Navbar;