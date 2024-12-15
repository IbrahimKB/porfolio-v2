import './App.css';

function Projects() {
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
            <li className="nav-bubble"><a href="/about">About Me</a></li>
            <li className="nav-bubble"><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Projects Content */}
      <main>
        <section className="about-section">
          <h2 className="subtitle">Projects</h2>
          <div className="bubble">
            <p>Projects will be showcased here.</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Projects;
