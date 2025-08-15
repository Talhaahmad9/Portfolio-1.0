export default function Footer() {
    const d = new Date();
    let year = d.getFullYear();
    return <footer className="site-footer">
        <p>&copy; {year} Talha Ahmad. All rights reserved.</p>
        <div>
            <a href="https://github.com/Talhaahmad9 " target="_blank"
            >Github</a>
            <a href="https://www.linkedin.com/in/talha-ahmad-4299a32a2" target="_blank"
            >LinkedIn</a>
            <a href="mailto:talhaahmaed999@gmail.com" target="_blank"
            >Email</a>
        </div>
    </footer>
}