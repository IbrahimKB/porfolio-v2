import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [greeting, setGreeting] = useState('');

  // Dynamic Greeting Logic
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 5) setGreeting('Night Owl? I\'m Kaysar 🦉');
    else if (hour < 8) setGreeting('Rise and Shine! I\'m Kaysar 👋');
    else if (hour < 12) setGreeting('Good Morning! I\'m Kaysar ☕');
    else if (hour < 17) setGreeting('Good Afternoon! I\'m Kaysar 🌞');
    else if (hour < 21) setGreeting('Good Evening! I\'m Kaysar 🌙');
    else setGreeting('Burning the Midnight Oil? I\'m Kaysar 💻');
  }, []);

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
            <li className="nav-bubble active"><a href="/">Home</a></li>
            <li className="nav-bubble"><a href="/about">About Me</a></li>
            <li className="nav-bubble"><a href="/projects">Projects</a></li>
            <li className="nav-bubble"><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {/* About Section */}
        <section id="home" className="about-section">
          <div className="bubble fade-in">
            <span className="small-title">kaysar, senior data analyst</span>
            <h3 className="bubble-heading">{greeting}</h3>
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
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="projects-section">
          <h4>Featured Projects</h4>
          <div className="project-cards">
            <div className="project-card">Project 1: Automated Web Scraper</div>
            <div className="project-card">Project 2: Machine Learning Model</div>
            <div className="project-card">Project 3: Interactive Dashboard</div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <p>© 2024 Kaysar. All rights reserved.</p>
        <a href="https://linkedin.com/in/your-profile" className="social-link">LinkedIn</a>
      </footer>
    </div>
  );
}

export default App;
