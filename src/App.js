import logo from './logo.svg';
import './App.css';

function App() {

  const PersonalInfo = () => { 
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

  const Skills = () => { 
    return (
      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>CSS</li>
          <li>HTML</li>
        </ul>
      </section>
    );
  };

  const Experience = () => { 
    return (
      <section className="experience">
        <h2>Experience</h2>
        <div>
          <h3>Sales Associate </h3>
          <p>The Home Depot</p>
          <p>September 2019 - Present</p>
          <p>Provided customer service and maintained departments</p>
        </div>
        <div>
          <h3>Esports Supervisor</h3>
          <p>University of South Florida</p>
          <p>Aug 2022 - Jan 2023</p>
          <p>Lead and coordinated multiple esports events and personnel </p>
        </div>
      </section>
    );
  };

  const Education = () => {
    return (
      <section className="education">
        <h2>Education</h2>
        <div>
          <h3>Business Analytics and Information Systems</h3>
          <p>University of South Florida</p>
          <p>Graduation Year: 2025</p>
        </div>
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
