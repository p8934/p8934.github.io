//skill circle
        document.querySelectorAll('.circle').forEach(circle => {
        const percent = parseInt(circle.getAttribute('data-percent'));
        let current = 0;
        const span = circle.querySelector('span');

        const interval = setInterval(() => {
          if (current <= percent) {
            circle.style.background = `conic-gradient(#f39c12 ${current}%, #333 ${current}%)`;
            span.textContent = `${current}%`;
            current++;
          } else {
            clearInterval(interval);
          }
        }, 50); // Speed of animation
        });
          AOS.init({
          duration: 3000, // animation speed (in ms)
          once: true, // only once animation run
        });
        
        gsap.registerPlugin(ScrollTrigger);

        // Example 1: About section animation
          gsap.from(".about-section", {
            scrollTrigger: ".about-section", // jab ye visible ho
            y: 100,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
          });

          // Example 2: Project cards staggered animation
            gsap.from(".project-card", {
            scrollTrigger: ".projects",
            y: 80,
            opacity: 0,
            stagger: 0.3, // ek ek karke animation
            duration: 1.2,
            ease: "power2.out"
          });

              // Example 3: Contact section
              gsap.from(".contact-section", {
                scrollTrigger: ".contact-section",
                x: -100,
                opacity: 0,
                duration: 1.2,
                ease: "power4.out"
              });
                //curson pointer
                
              const cursorCircle = document.querySelector(".cursor-circle");

              // current (x,y)
              let x = 0;
              let y = 0;

              // target (x,y)
              let targetX = 0;
              let targetY = 0;

              // mouse move listener
              document.addEventListener("mousemove", (e) => {
                targetX = e.clientX;
                targetY = e.clientY;
              });

              // smooth motion loop
              function animateCursor() {
                x += (targetX - x) * 0.15; // smoothness (0.1–0.2)
                y += (targetY - y) * 0.15;

                // perfectly centered offset (half of width/height)
                const offset = 12.5; // because circle is 25px

                cursorCircle.style.transform = `translate(${x - offset}px, ${y - offset}px)`;
                requestAnimationFrame(animateCursor);
              }
              animateCursor();
              // cursor hover
                document.querySelectorAll("a, button").forEach((el) => {
              el.addEventListener("mouseenter", () => {
                cursorCircle.style.background = "rgba(255, 255, 255, 0.4)";
              });
              el.addEventListener("mouseleave", () => {
                cursorCircle.style.background = "rgba(243, 156, 18, 0.3)";
              });
            });
             //dark toggle
              const toggleButton = document.getElementById('mode-toggle');
              const body = document.body;

              // Check saved preference
              if(localStorage.getItem('mode') === 'dark'){
                body.classList.add('dark-mode');
                toggleButton.textContent = "☀️";
              }

              toggleButton.addEventListener('click', () => {
                body.classList.toggle('dark-mode');

                if(body.classList.contains('dark-mode')){
                  localStorage.setItem('mode', 'dark');
                  toggleButton.textContent = "☀️"; // light mode icon
                } else {
                  localStorage.setItem('mode', 'light');
                  toggleButton.textContent = "🌙"; // dark mode icon
                }
               
              });

