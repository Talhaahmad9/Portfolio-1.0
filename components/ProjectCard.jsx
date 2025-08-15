export default function ProjectCard({
  title,
  description,
  image,
  techStack,
  date,
  liveLink,
  repoLink,
  isFeatured,
}) {
  return (
    <section className="ProjectCard">
      <h2 className="project-title">{title}</h2>
      <p className="project-description">{description}</p>

      {image && (
        <img className="project-image" src={image} alt={`${title} preview`} />
      )}

      <ul className="project-techStack">
        {techStack.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>

      <p className="project-date">Completed: {date}</p>

      {liveLink && (
        <p className="project-liveLink">
          Live Link:{" "}
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            Visit Site
          </a>
        </p>
      )}

      {repoLink && (
        <p className="project-repoLink">
          Repository:{" "}
          <a href={repoLink} target="_blank" rel="noopener noreferrer">
            View Code
          </a>
        </p>
      )}

      {isFeatured && (
        <span className="project-featured">🌟 Featured Project</span>
      )}
    </section>
  );
}