import './App.css';

function App() {
  return (
    <div id="root">
      <header>
        <h1>Welcome to My Portfolio</h1>
      </header>

      <main>
        <section className="intro bubble">
          <h2>About Me</h2>
          <p>
            Hello! I'm Kaysar, a dedicated Data Analyst and aspiring Data Scientist with a strong background in Python development, data analysis, and workflow automation. I specialize in transforming raw data into actionable insights, crafting tools that streamline processes, and building predictive models that drive impactful decisions.
          </p>
          <p>
            This portfolio is a work in progress and reflects my ongoing journey in tech. While I currently showcase a simple automated web scraper, my focus is on expanding my projects to demonstrate my problem-solving skills, technical expertise, and commitment to building meaningful, data-driven solutions. My ultimate goal is to leverage data to create value and solve real-world challenges.
          </p>
          <p className="mb-4">
            In addition to my data projects, I'm constantly learning and exploring new technologies to stay ahead in the ever-evolving tech landscape. Check back soon for more updates and exciting new projects.
          </p>
        </section>
      </main>

      <footer>
        <p>© 2024 Kaysar. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
