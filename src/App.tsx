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
            <li><a href="/">Home</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/about">About Me</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-container">
        {/* About Me Section */}
        <section className="about-section">
          <div className="about-content">
            <h2>About Me</h2>
            <p>
              {`${getGreeting()}, I'm Kaysar 👋! I'm a dedicated Data Analyst and aspiring Data Scientist with a strong 
              background in Python development, data analysis, and workflow automation. I specialize in transforming raw data into 
              actionable insights, crafting tools that streamline processes, and building predictive models that drive impactful decisions.`}
            </p>
            <p>
              {`This portfolio is a work in progress and reflects my ongoing journey in tech. While I currently showcase a 
              simple automated web scraper, my focus is on expanding my projects to demonstrate my problem-solving skills, 
              technical expertise, and commitment to building meaningful, data-driven solutions.`}
            </p>
          </div>

          {/* Current Role Highlight */}
          <div className="current-role-card">
            <p>Current Role: Senior Data Analyst</p>
          </div>
        </section>

        {/* Projects Carousel */}
        <section className="projects-carousel">
          <h2>Featured Projects</h2>
          <div className="carousel">
            <div className="carousel-item">Project 1: Automated Web Scraper</div>
            <div className="carousel-item">Project 2: Machine Learning Model</div>
            <div className="carousel-item">Project 3: Interactive Dashboard</div>
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
