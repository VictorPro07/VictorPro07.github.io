    // -------------------------------------- NAVIGATION -----------------------------------------------

    // Mise en surbrillance de la section active 
    window.addEventListener('scroll', () => {
        document.querySelectorAll('.section').forEach(section => {
            const rect = section.getBoundingClientRect();
            const id = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${id}"]`);
            if (!navLink) return; 
                if (rect.top <= 100 && rect.bottom >= 100) {
                    navLink.classList.add('active');
                } else {
                    navLink.classList.remove('active');
                }
        });
    });


    // Bouton Hamburger (version mobile et tablette)
    document.addEventListener('DOMContentLoaded', () => {
      const hamburger = document.getElementById('hamburger');
      const navLinks = document.getElementById('nav-links');
    
      // Bascule du menu hamburger
      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
      });
    
      // Fermeture automatique du menu lors du clic sur un lien
      document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
          if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
          }
        });
      });
    });
 

    // -------------------------------------- BIOGRAPHIE  ----------------------------------------------

    // Une alerte s'affiche pour signaler le téléchargement du CV.
    const cvButton = document.querySelector('.cv-button');
    if(cvButton){
        cvButton.addEventListener('click', () => {
            alert('Téléchargement du CV');
        });
    }

    //Animation des particules en arrière-plan 
    document.addEventListener('DOMContentLoaded', function() {
        particlesJS('particles-js', {
            particles: {
                number: { value: 100, density: { enable: true, value_area: 800 } },
                color: { value: '#037e57' }, /* Couleur émeraude */
                shape: { type: 'circle' },
                opacity: { value: 0.4 },
                size: { value: 5, random: true },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#037e57',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 0.8,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                } 
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: { enable: true, mode: 'grab' },
                    onclick: { enable: true, mode: 'push' },
                    resize: true
                }
            },
            retina_detect: true
        });
    });

    // Effet machine à écrire
    document.addEventListener('DOMContentLoaded', () => {
        const text = "Diplômé de l’ecole d’ingénieur IMT Nord Europe (Mines de Douai), j'ai suivi une formation rigoureuse en science des données combinée à des expériences terrain concrètes.";
        const typewriter = document.querySelector('.typewriter');
        
        // Effacer le texte initial
        typewriter.textContent = '';
        
        let index = 0;
        function typeCharacter() {
            if (index < text.length) {
                typewriter.textContent += text.charAt(index);
                index++;
                setTimeout(typeCharacter, Math.random() * 10 + 5);
            }
        }
        
        // Démarrer après l'animation d'entrée
        setTimeout(typeCharacter, 1000);
    });


    //----------------------------------------EDUCATION--------------------------------------
    
    // Animation des icônes (AVION,ECOLE,CHAPEAU)
    document.querySelectorAll('.timeline-icon').forEach(icon => {
    icon.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(-50%) rotate(-15deg) scale(1.5)';
        this.style.color = '#58b4cffd';
    });
    
    icon.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(-50%) rotate(0deg) scale(1)';
        this.style.color = '#abe9d6';
    });
    
    // Clignotement 
    setTimeout(() => {
        icon.style.animation = 'blink 1s ease-out';
    }, 1000);
    });


    //Animation d'entrée des éléments de timeline 
    const observerEd = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
            const item = entry.target;
            item.classList.add('visible');
            
            // Animation des logos des écoles
            const logo = item.querySelector('.school-logo');
            if (logo) {
                logo.style.transform = 'scale(1.3)';
            }
            }
        });
        }, { threshold: 0.5 });

    document.querySelectorAll('.timeline-item').forEach(el => observerEd.observe(el));


    /* Une animation de la ligne de temps qui se "remplit" */
    window.addEventListener('load', () => {
    document.querySelector('.timeline').classList.add('loaded');
    });


    // arr-plan avec apparition d'équations
    class EquationBackground {
      constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.equations = [];
        this.running = true;
        
        this.resize();
        window.addEventListener('resize', () => this.resize());
        
        // Liste d'équations scientifiques variées
        this.equationList = [
          "y = ∫_{a}^{b} f(x)dx",
          "σ(Wx + b)",
          "∇⋅E = ρ/ε₀",
          "H = -∑ p(x) log p(x)",
          "F = ma",
          "e^{iπ} + 1 = 0",
          "∇×B = μ₀J + μ₀ε₀∂E/∂t",
          "ψ(x) = A e^{ikx}",
          "E = mc²",
          "∀ε>0, ∃δ>0 : |x-a|<δ ⇒ |f(x)-L|<ε",
          "x = [-b ± √(b²-4ac)] / 2a",
          "f'(x) = lim_{h→0} [f(x+h)-f(x)]/h",

          "a² + b² = c²", // Pythagore
          "iℏ∂Ψ/∂t = ĤΨ", // Schrödinger
          "ΔS ≥ 0", // Thermodynamique
          "PV = nRT", // Gaz parfaits
          "F = -kΔx", // Hooke
          "ρ(∂v/∂t + v·∇v) = -∇p + μ∇²v + f", // Navier-Stokes
          "G_{μν} + Λg_{μν} = (8πG/c⁴)T_{μν}", // Einstein
          "(iγ^μ∂_μ - m)ψ = 0", // Dirac
          "n₁sinθ₁ = n₂sinθ₂", // Snell
          "ΔxΔp ≥ ℏ/2" // Heisenberg
        ];

        this.animate();
        setInterval(() => this.addEquation(), 1000);
      }

      resize() {
        this.canvas.width = this.canvas.offsetWidth;
        this.canvas.height = this.canvas.offsetHeight;
      }

      addEquation() {
        const equation = {
          text: this.equationList[Math.floor(Math.random() * this.equationList.length)],
          x: Math.random() * this.canvas.width,
          y: Math.random() * this.canvas.height,
          alpha: 0,
          velocity: Math.random() * 0.5 + 0.2,
          life: 1
        };
        this.equations.push(equation);
      }

      animate() {
        if (!this.running) return;

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.equations.forEach((eq, index) => {
          eq.alpha += 0.02;
          eq.y -= eq.velocity;
          eq.life -= 0.005;
          
          this.ctx.save();
          this.ctx.globalAlpha = Math.min(eq.alpha, eq.life);
          this.ctx.font = '24px "Fira Code", monospace';
          this.ctx.fillStyle = '#58b4cffd';
          
          // Animation d'écriture
          const progress = Math.min(1, (1 - eq.life) * 5);
          const visibleChars = Math.floor(eq.text.length * progress);
          const partialText = eq.text.substring(0, visibleChars);
          
          this.ctx.fillText(partialText, eq.x, eq.y);
          
          this.ctx.restore();

          if (eq.life <= 0) {
            this.equations.splice(index, 1);
          }
        });

        requestAnimationFrame(() => this.animate());
      }
    }

    // Initialisation dans script.js
    const initEquationBackground = () => {
      new EquationBackground('equation-canvas');
    };

    // Appeler la fonction après le chargement de la page
    window.addEventListener('load', initEquationBackground);


    // Animation du "bonhomme" le long de la timeline
    const animGuy = document.getElementById('anim-guy');
    const timeline = document.querySelector('.timeline');
    const icons = document.querySelectorAll('.timeline-icon');

    let startTime = null;
    const animationDuration = 20000; // Durée en ms pour un parcours complet (10 secondes)

    function animateGuy(timestamp) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      

      const progress = (elapsed % animationDuration) / animationDuration;
      
      // Détermine la hauteur effective de la timeline
      const timelineHeight = timeline.offsetHeight;
      

      const newY = timelineHeight * (1 - progress);
      animGuy.style.top = `${newY}px`;

      // Vérification de la collision avec chaque icône
      let collision = false;
      const guyRect = animGuy.getBoundingClientRect();
      icons.forEach(icon => {
        const iconRect = icon.getBoundingClientRect();
        // Condition d'intersection (collision)
        if (
          guyRect.right > iconRect.left &&
          guyRect.left < iconRect.right &&
          guyRect.bottom > iconRect.top &&
          guyRect.top < iconRect.bottom
        ) {
          collision = true;
        }
      });
      // Si collision, on rend le bonhomme transparent
      animGuy.style.opacity = collision ? 0.2 : 1;

      requestAnimationFrame(animateGuy);
    }

    requestAnimationFrame(animateGuy);



    //---------------------------------- EXPERIENCE --------------------------------------

    // Animation au scroll
    document.addEventListener('DOMContentLoaded', () => {
        const cards = document.querySelectorAll('.experience-card');
        
        const observerExp = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1
    });

    cards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        observerExp.observe(card);
    });

    // Effet parallaxe au scroll
    const timelineWrapper = document.querySelector('.timeline-wrapper');
    let isDown = false;
    let startX;
    let scrollLeft;

    timelineWrapper.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - timelineWrapper.offsetLeft;
        scrollLeft = timelineWrapper.scrollLeft;
    });

    timelineWrapper.addEventListener('mouseleave', () => {
        isDown = false;
    });

    timelineWrapper.addEventListener('mouseup', () => {
        isDown = false;
    });

    timelineWrapper.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - timelineWrapper.offsetLeft;
        const walk = (x - startX) * 2;
        timelineWrapper.scrollLeft = scrollLeft - walk;
        });
    });

    //Effet holographique sur les cartes lors du click
    document.querySelectorAll('.experience-card').forEach(card => {
        card.addEventListener('click', () => {
        const hologram = document.createElement('div');
        hologram.className = 'hologram-effect';
        const rect = card.getBoundingClientRect();
        
        hologram.style.cssText = `
        left: ${rect.left}px;
        top: ${rect.top}px;
        width: ${rect.width}px;
        height: ${rect.height}px;
        `;
        
        document.body.appendChild(hologram);
        
        setTimeout(() => {
        hologram.remove();
        }, 1000);
    });
    });

  
    //----------------------------------- COMPETENCES --------------------------------------

    document.addEventListener("DOMContentLoaded", function() {

      const categoryButtons = document.querySelectorAll('.category-item');
      const skillsGrids = document.querySelectorAll('.skills-grid');
    
      categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
          categoryButtons.forEach(btn => btn.classList.remove('active'));
          this.classList.add('active');
          const selectedCategory = this.getAttribute('data-category');
          
          skillsGrids.forEach(grid => {
            if (grid.getAttribute('data-category') === selectedCategory) {
              grid.classList.add('visible');
              grid.style.animation = 'none';
              grid.offsetHeight; 
              grid.style.animation = '';
            } else {
              grid.classList.remove('visible');
            }
          });
        });
      });
    
      // --- Détection de l'intersection du faisceau sur les cartes ---
    
      // Récupère le faisceau lumineux
      const beam = document.querySelector('.lamp .beam');
      // Récupère toutes les cartes de compétences
      const skillItems = document.querySelectorAll('.skill-item');
    
      function checkBeamIntersection() {
        // Récupère la position du faisceau
        const beamRect = beam.getBoundingClientRect();
    
        skillItems.forEach(item => {
          const itemRect = item.getBoundingClientRect();
          // Vérifie l'intersection entre la carte et le faisceau
          if (
            itemRect.bottom > beamRect.top &&
            itemRect.top < beamRect.bottom &&
            itemRect.right > beamRect.left &&
            itemRect.left < beamRect.right
          ) {
            item.classList.add('illuminated');
          } else {
            item.classList.remove('illuminated');
          }
        });
        // Boucle d'animation
        requestAnimationFrame(checkBeamIntersection);
      }
    
      // Démarre la vérification continue
      requestAnimationFrame(checkBeamIntersection);
    });
      

    //-------------------------------------- PROJETS  -------------------------------------------

    document.addEventListener("DOMContentLoaded", () => {
      const projectCards = document.querySelectorAll('.project-card');
    
      const observerOptions = {
        threshold: 0.2  
      };
    
      const observerproj = new IntersectionObserver((entries, observerproj) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observerproj.unobserve(entry.target);
          }
        });
      }, observerOptions);
    
      projectCards.forEach(card => {
        observerproj.observe(card);
      });
    });
    



    // arr-plan binaire de matrice
    const canvas = document.getElementById("matrix");
    const ctx = canvas.getContext("2d");
    
    const binaryChars = "01";
    const fontSize = 16;
    let columns, drops;
    
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = document.getElementById('matrix-container').offsetHeight;
      columns = Math.floor(canvas.width / fontSize);
      drops = Array(columns).fill(0);
    }
    
    resizeCanvas();
    
    function drawMatrix() {
      // Effet de traînée
      ctx.fillStyle = "rgba(17, 17, 24, 0.15)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    
      // Style du texte
      ctx.fillStyle = "rgba(0, 255, 0, 0.4)";
      ctx.font = fontSize + "px monospace";
      
      // Pour chaque colonne
      for (let i = 0; i < drops.length; i++) {
        const text = binaryChars.charAt(Math.floor(Math.random() * binaryChars.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }
    
    // Lancer l'animation
    setInterval(drawMatrix, 80);
    
    // Réajuster la taille du canvas lors du redimensionnement
    window.addEventListener("resize", resizeCanvas);
    
    //--------------------------------- BARRE DE FIN --------------------------------------

    // Récupérer l'année en cours
    const currentYear = new Date().getFullYear();
        
    // Insérer l'année dans l'élément avec l'ID 'current-year'
    document.getElementById('current-year').textContent = currentYear;



    
      





