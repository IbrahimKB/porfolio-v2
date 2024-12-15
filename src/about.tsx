import './App.css';

function About() {
  return (
    <div id="root">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span>Kaysar's Portfolio</span>
          </div>
          <ul className="nav-links">
            <li className="nav-bubble"><a href="/">Home</a></li>
            <li className="nav-bubble"><a href="/projects">Projects</a></li>
            <li className="nav-bubble"><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* About Content */}
      <main>
        <section className="about-section">
          <h2 className="subtitle">About Me</h2>
          <div className="bubble">
            <p>This is the dedicated About Me section, where you can include more in-depth details about yourself.</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default About;
