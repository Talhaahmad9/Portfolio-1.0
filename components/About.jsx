export default function About() {
    return <>
        <section className="hero container">
            <img src="../assets/profile-photo.JPG" alt="profile-photo" />
            <h3 id="name">Hi, Iam Talha Ahmad</h3>
            <p className="intro">I’m a full-stack developer with a sharp eye for frontend design and a solid grasp of backend architecture. From crafting responsive React interfaces to building secure RESTful APIs with Node and Express, I focus on delivering clean, scalable web solutions. I work comfortably across the stack—customizing WordPress, integrating PostgreSQL databases, and implementing OAuth for authentication—while always keeping user experience at the core.</p>
            <div class="cta-buttons">
                <a href="/contact" className="btn primary animate-btn">Hire Me</a>
                <a href="/projects" className="btn secondary animate-btn">View Projects</a>
            </div>
        </section>
        <section className="skills container">
            <div className="skills__category">
                <h2 className="skills__heading">Frontend</h2>
                <ul className="skills__list">
                    <li className="skills__item">HTML</li>
                    <li className="skills__item">CSS</li>
                    <li className="skills__item">JavaScript</li>
                    <li className="skills__item">React</li>
                </ul>
            </div>

            <div className="skills__category">
                <h2 className="skills__heading">Backend</h2>
                <ul className="skills__list">
                    <li className="skills__item">Node.js</li>
                    <li className="skills__item">Express</li>
                    <li className="skills__item">REST APIs</li>
                    <li className="skills__item">PostgreSQL</li>
                    <li className="skills__item">OAuth</li>
                </ul>
            </div>

            <div className="skills__category">
                <h2 className="skills__heading">Tools & Platforms</h2>
                <ul className="skills__list">
                    <li className="skills__item">Git</li>
                    <li className="skills__item">WordPress (LocalWP)</li>
                    <li className="skills__item">VS Code</li>
                    <li className="skills__item">Postman</li>
                </ul>
            </div>

            <div className="skills__category">
                <h2 className="skills__heading">Currently Learning</h2>
                <ul className="skills__list">
                    <li className="skills__item">Python</li>
                    <li className="skills__item">Machine Learning</li>
                </ul>
            </div>
        </section>
        <section className="journey container">
            <h2 className="section__title">My Journey</h2>
            <div className="timeline">
                <div className="timeline__item">
                    <span className="timeline__date">2023–2025</span>
                    <h3 className="timeline__title">Foundation & Freelance</h3>
                    <p className="timeline__desc">
                        Started BSCS at IoBM, built a WordPress site for my family's textile business, and learned vanilla frontend and backend development.
                    </p>
                </div>
                <div className="timeline__item">
                    <span className="timeline__date">2024</span>
                    <h3 className="timeline__title">Leveling Up</h3>
                    <p className="timeline__desc">
                        Began learning React, refined UI/UX skills, and started experimenting with responsive layouts and design polish.
                    </p>
                </div>
            </div>
        </section>
        <section className="values container">
            <h2 className="section__title">My Values</h2>
            <div className="values__grid">
                <div className="value__card">
                    <h3 className="value__title">Clarity</h3>
                    <p className="value__desc">I believe clean layouts and intuitive navigation create better user experiences.</p>
                </div>
                <div className="value__card">
                    <h3 className="value__title">Creativity</h3>
                    <p className="value__desc">I love experimenting with colors, spacing, and animations to make designs feel alive.</p>
                </div>
                <div className="value__card">
                    <h3 className="value__title">Growth</h3>
                    <p className="value__desc">Every project is a chance to learn, improve, and push my skills further.</p>
                </div>
            </div>
        </section>

        <section className="hobbies container">
            <h2 className="section__title">When I'm Not Coding</h2>
  <div className="hobbies__grid">
    <div className="hobby__card">
      <h3 className="hobby__title">🎮 Modding Games</h3>
      <p className="hobby__desc">I love tweaking and troubleshooting mods for Bannerlord and Minecraft.</p>
    </div>
    <div className="hobby__card">
      <h3 className="hobby__title">🕹️ Competitive Gaming</h3>
      <p className="hobby__desc">I play COD Warzone, War Robots, and Modern Warships (Armstrom)—tactical gameplay is my jam.</p>
    </div>
    <div className="hobby__card">
      <h3 className="hobby__title">🎨 UI/UX Exploration</h3>
      <p className="hobby__desc">I experiment with color theory, spacing, and layout just for fun.</p>
    </div>
    <div className="hobby__card">
      <h3 className="hobby__title">📚 Learning ML</h3>
      <p className="hobby__desc">I’m diving into Python and machine learning to expand my skillset.</p>
    </div>
  </div>

        </section>

    </>
}
