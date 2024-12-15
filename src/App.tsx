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
          {/* Subtitle */}
          <h2 className="subtitle">About Me</h2>
          {/* About section bubble */}
          <div className="bubble">
            <span className="small-title">kaysar.dev</span>
            <h3 className="bubble-heading">Hello, I'm Kaysar 👋</h3>
            <p>
              I'm a dedicated <strong>Data Analyst</strong> and aspiring <strong>Data Scientist</strong> with a strong background in <strong>Python development</strong>, <strong>data analysis</strong>, and <strong>workflow automation</strong>. I specialize in transforming raw data into <strong>actionable insights</strong>, crafting tools that streamline processes, and building <strong>predictive models</strong> that drive impactful decisions.
            </p>
            <p>
              This portfolio is a work in progress and reflects my ongoing journey in tech. While I currently showcase a simple automated web scraper, my focus is on expanding my projects to demonstrate my <strong>problem-solving skills</strong>, <strong>technical expertise</strong>, and commitment to building meaningful, <strong>data-driven solutions</strong>.
            </p>
            <p className="mb-4">
              In addition to my data projects, I'm constantly learning and exploring new technologies to stay ahead in the ever-evolving tech landscape. Check back soon for more updates and exciting new projects.
            </p>
            <a href="#projects" className="cta-button">Learn More →</a>
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
