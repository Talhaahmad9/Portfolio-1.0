import profilePic from "../assets/profile-photo.jpg";

export default function Home() {
  return (
    <section className="home container">
      <img src={profilePic} alt="Talha Ahmad" />
      <h3 id="name">Talha Ahmad</h3>
      <p className="intro">Hi, I’m a web developer with a passion for clean design and practical problem-solving. I build responsive websites using WordPress and React, and I’m currently exploring machine learning to expand my skillset. This portfolio is a glimpse into my work, my growth, and the creative energy I bring to every project.</p>
      <div class="cta-buttons">
        <a href="/contact" className="btn primary animate-btn">Hire Me</a>
        <a href="/projects" className="btn secondary animate-btn">View Projects</a>
      </div>
    </section>
  );
}
