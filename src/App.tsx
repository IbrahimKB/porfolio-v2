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
          {/* Right-side: Navigation links with bubbles */}
          <ul className="nav-links">
            <li className="nav-bubble"><a href="#home">Home</a></li>
            <li className="nav-bubble"><a href="#about">About Me</a></li>
            <li className="nav-bubble"><a href="#projects">Projects</a></li>
            <li className="nav-bubble"><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {/* Home Section */}
        <section id="home" className="about-section">
          <h2 className="subtitle">About Me</h2>
          <div className="bubble">
            <span className="small-title">kaysar.dev</span>
            <h3 className="bubble-heading">Hello, I'm Kaysar 👋</h3>
            <p>
              I'm a dedicated <strong>Data Analyst</strong> and aspiring <strong>Data Scientist</strong> with a strong background in <strong>Python development</strong>, <strong>data analysis</strong>, and <strong>workflow automation</strong>. I specialize in transforming raw data into <strong>actionable insights</strong>, crafting tools that streamline processes, and building <strong>predictive models</strong> that drive impactful decisions.
            </p>
            <p>
              This portfolio is a work in progress and reflects my ongoing journey in tech. While I currently showcase a simple automated web scraper, my focus is on expanding my projects to demonstrate my <strong>problem-solving skills</strong>, <strong>technical expertise</strong>, and commitment to building meaningful, <strong>data-driven solutions</strong>.
            </p>
            <p>
              In addition to my data projects, I'm constantly learning and exploring new technologies to stay ahead in the ever-evolving tech landscape. Check back soon for more updates and exciting new projects.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about-section">
          <h2 className="subtitle">About Me</h2>
          <div className="bubble">
            <p>This is the dedicated About Me section, where you can include more in-depth details about yourself.</p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="about-section">
          <h2 className="subtitle">Projects</h2>
          <div className="bubble">
            <p>Projects will be showcased here.</p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="about-section">
          <h2 className="subtitle">Contact</h2>
          <div className="bubble">
            <p>Contact information goes here.</p>
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
