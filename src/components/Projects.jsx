export default function Projects() {
  const projects = [
    
    {
      title: 'Shankara Crystal',
      desc: `• Developed a fully responsive e-commerce web application for spiritual crystal products using React.js, ensuring optimal user experience across devices.
• Designed and built an admin panel for product management, enabling add, edit, delete operations with image uploads to Firebase Storage and data storage in Firestore.
• Integrated real-time product search and price-based sorting, allowing users to easily browse and filter items by category, name, and price.`,
      tech: [
        { name: 'React', img: 'https://img.icons8.com/office/512/react.png' },
        { name: 'Firebase', img: 'https://images.seeklogo.com/logo-png/61/1/firebase-icon-logo-png_seeklogo-615938.png' }
      ],
      github: 'https://github.com/hrishi2108/Crystal_store',
      live: 'https://shiny-lollipop-26ff8a.netlify.app/',
      image: '/projects/shankara_crystal.png'
    },
    {
      title: 'Coursera Clone',
      desc: `• Developed a Home Page displaying courses with categories and search functionality.
• Implemented Course Details Page to showcase in-depth information about each course.
• Contributed to the creation of a Login Page for user authentication.
• Assisted in designing the Product Page for course details and enrollment options.`,
      tech: [
        { name: 'HTML', img: 'https://img.icons8.com/color/100/html-5--v1.png' },
        { name: 'CSS', img: 'https://img.icons8.com/fluency/512/css3.png' },
        { name: 'JavaScript', img: 'https://img.icons8.com/color/512/javascript.png' },
      ],
      github: 'https://github.com/hrishi2108/Coursera_Clone.git',
      live: 'https://roaring-paprenjak-7e24e2.netlify.app',
      image: '/projects/coursera.png'
    },
    {
      title: 'Time Buddy',
      desc: `• Developed the Pomodoro timer feature allowing users to customize work and break intervals for efficient time management.
• Implemented task prioritization functionality enabling users to categorize tasks as high, medium, or low priority for better organization.
• Designed and integrated the link organizer feature for users to categorize and easily access saved links, enhancing productivity.`,
      tech: [
        { name: 'HTML', img: 'https://img.icons8.com/color/100/html-5--v1.png' },
        { name: 'CSS', img: 'https://img.icons8.com/fluency/512/css3.png' },
        { name: 'JavaScript', img: 'https://img.icons8.com/color/512/javascript.png' },
        { name: 'Firebase', img: 'https://images.seeklogo.com/logo-png/61/1/firebase-icon-logo-png_seeklogo-615938.png' }
      ],
      github: 'https://github.com/Dheerajmlk/Frontend-fanatics',
      live: 'https://fanciful-elf-ed4c09.netlify.app/',
      image: '/projects/timebuddy.png'
    },
    
    {
      title: 'CollabNest - Community Collaboration Platform',
      desc: `Interactive platform enabling users to post ideas and request assistance. 
Includes like/dislike and responsive UI.`,
      tech: [
        { name: 'HTML', img: 'https://img.icons8.com/color/100/html-5--v1.png' },
        { name: 'CSS', img: 'https://img.icons8.com/fluency/512/css3.png' },
        { name: 'JavaScript', img: 'https://img.icons8.com/color/512/javascript.png' },
      ],
      github: 'https://github.com/hrishi2108/CollabNest.git',
      live: 'https://peppy-parfait-010778.netlify.app/',
      image: 'projects/collabnest.png'
    }
  ];

  return (
    <section id="projects" className="container" data-reveal="fade-up">
      <h2 className="section-title">Featured Projects</h2>
      {projects.map((p, index) => (
        <div
          key={p.title}
          className={`project-row ${index % 2 !== 0 ? 'reverse' : ''}`}
          data-reveal="fade-up"
        >
          {/* Image */}
          <div className="project-image">
            <img src={p.image} alt={p.title} />
          </div>

          {/* Description */}
          <div className="project-content">
            <h3>{p.title}</h3>
            <div className="tech-icons">
              {p.tech.map((t) => (
                <img key={t.name} src={t.img} alt={t.name} title={t.name} />
              ))}
            </div>
            <p style={{ whiteSpace: "pre-line" }}>{p.desc}</p>
            <div className="project-actions">
              <a className="btn primary" href={p.live} target="_blank" rel="noreferrer">Check it out!</a>
              <a className="btn" href={p.github} target="_blank" rel="noreferrer">GitHub Link</a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
