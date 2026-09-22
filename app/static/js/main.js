/**
 * ============================================================
 * KAMRUN NESA — PORTFOLIO MAIN JS
 * Handles Theme Toggle, Observers, Modal, and Hero Visualization
 * ============================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. THEME TOGGLE (Dark/Light)
    // ==========================================
    const htmlEl = document.documentElement;
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn ? themeToggleBtn.querySelector('i') : null;
    
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    function setTheme(theme) {
        htmlEl.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        if(themeIcon) {
            themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
        // Dispatch event for canvas visualization to catch color changes
        window.dispatchEvent(new Event('themeChanged'));
    }

    if (savedTheme) {
        setTheme(savedTheme);
    } else if (systemPrefersDark) {
        setTheme('dark');
    } else {
        setTheme('light');
    }

    if(themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = htmlEl.getAttribute('data-theme');
            setTheme(currentTheme === 'dark' ? 'light' : 'dark');
        });
    }

    // ==========================================
    // 2. NAVBAR SCROLL & ACTIVE LINKS
    // ==========================================
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        // Active link tracking
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // ==========================================
    // 3. MOBILE HAMBURGER MENU
    // ==========================================
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-links');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    // ==========================================
    // 4. INTERSECTION OBSERVER (Scroll Reveals)
    // ==========================================
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // ==========================================
    // 5. TYPING EFFECT
    // ==========================================
    const roles = [
        "AI/ML Researcher",
        "Graph Neural Network Researcher",
        "Agentic AI Systems",
        "Software Engineering"
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpan = document.getElementById('typing-text');
    let typeSpeed = 80;

    function typeEffect() {
        if (!typingSpan) return;

        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            typingSpan.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 40;
        } else {
            typingSpan.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 80;
        }

        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            typeSpeed = 2000;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typeSpeed = 500;
        }

        setTimeout(typeEffect, typeSpeed);
    }

    if (typingSpan) {
        setTimeout(typeEffect, 500);
    }

    // ==========================================
    // 6. HERO RESEARCH VISUALIZATION
    // ==========================================
    initResearchVisualization();

}); // end DOMContentLoaded


// ==========================================
// CV VIEWER MODAL LOGIC (Global functions)
// ==========================================
function openCvViewer() {
    const modal = document.getElementById('cv-modal');
    if(modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
}

function closeCvViewer() {
    const modal = document.getElementById('cv-modal');
    if(modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Close modal on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeCvViewer();
    }
});


// ==========================================
// ORIGINAL RESEARCH VISUALIZATION
// ==========================================
function initResearchVisualization() {
    const container = document.getElementById('research-flow-viz');
    if (!container) return;

    // We will build a DOM-based animated flow instead of canvas for better accessibility and crispness.
    container.innerHTML = '';
    container.style.position = 'relative';
    container.style.width = '100%';
    container.style.height = '100%';

    const nodes = [
        { id: 'data', label: 'Data', x: 10, y: 50 },
        { id: 'repr', label: 'Representation', x: 35, y: 20 },
        { id: 'graph', label: 'Graph/Hypergraph', x: 60, y: 50 },
        { id: 'neural', label: 'Neural Learning', x: 85, y: 20 },
        { id: 'pred', label: 'Prediction', x: 85, y: 80 }
    ];

    const connections = [
        ['data', 'repr'],
        ['repr', 'graph'],
        ['graph', 'neural'],
        ['graph', 'pred']
    ];

    // Create SVG for lines
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.style.position = 'absolute';
    svg.style.top = '0';
    svg.style.left = '0';
    svg.style.width = '100%';
    svg.style.height = '100%';
    svg.style.zIndex = '0';
    container.appendChild(svg);

    function updateColors() {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        return {
            line: isDark ? 'rgba(59, 130, 246, 0.3)' : 'rgba(37, 99, 235, 0.2)',
            particle: isDark ? '#60a5fa' : '#2563eb'
        };
    }

    let colors = updateColors();
    window.addEventListener('themeChanged', () => {
        colors = updateColors();
        drawLines();
    });

    // Draw static lines
    function drawLines() {
        svg.innerHTML = ''; // clear
        connections.forEach(pair => {
            const n1 = nodes.find(n => n.id === pair[0]);
            const n2 = nodes.find(n => n.id === pair[1]);
            
            const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line.setAttribute('x1', `${n1.x}%`);
            line.setAttribute('y1', `${n1.y}%`);
            line.setAttribute('x2', `${n2.x}%`);
            line.setAttribute('y2', `${n2.y}%`);
            line.setAttribute('stroke', colors.line);
            line.setAttribute('stroke-width', '2');
            svg.appendChild(line);
        });
    }

    drawLines();

    // Create Nodes
    nodes.forEach(n => {
        const nodeEl = document.createElement('div');
        nodeEl.className = 'viz-node';
        nodeEl.style.position = 'absolute';
        nodeEl.style.left = `${n.x}%`;
        nodeEl.style.top = `${n.y}%`;
        nodeEl.style.transform = 'translate(-50%, -50%)';
        nodeEl.style.zIndex = '2';
        
        // internal circle
        const circle = document.createElement('div');
        circle.style.width = '12px';
        circle.style.height = '12px';
        circle.style.borderRadius = '50%';
        circle.style.backgroundColor = 'var(--primary-color)';
        circle.style.boxShadow = '0 0 10px var(--primary-color)';
        circle.style.margin = '0 auto 8px auto';
        
        // label
        const label = document.createElement('div');
        label.innerText = n.label;
        label.style.color = 'var(--text-primary)';
        label.style.fontFamily = 'var(--font-mono)';
        label.style.fontSize = '0.75rem';
        label.style.fontWeight = '600';
        label.style.whiteSpace = 'nowrap';
        label.style.textAlign = 'center';
        
        nodeEl.appendChild(circle);
        nodeEl.appendChild(label);
        container.appendChild(nodeEl);
    });

    // Add moving particle logic (simulating data flow)
    const particleSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    particleSvg.style.position = 'absolute';
    particleSvg.style.top = '0';
    particleSvg.style.left = '0';
    particleSvg.style.width = '100%';
    particleSvg.style.height = '100%';
    particleSvg.style.zIndex = '1';
    container.appendChild(particleSvg);

    function createFlowParticle(startNode, endNode, delay) {
        setTimeout(() => {
            const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            circle.setAttribute('r', '3');
            circle.setAttribute('fill', colors.particle);
            particleSvg.appendChild(circle);

            let startTime = null;
            const duration = 2000; // 2 seconds to travel

            function animateParticle(timestamp) {
                if (!startTime) startTime = timestamp;
                const progress = (timestamp - startTime) / duration;

                if (progress < 1) {
                    const currentX = startNode.x + (endNode.x - startNode.x) * progress;
                    const currentY = startNode.y + (endNode.y - startNode.y) * progress;
                    circle.setAttribute('cx', `${currentX}%`);
                    circle.setAttribute('cy', `${currentY}%`);
                    requestAnimationFrame(animateParticle);
                } else {
                    particleSvg.removeChild(circle);
                    // Loop it
                    createFlowParticle(startNode, endNode, 500);
                }
            }
            requestAnimationFrame(animateParticle);
        }, delay);
    }

    // Start flows
    connections.forEach((pair, index) => {
        const n1 = nodes.find(n => n.id === pair[0]);
        const n2 = nodes.find(n => n.id === pair[1]);
        createFlowParticle(n1, n2, index * 800);
    });
}
