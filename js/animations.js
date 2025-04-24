/* Animações e interatividade */

document.addEventListener('DOMContentLoaded', function() {
    // Animação de entrada para elementos ao rolar a página
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    // Observar todos os elementos com a classe 'animate-on-scroll'
    document.querySelectorAll('.section, .skill-item, .project-box, .contact-card').forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });

    // Efeito de hover para notas adesivas
    document.querySelectorAll('.sticky-note').forEach(note => {
        note.addEventListener('mouseover', function() {
            this.style.transform = 'rotate(0deg) scale(1.05)';
            this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
            this.style.zIndex = '5';
        });

        note.addEventListener('mouseout', function() {
            this.style.transform = 'rotate(-2deg) scale(1)';
            this.style.boxShadow = '2px 2px 5px rgba(0,0,0,0.1)';
            this.style.zIndex = '1';
        });
    });

    // Efeito de paralaxe para elementos decorativos
    document.addEventListener('mousemove', function(e) {
        const moveX = (e.clientX - window.innerWidth / 2) / 50;
        const moveY = (e.clientY - window.innerHeight / 2) / 50;

        document.querySelectorAll('.scribble').forEach(scribble => {
            const randomFactor = parseFloat(scribble.getAttribute('data-factor') || Math.random() * 2 - 1);
            scribble.style.transform = `translate(${moveX * randomFactor}px, ${moveY * randomFactor}px)`;
        });
    });

    // Inicializar fatores aleatórios para movimento de paralaxe
    document.querySelectorAll('.scribble').forEach(scribble => {
        scribble.setAttribute('data-factor', Math.random() * 2 - 1);
    });
});

// Adicionar classe 'visible' para animações CSS
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        el.classList.add('fade-in');
        el.style.opacity = '0';
    });

    setTimeout(() => {
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            el.style.opacity = '1';
        });
    }, 100);
});

// Estilo CSS para animações
document.head.insertAdjacentHTML('beforeend', `
<style>
.animate-on-scroll {
    transition: opacity 0.5s ease-out, transform 0.5s ease-out;
    opacity: 0;
}

.animate-on-scroll.visible {
    opacity: 1;
}

.section {
    transform: translateY(20px);
}

.section.visible {
    transform: translateY(0);
}

.skill-item, .project-box, .contact-card {
    transition-delay: calc(var(--index, 0) * 0.1s);
}
</style>
`);

// Definir índices para atrasos escalonados
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.skill-item').forEach((el, index) => {
        el.style.setProperty('--index', index);
    });
    
    document.querySelectorAll('.project-box').forEach((el, index) => {
        el.style.setProperty('--index', index);
    });
    
    document.querySelectorAll('.contact-card').forEach((el, index) => {
        el.style.setProperty('--index', index);
    });
});
