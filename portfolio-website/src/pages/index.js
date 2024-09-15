import React, { useState } from 'react';
import { Link as ScrollLink, Element, animateScroll as scroll } from 'react-scroll'; // Correct import
import Image from 'next/image';
import '../styles/globals.css';

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('All Projects');
  const [selectedProject, setSelectedProject] = useState(null);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'A personal portfolio website',
      stack: 'React, Next.js, Tailwind',
      category: 'Website Development',
      image: '/images/portfolio.jpg',
    },
    // Add other projects here
  ];

  const filteredProjects = projects.filter(
    (project) => selectedFilter === 'All Projects' || project.category === selectedFilter
  );

  const openProject = (project) => setSelectedProject(project);
  const closeProject = () => setSelectedProject(null);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className={darkMode ? 'dark' : ''}>

      {/* HEADER */}
      <header className="bg-white dark:bg-gray-900 fixed w-full top-0 shadow-lg z-50">
        <div className="container mx-auto flex justify-between items-center p-5">
          <ScrollLink to="home" smooth={true} duration={500} className="text-3xl font-bold cursor-pointer">
            Rutvij Patil
          </ScrollLink>
          <nav className="space-x-5 hidden md:flex">
            <ScrollLink to="home" smooth={true} duration={500} className="cursor-pointer">HOME</ScrollLink>
            <ScrollLink to="experience" smooth={true} duration={500} className="cursor-pointer">EXPERIENCE</ScrollLink>
            <ScrollLink to="skills" smooth={true} duration={500} className="cursor-pointer">SKILLS</ScrollLink>
            <ScrollLink to="projects" smooth={true} duration={500} className="cursor-pointer">PROJECTS</ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500} className="cursor-pointer">CONTACT</ScrollLink>
          </nav>
          {/* Dark mode toggle here */}
        </div>
      </header>

      {/* HOME SECTION */}
        <Element name="home">
            <section id="home" className="min-h-screen relative flex items-center justify-center bg-gradient-to-b from-white to-gray-200 dark:from-gray-900 dark:to-gray-800">
            <div className="relative z-10 flex items-center justify-center flex-col text-center">
                <Image src="/images/profile.jpg" alt="Profile" width={160} height={160} className="rounded-full mx-auto" />
                <h1 className="text-5xl font-bold mt-5">Rutvij Patil</h1>
                <h2 className="text-xl mt-2">Full-Stack Developer</h2>
                <p className="mt-5 text-gray-700 dark:text-gray-300">I’m a passionate developer focused on web and mobile application development...</p>
                <div className="flex justify-center space-x-4 mt-5">
                <a href="https://www.linkedin.com/in/rutvij-patil" target="_blank" className="btn">LinkedIn</a>
                <a href="https://github.com/username" target="_blank" className="btn">Github</a>
                <a href="mailto:rutvijkpatil@gmail.com" className="btn">Email</a>
                <a href="/path-to-resume.pdf" download className="btn">Resume</a>
                </div>
            </div>
            </section>
        </Element>

      {/* EXPERIENCE SECTION */}
      <Element name="experience">
        <section id="experience" className="min-h-screen p-10 bg-gray-100 dark:bg-gray-800">
          <h2 className="text-4xl font-bold text-center mb-10">Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <h3>Burger Tech - Web Developer Intern</h3>
              <p>Role: Web Developer Intern, Duration: May 2023 – Aug 2023</p>
            </div>
            <div className="timeline-item">
              <h3>Media Tree - Web Developer</h3>
              <p>Role: Web Developer, Duration: Jun 2021 – Jun 2022</p>
            </div>
            <div className="timeline-item">
              <h3>Socio Labs - Full-stack Developer</h3>
              <p>Role: Full-stack Developer, Duration: May 2020 – May 2021</p>
            </div>
          </div>
        </section>
      </Element>

      {/* SKILLS SECTION */}
      <Element name="skills">
        <section id="skills" className="min-h-screen p-10 bg-gray-200 dark:bg-gray-900">
          <h2 className="text-4xl font-bold text-center mb-10">Skills</h2>
          <div className="flex justify-center flex-wrap gap-8">
            <Image src="/images/react.png" alt="React" width={60} height={60} />
            <Image src="/images/nodejs.png" alt="Node.js" width={60} height={60} />
            <Image src="/images/js.png" alt="JavaScript" width={60} height={60} />
            {/* Add more skill icons here */}
          </div>
        </section>
      </Element>

      {/* PROJECTS SECTION */}
        <Element name="projects">
        <section id="projects" className="min-h-screen p-10 bg-gray-100 dark:bg-gray-800">
          <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
          <div className="text-center mb-5">
            <button onClick={() => setSelectedFilter('All Projects')} className="btn mx-2">All Projects</button>
            <button onClick={() => setSelectedFilter('Website Development')} className="btn mx-2">Website Development</button>
            <button onClick={() => setSelectedFilter('Application Development')} className="btn mx-2">Application Development</button>
            <button onClick={() => setSelectedFilter('Other Projects')} className="btn mx-2">Other Projects</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredProjects.map((project) => (
              <div key={project.id} className="card" onClick={() => openProject(project)}>
                <Image src={project.image} alt={project.title} width={300} height={200} />
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p>{project.description}</p>
                <p className="text-gray-600">{project.stack}</p>
              </div>
            ))}
          </div>

          {selectedProject && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white p-5 rounded-lg relative w-3/4 max-w-2xl">
                <button onClick={closeProject} className="absolute top-2 right-2 text-2xl">✖️</button>
                <div className="flex">
                  <Image src={selectedProject.image} alt={selectedProject.title} width={300} height={200} />
                  <div className="ml-5">
                    <h3 className="text-3xl font-bold">{selectedProject.title}</h3>
                    <p className="mt-5">{selectedProject.description}</p>
                    <p className="mt-5"><strong>Technical Stack:</strong> {selectedProject.stack}</p>
                    <a href={selectedProject.link} target="_blank" className="btn mt-5">Project Link</a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
        </Element>

      {/* CONTACT SECTION */}
        <Element name="contact">
            <section id="contact" className="min-h-screen p-10 bg-gray-200 dark:bg-gray-900 flex">
            <div className="w-1/2">
                {/* You can use Google Maps iframe here */}
                <iframe
                src="https://www.google.com/maps/embed?pb=..."
                width="100%" height="450" allowFullScreen="" loading="lazy"
                className="border-0"
                ></iframe>
            </div>
            <div className="w-1/2 p-5">
                <h2 className="text-4xl font-bold text-center mb-10">Contact Me</h2>
                <form className="space-y-5">
                <input type="text" placeholder="Full Name" className="input-field" required />
                <input type="email" placeholder="Email" className="input-field" required />
                <textarea placeholder="Message" className="input-field" rows="5" required></textarea>
                <button type="submit" className="btn">Send Message</button>
                </form>
            </div>
            </section>
        </Element>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 bg-gray-700 text-white p-3 rounded-full shadow-lg"
      >
        ↑
      </button>

      {/* FOOTER */}
      <footer className="p-5 bg-gray-200 dark:bg-gray-900">
        <div className="container mx-auto text-center">
          <p>© 2024 Rutvij Patil. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
