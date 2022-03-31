import logo from './logo.svg';
import Title from '../Title';
import Navbar from '../Navbar';
import './style.css';

function App() {
  return (
    <div className="Regular">
      <header className="Regular-header">
        <img src={logo} className="Regular-logo" alt="logo" />
        <Title title="Pricing > Regular" />
        <Navbar />
      </header>
    </div>
  );
}

export default App;
