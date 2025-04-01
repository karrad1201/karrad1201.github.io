// Социальные ссылки
const socialLinks = [
    {
        name: "GitHubЫЫЫЫ",
        url: "https://github.com/karrad1201",
        icon: "fab fa-github",
        class: "githubA",
        tooltip: ""
    },
    {
        name: "Email",
        url: "mailto:karad120109@gmail.com",
        icon: "fas fa-envelope",
        class: "email",
        tooltip: ""
    },
    {
        name: "Telegram",
        url: "https://t.me/KarrradM",
        icon: "fab fa-telegram",
        class: "telegram",
        tooltip: ""
    },
    {
        name: "Steam",
        url: "https://steamcommunity.com/profiles/76561199007305579/",
        icon: "fab fa-steam",
        class: "steam",
        tooltip: ""
    },
    {
        name: "VK",
        url: "https://vk.com/karradme",
        icon: "fab fa-vk",
        class: "vkontakte",
        tooltip: ""
    }
];

function renderSocialLinks() {
    const container = document.getElementById('socialLinks');
    
    socialLinks.forEach(link => {
        const linkElement = document.createElement('a');
        linkElement.href = link.url;
        linkElement.className = `social-link ${link.class}`;
        linkElement.target = "_blank";
        linkElement.rel = "noopener noreferrer";
        linkElement.setAttribute('aria-label', link.tooltip);
        
        linkElement.innerHTML = `
            <i class="${link.icon}"></i>
            <span class="social-tooltip">${link.tooltip}</span>
        `;
        
        container.appendChild(linkElement);
    });
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', renderSocialLinks);
