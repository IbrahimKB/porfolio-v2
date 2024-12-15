import './App.css';

function App() {
  return (
    <div id="root">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-container">
          {/* Left-side: Portfolio title */}
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

      {/* Main Content */}
      <main>
        <section id="home" className="about-section">
          <h2 className="subtitle">Welcome</h2>
          <div className="bubble">
            <span className="small-title">kaysar.dev</span>
            <h3 className="bubble-heading">Hello, I'm Kaysar 👋</h3>
            <p>
              {`Hello! I'm Kaysar, a dedicated Data Analyst and aspiring Data Scientist with a strong background in 
              Python development, data analysis, and workflow automation. I specialize in transforming raw data into 
              actionable insights, crafting tools that streamline processes, and building predictive models that drive 
              impactful decisions.`}
            </p>
            <p className="mb-4">
              {`This portfolio is a work in progress and reflects my ongoing journey in tech. While I currently showcase 
              a simple automated web scraper, my focus is on expanding my projects to demonstrate my problem-solving skills, 
              technical expertise, and commitment to building meaningful, data-driven solutions. My ultimate goal is to 
              leverage data to create value and solve real-world challenges.`}
            </p>
            <p className="mb-4">
              {`In addition to my data projects, I'm constantly learning and exploring new technologies to stay ahead in 
              the ever-evolving tech landscape. Check back soon for more updates and exciting new projects.`}
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
