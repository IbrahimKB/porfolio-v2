import './App.css';

function App() {
  // Dynamic greeting based on time of day
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  return (
    <div id="root">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <img
              src="https://via.placeholder.com/40"
              alt="Cartoon face of Kaysar"
              className="nav-logo-img"
            />
            <span>Kaysar's Portfolio</span>
          </div>
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
          <div className="bubble fade-in">
            <span className="small-title">kaysar, senior data analyst</span>
            <h3 className="bubble-heading">{`${getGreeting()}, I'm Kaysar 👋`}</h3>
            <p>
              {`I'm a dedicated Data Analyst and aspiring Data Scientist with a strong background in 
              Python development, data analysis, and workflow automation. I specialize in transforming raw data into 
              actionable insights, crafting tools that streamline processes, and building predictive models that drive 
              impactful decisions.`}
            </p>
            <p className="mb-4">
              {`This portfolio is a work in progress and reflects my ongoing journey in tech. While I currently showcase 
              a simple automated web scraper, my focus is on expanding my projects to demonstrate my problem-solving skills, 
              technical expertise, and commitment to building meaningful, data-driven solutions.`}
            </p>
            <p className="mb-4">
              {`In addition to my data projects, I'm constantly learning and exploring new technologies to stay ahead in 
              the ever-evolving tech landscape. Check back soon for more updates and exciting new projects.`}
            </p>

            {/* Skills Section */}
            <div className="skills">
              <h4>Skills</h4>
              <ul>
                <li>Python 🐍</li>
                <li>Data Analysis 📊</li>
                <li>Machine Learning 🤖</li>
                <li>Workflow Automation ⚙️</li>
              </ul>
            </div>
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
