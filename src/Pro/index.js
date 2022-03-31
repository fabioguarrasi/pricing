import logo from './logo.svg';
import Title from '../Title';
import Navbar from '../Navbar';
import './style.css';

function App() {
  return (
    <div className="Pro">
      <header className="Pro-header">
        <img src={logo} className="Pro-logo" alt="logo" />
        <Title title="Pricing > Pro" />
        <Navbar />
      </header>
    </div>
  );
}

export default App;
