import './App.css';

function App() {
  return (
    <div id="root">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-container">
          {/* Left-side: Portfolio title with image */}
          <div className="nav-logo">
            <img
              src="https://via.placeholder.com/40" /* Placeholder cartoon face */
              alt="Cartoon face of Kaysar"
              className="nav-logo-img"
            />
            <span>Kaysar's Portfolio</span>
          </div>
          {/* Right-side: Navigation links */}
          <ul className="nav-links">
            <li className="nav-bubble"><a href="/">Home</a></li>
            <li className="nav-bubble"><a href="/about">About Me</a></li>
            <li className="nav-bubble"><a href="/projects">Projects</a></li>
            <li className="nav-bubble"><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Main Content (Home Page) */}
      <main>
        <section id="home" className="about-section">
          <h2 className="subtitle">Welcome</h2>
          <div className="bubble">
            <span className="small-title">kaysar, senior data analyst</span>
            <h3 className="bubble-heading">Hello, I'm Kaysar 👋</h3>
            <p>
              I'm a dedicated <strong>Data Analyst</strong> and aspiring <strong>Data Scientist</strong>. This is the landing page of my portfolio. Navigate to the "About Me", "Projects", and "Contact" pages using the links above.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <p>© 2024 Kaysar. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
