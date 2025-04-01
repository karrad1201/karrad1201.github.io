// Социальные ссылки
const socialLinks = [
    {
        name: "",
        url: "https://github.com/karrad1201",
        icon: "fab fa-github",
        class: "github",
        tooltip: "GitHub Profile"
    },
    {
        name: "Email",
        url: "mailto:karad120109@gmail.com",
        icon: "fas fa-envelope",
        class: "email",
        tooltip: "Send Email"
    },
    {
        name: "Telegram",
        url: "https://t.me/KarrradM",
        icon: "fab fa-telegram",
        class: "telegram",
        tooltip: "Telegram"
    },
    {
        name: "Steam",
        url: "https://steamcommunity.com/profiles/76561199007305579/",
        icon: "fab fa-steam",
        class: "steam",
        tooltip: "Steam Profile"
    },
    {
        name: "VK",
        url: "https://vk.com/karradme",
        icon: "fab fa-vk",
        class: "vkontakte",
        tooltip: "VKontakte"
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
