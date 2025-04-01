// Тема
const themeToggle = document.createElement('button');
themeToggle.className = 'theme-toggle';
themeToggle.textContent = '🌓';
document.body.prepend(themeToggle);

themeToggle.addEventListener('click', () => {
    document.body.dataset.theme = 
        document.body.dataset.theme === 'dark' ? 'light' : 'dark';
});

// Загрузка проектов
async function loadProjects() {
    const response = await fetch('https://api.github.com/users/karrad1201/repos?sort=updated');
    const projects = await response.json();
    
    const grid = document.querySelector('.projects-grid');
    
    projects.slice(0, 6).forEach(project => {
        grid.innerHTML += `
            <div class="project-card">
                <h3>${project.name}</h3>
                <p>${project.description || 'No description'}</p>
                <a href="${project.html_url}" target="_blank">View</a>
            </div>
        `;
    });
}

loadProjects();
