// Социальные ссылки
const socialLinks = [
    {
        name: "GitHub",
        url: "https://github.com/karrad1201",
        icon: "fab fa-github",
        class: "github",
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
    
    const socialLinksContainer = document.querySelector('.social-links');

socialLinks.forEach(link => {
    const a = document.createElement('a');
    a.href = link.url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.className = 'social-link';
    a.innerHTML = `<i class="${link.icon}"></i>`;
    
    // Жёсткий сброс стилей через JS (на всякий случай)
    a.style.all = 'unset'; 
    a.style.display = 'flex';
    a.style.alignItems = 'center';
    a.style.justifyContent = 'center';
    a.style.width = '60px';
    a.style.height = '60px';
    a.style.borderRadius = '50%';
    a.style.color = 'white';
    a.style.fontSize = '1.5rem';
    a.style.backgroundColor = '#1a1a1a';
    a.style.transition = 'all 0.3s ease';
    a.style.overflow = 'hidden';
    a.style.boxSizing = 'border-box';
    a.style.border = 'none !important';
    a.style.outline = 'none !important';
    
    socialLinksContainer.appendChild(a);
});
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', renderSocialLinks);
