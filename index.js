const aboutContent = `
    <div class="about-profile">
        <img src="imgs/caseyrodgers.jpg" alt="Profile Photo" class="profile-img">
        <div>
            <p>Hello! I'm Casey Rodgers, a PhD candidate in Civil Engineering and a Masters in Computer Science student at the University of Illinois at Urbana Champaign! 
            My research interests include computer graphics, computer vision, ML, and XR for digital twins, physics-based simulation, structural health monitoring, disaster recovery, and engineering education.
            </p>
            <p>Outside of academics, I enjoy reading, drawing, writing, game development, and 3D art.
            </p>
        </div>
    </div>
`;

const eduContent = `
    <div class="education">
        <ul class="readable-list">
            <li><strong>PhD</strong>, Civil Engineering, <span class="school">University of Illinois at Urbana-Champaign</span>, <span class="date">May 2026</span></li>
            <li><strong>Masters Computer Science</strong>, <span class="school">University of Illinois at Urbana-Champaign</span>, <span class="date">May 2026</span></li>
            <li><strong>MS</strong>, Civil Engineering, <span class="school">University of Illinois at Urbana-Champaign</span>, <span class="date">May 2022</span></li>
            <li><strong>BS</strong>, Civil Engineering with a minor in Computer Science, <span class="school">Purdue University</span>, <span class="date">May 2020</span></li>
        </ul>
    </div>
`;

// Render About Me and Education
document.getElementById('about-content').innerHTML = aboutContent;
document.getElementById('education-content').innerHTML = eduContent;


// Porfolio Section
const portContent = `
    <p>
        I have worked on numerous research projects at the intersection of <strong>civil engineering</strong> and <strong>computer science</strong>, 
        specifically in <strong>computer graphics</strong>, <strong>computer vision</strong>, <strong>AI</strong>, and <strong>XR</strong>.<br><br>
        My research areas include:
    </p>
    <ul class="research-list">
        <li>Digital twins</li>
        <li>Physics-based Simulation</li>
        <li>Disaster recovery</li>
        <li>Engineering education</li>
    </ul>
    <p>An overview of my publication history can be found on my <a href="https://scholar.google.com/citations?user=pwHFok8AAAAJ" target="_blank" rel="noopener noreferrer">google scholar</a>.
    </p>
    <p>
        Many of my projects have corresponding published papers and open-source code repositories.<br>
        <strong>Please click on the project images below to learn more about each one.</strong>
    </p>
`;

// Render About Me and Education
document.getElementById('portfolio-content').innerHTML = portContent;

// Portfolio items data
const portfolioItems = [
    {
        image: "imgs/building_tag_results.png",
        link: "https://github.com/caseyrodgers2/Quantitative_building_condition_from_nonstructural_damage",
        title: "Quantitative Building Condition from Nonstructural Damage",
        description: "Developed an approach to infer quantitative post-earthquake building condition from exterior drift-sensitive nonstructural damage observations using Bayesian formulation.",
        tags: ["Python", "Bayes", "Pandas"]
    },
    {
        image: "imgs/vr_beam_design_photo.jpg",
        link: "https://github.com/caseyrodgers2/VR_Structural_Beam_Design",
        title: "Interactive VR Module for Teaching Structural Beam Design",
        description: "Developed an automated workflow to procedurally generate UI, beam meshes, and beam deflections directly from SAP2000 outputs.",
        tags: ["C#", "Unity"]
    },
    {
        image: "imgs/physics_damage.png",
        link: "https://github.com/caseyrodgers2/5_story_building",
        title: "Physics-based & Heuristics-based Damage for Digital Twins",
        description: "Developed methodologies for physics-based structural damage from FEM results and heuristics-based nonstructural damage for post-earthquake damaged digital twins.",
        tags: ["Python", "OpenCV", "Blender API"]
    },
    {
        image: "imgs/miter_gate_disp.jpg",
        link: "https://github.com/caseyrodgers2/vision_based_displ_miter_gates",
        title: "Vision-based Displacement Measurement of Miter Gates",
        description: "Developed a robust computer vision program to measure and display the displacement of miter gates with 51 user options and features for flexibility and ease of use.",
        tags: ["MATLAB"]
    },
    {
        image: "imgs/smart_bridge_gui.jpg",
        link: "https://github.com/caseyrodgers2/bridge_gui_demo",
        title: "Prototype 3D Application for UIUC Smart Bridge Sensor Data Showcase",
        description: "Developed a prototype 3D application that allows users to \"fly\" around a 3D model of the bridge colored to display sensor data with navigation to different pages of educational content.",
        tags: ["C++", "OpenGL", "SDL2"]
    }
];


// Render Portfolio
const portfolioList = document.getElementById('portfolio-list');
portfolioItems.forEach(item => {
    const div = document.createElement('div');
    div.className = 'portfolio-item';
    div.innerHTML = `
        <a href="${item.link}" target="_blank" rel="noopener noreferrer">
            <img src="${item.image}" alt="${item.title}">
        </a>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <div class="portfolio-tags">
            ${item.tags.map(tag => `<span class="portfolio-tag">${tag}</span>`).join('')}
        </div>
    `;
    portfolioList.appendChild(div);
});


// Section toggling logic with menu button behavior
const menuLinks = document.querySelectorAll('.menu-link');
const sections = {
    about: document.getElementById('about'),
    portfolio: document.getElementById('portfolio')
};

// Show only the "Portfolio" section by default
sections.portfolio.classList.remove('hidden');
sections.about.classList.add('hidden');

// Helper to set active menu button
function setActiveMenu(targetSection) {
    menuLinks.forEach(link => {
        const isActive = link.getAttribute('data-section') === targetSection;
        link.classList.toggle('active', isActive);
        link.setAttribute('aria-current', isActive ? 'true' : 'false');
    });
}

// Initial active state
setActiveMenu('portfolio');

menuLinks.forEach(link => {
    function activateMenu(e) {
        e.preventDefault();
        const target = link.getAttribute('data-section');
        // Hide all sections
        Object.values(sections).forEach(sec => sec.classList.add('hidden'));
        // Show the selected section
        sections[target].classList.remove('hidden');
        setActiveMenu(target);
    }
    link.addEventListener('click', activateMenu);
    link.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            activateMenu(e);
        }
    });
});