import './App.css';

function Contact() {
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
            <li className="nav-bubble"><a href="/projects">Projects</a></li>
          </ul>
        </div>
      </nav>

      {/* Contact Content */}
      <main>
        <section className="about-section">
          <h2 className="subtitle">Contact</h2>
          <div className="bubble">
            <p>Contact information goes here.</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Contact;
