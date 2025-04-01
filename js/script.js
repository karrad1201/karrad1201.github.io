// Projects loader
const projectsToggle = document.getElementById('projectsToggle');
const projectsContainer = document.getElementById('projectsContainer');
let projectsLoaded = false;

projectsToggle.addEventListener('click', async () => {
    if (!projectsLoaded) {
        try {
            const response = await fetch('https://api.github.com/users/karrad1201/repos?sort=updated');
            const projects = await response.json();
            
            projects.slice(0, 5).forEach((project, i) => {
                projectsContainer.innerHTML += `
                    <div class="project-card" style="--i: ${i}">
                        <h3>${project.name}</h3>
                        <p>${project.description || 'No description available'}</p>
                        <a href="${project.html_url}" target="_blank">View on GitHub</a>
                    </div>
                `;
            });
            projectsLoaded = true;
        } catch (err) {
            console.error('Error loading projects:', err);
            projectsContainer.innerHTML = '<p>Failed to load projects. Please try again later.</p>';
        }
    }
    
    projectsContainer.classList.toggle('visible');
    projectsToggle.textContent = projectsContainer.classList.contains('visible') 
        ? 'Hide Projects' 
        : 'Show Projects';
});

// Background animation
document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    document.querySelector('.circle-1').style.transform = `translate(${x * 30}px, ${y * 30}px)`;
    document.querySelector('.circle-2').style.transform = `translate(${x * -20}px, ${y * -20}px)`;
    document.querySelector('.circle-3').style.transform = `translate(${x * 15}px, ${y * -15}px)`;
});
