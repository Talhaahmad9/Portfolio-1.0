import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="projects container">
      <ProjectCard
        title="Investment Calculator"
        description="A responsive React app that calculates investment returns based on user input. Built with modular components and TypeScript, it features dynamic calculations and a clean UI."
        techStack={["React", "TypeScript", "CSS", "Vite"]}
        date="January 2025"
        repoLink="https://github.com/Talhaahmad9/React-investment-calculator"
        isFeatured={true}
      />
      <ProjectCard
        title="Tic Tac Toe Game"
        description="A responsive React game where two players take turns placing symbols. Includes win/draw detection, rematch functionality, and a clean interactive UI."
        techStack={["React", "JavaScript", "CSS", "HTML"]}
        date="January 2025"
        repoLink="https://github.com/Talhaahmad9/React-Tic-Tac-Toe"
        isFeatured={true}
      />
      <ProjectCard
        title="React Basics Project"
        description="A beginner-friendly React frontend that demonstrates core concepts like components, state, props, and JSX structure. Built with Create React App and styled for clarity."
        techStack={["React", "JavaScript", "CSS", "HTML"]}
        date="December 2024"
        repoLink="https://github.com/Talhaahmad9/react-basics-project"
        isFeatured={false}
      />
      <ProjectCard
        title="Tic-Tac-Toe Game"
        description="A classic two-player game built with Java Swing. Features include turn tracking, winning highlights, and a restart option."
        techStack={["Java", "Swing", "OOP"]}
        date="May 2024"
        repoLink="https://github.com/Talhaahmad9/TicTacToe"
        isFeatured={true}
      />
      <ProjectCard
        title="Connect Four Game"
        description="A two-player Connect Four game built with Java Swing. Features drag-and-drop disc placement and a 5x6 grid for strategic gameplay."
        techStack={["Java", "Swing", "OOP", "Drag-and-Drop"]}
        date="April 2024"
        repoLink="https://github.com/Talhaahmad9/Connect4-game"
        isFeatured={true}
      />
      <ProjectCard
        title="Drum Kit"
        description="An interactive drum kit built with HTML, CSS, and JavaScript. Users can play sounds by clicking buttons or pressing keys, with animated feedback and responsive audio playback."
        techStack={["JavaScript", "HTML", "CSS", "DOM Events", "Audio API"]}
        date="January 2024"
        repoLink="https://github.com/Talhaahmad9/drum-kit"
        liveLink="https://talhaahmad9.github.io/drum-kit/"
        isFeatured={true}
      />
      <ProjectCard
        title="Typing Tutor (C Project)"
        description="A console-based typing tutor built in C. Tracks typing accuracy and WPM across easy and medium lessons, with progress saved to local files."
        techStack={["C", "File I/O", "Timing", "Console UI"]}
        date="December 2023"
        repoLink="https://github.com/Talhaahmad9/typing_tutor"
        isFeatured={false}
      />
      <ProjectCard
        title="Dice Game"
        description="A fun two-player dice game built with HTML, CSS, and JavaScript. Random dice rolls determine the winner on each page refresh, with dynamic image updates and DOM manipulation."
        techStack={["HTML", "CSS", "JavaScript", "DOM API"]}
        date="November 2023"
        repoLink="https://github.com/Talhaahmad9/dicegame"
        isFeatured={true}
      />
    </section>
  );
}
