import logo from './logo.svg';
import './App.css';

function App() {

  const PersonalInfo = () => { //Personal Information Section
    return (
      <section className="personal-info">
        <h2>Personal Information</h2>
        <p>Name: Michael Rueda</p>
        <p>Email: michael.a.rueda22@gmail.com</p>
        <p>Biography: Senior at the University of South Florida looking to advance in the world</p>
        <p>Linkedin: https://www.linkedin.com/in/michael-rueda-thehomedepot/</p>
      </section>
    );
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
