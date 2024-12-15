import './App.css';

function App() {
  return (
    <div id="root">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-container">
          {/* Left-side: Portfolio title */}
          <div className="nav-logo">Kaysar's Portfolio</div>
          {/* Right-side: Navigation links with bubbles */}
          <ul className="nav-links">
            <li className="nav-bubble"><a href="#home">Home</a></li>
            <li className="nav-bubble"><a href="#projects">Projects</a></li>
            <li className="nav-bubble"><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <section id="home" className="about-section">
          <h2 className="subtitle">About Me</h2>
          <div className="bubble">
            <span className="small-title">kaysar.dev</span>
            <h3 className="bubble-heading">Hello, I'm Kaysar 👋</h3>
            <p>
              I'm a dedicated <strong>Data Analyst</strong> and aspiring <strong>Data Scientist</strong> with a strong background in <strong>Python development</strong>, <strong>data analysis</strong>, and <strong>workflow automation</strong>. I specialize in transforming raw data into <strong>actionable insights</strong>, crafting tools that streamline processes, and building <strong>predictive models</strong> that drive impactful decisions.
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
