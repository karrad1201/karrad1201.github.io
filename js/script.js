// Загрузка проектов
async function loadProjects() {
    try {
        const response = await fetch('https://api.github.com/users/karrad1201/repos?sort=updated&per_page=6');
        const projects = await response.json();
        const grid = document.getElementById('projectsGrid');
        
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
            
            grid.appendChild(card);
        });
    } catch (error) {
        console.error('Error loading projects:', error);
        document.getElementById('projectsGrid').innerHTML = `
            <div class="error-message">
                Failed to load projects. Please try again later.
            </div>
        `;
    }
}

// Запуск при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    
    // Анимация фона
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        document.querySelector('.circle-1').style.transform = `translate(${x * 30}px, ${y * 30}px)`;
        document.querySelector('.circle-2').style.transform = `translate(${x * -20}px, ${y * -20}px)`;
        document.querySelector('.circle-3').style.transform = `translate(${x * 15}px, ${y * -15}px)`;
    });
});
