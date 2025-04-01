document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggleProjects');
    const projectsContainer = document.getElementById('projectsContainer');
    const projectsGrid = document.getElementById('projectsGrid');
    let projectsLoaded = false;

    toggleBtn.addEventListener('click', async () => {
        projectsContainer.classList.toggle('visible');
        toggleBtn.classList.toggle('active');
        toggleBtn.querySelector('span').textContent = 
            projectsContainer.classList.contains('visible') ? 'Hide Projects' : 'Show Projects';

        if (!projectsLoaded && projectsContainer.classList.contains('visible')) {
            try {
                projectsGrid.innerHTML = '<div class="loading"><i class="fas fa-spinner fa-spin"></i> Loading projects...</div>';
                
                const response = await fetch('https://api.github.com/users/karrad1201/repos?sort=updated&per_page=10');
                const projects = await response.json();
                
                projectsGrid.innerHTML = '';
                
                projects.forEach(project => {
                    const card = document.createElement('div');
                    card.className = 'project-card';
                    
                    card.innerHTML = `
                        <div class="project-name">
                            <i class="fas fa-code-branch"></i>
                            ${project.name}
                        </div>
                        ${project.description ? `<div class="project-desc">${project.description}</div>` : ''}
                        <a href="${project.html_url}" class="project-link" target="_blank">
                            View Project
                            <i class="fas fa-external-link-alt"></i>
                        </a>
                    `;
                    
                    projectsGrid.appendChild(card);
                });
                
                projectsLoaded = true;
            } catch (error) {
                console.error('Error loading projects:', error);
                projectsGrid.innerHTML = '<div class="error"><i class="fas fa-exclamation-triangle"></i> Failed to load projects</div>';
            }
        }
    });

    // Анимация фона
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        document.querySelector('.circle-1').style.transform = `translate(${x * 30}px, ${y * 30}px)`;
        document.querySelector('.circle-2').style.transform = `translate(${x * -20}px, ${y * -20}px)`;
        document.querySelector('.circle-3').style.transform = `translate(${x * 15}px, ${y * -15}px)`;
    });
});
