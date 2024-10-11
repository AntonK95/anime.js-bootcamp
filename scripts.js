
// Hämtar hamburgaren och sidomenyn
const hamburger = document.getElementById('hamburger');
const sideMenu = document.getElementById('sideMenu');
let menuOpen = false;

// Funktion för att öppna/stänga menyn
function toggleMenu() {
    if (!menuOpen) {
        anime({
            targets: sideMenu,
            right: 0,
            duration: 500,
            easing: 'easeInOutQuad'
        });
        hamburger.classList.add('open');
        menuOpen = true;
    } else {
        anime({
            targets: sideMenu,
            right: '-500px',
            duration: 500,
            easing: 'easeInOutQuad'
        });
        hamburger.classList.remove('open');
        menuOpen = false;
    }
}

// Lägg till klick-event på hamburgaren
hamburger.addEventListener('click', toggleMenu);

// Slide in sections

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // entry.target.classList.add('show');
            slideIn(entry.target);
        } else {
            slideOut(entry.target);
        }
    })
});

const hiddenElements = document.querySelectorAll('.hide');
hiddenElements.forEach((el) => observer.observe(el));

function slideIn(element) {
    anime({
        targets: element,
        keyframes: [
            {
                translateX: '-100%',
                opacity: 0,
                filter: 'blur(5px)'
            },
            {
                translateX: 0,
                opacity: 1,
                filter: 'blur(0)'
            },
        ],
        duration: 1000,
        easing: 'easeInOutQuad'
    });

    anime({
        targets: '.img',
        translateX: ['-100%', 0],
        duration: 1000,
        easing: 'easeInOutQuad',
        delay: anime.stagger(300)
    });
}

function slideOut(element) {
    anime({
        targets: element,
        keyframes: [
            {
                translateX: 0,
                opacity: 1,
                filter: 'blur(0)'
            },
            {
                translateX: '-100%',
                opacity: 0,
                filter: 'blur(5px)'
            }
        ],
        duration: 1000,
        easing: 'easeInOutQuad'
    });
}

const ball = document.querySelector('.ball');
const ballBtn = document.querySelector('.ball-btn');
const section = document.querySelector('.anime_section');

let ballRight = true;

ballBtn.addEventListener('click', () => {

    if (ballRight) {
        console.log('More ball to right');
        anime({
            targets: ball,
            translateX: '75vw',
            duration: 1000,
            easing: 'easeInOutQuad',
            // direction: 'alternate', // Fram och tillbaka
        });
    } else {
        console.log('More ball to left');
        anime({
            targets: ball,
            translateX: 0,
            duration: 1000,
            easing: 'easeInOutQuad',
        })
    }
    // Växlar värdet för ballRight mellan true och false vid klick
    ballRight = !ballRight;
});

const bgSection = document.querySelector('.bg_section');
const bgBtn = document.querySelector('.bg-btn');

const originalColor = '#ddd'; // Original färg
const newColor = '#ff6347'; // Ny färg
let ogBGColor = true; // Flagga för att hålla reda på vilken färg som används

bgBtn.addEventListener('click', () => {
    console.log('Change BG color')
    anime({
        targets: bgSection,
        backgroundColor: ogBGColor ? newColor : originalColor,
        duration: 1000,
        easing: 'easeInOutQuad',
    });

    ogBGColor = !ogBGColor;
});

const loader = document.querySelector('.loader');

// Animerar loadern med anime.js
anime({
    targets: loader,
    rotate: '360deg',
    duration: 3000,
    easing: 'linear',
    loop: true,
});

// Pulse button section
const pulseBtn = document.querySelector('.puls-btn');

// Animerar knappen med anime.js för att pulsera
anime({
    targets: pulseBtn,
    scale: [1, 1.2], // Växla mellan normal storlek och 1.2x storlek
    duration: 1000, // Varje puls tar 1 sekund
    easing: 'easeInOutQuad', // Mjuk animering in och ut
    direction: 'alternate', // Växla mellan att förstora och förminska
    loop: true, // Låt animationen gå om och om igen
});

// Falling star section

const stars = document.querySelectorAll('.star');
const starSection = document.querySelector('.star_section');

// Ger varje stjärna en slumpmässig position efter X axeln
stars.forEach(star => {
    const randomX = Math.random() * (starSection.offsetWidth - 20); // För att ge en slumpmässig position på X-axeln
    star.style.left = `${randomX}px`;
});

anime({
    targets: stars,
    translateY: starSection.offsetHeight + 20,
    duration: 3000,
    easing: 'easeInOutQuad',
    loop: true,
    delay: anime.stagger(200),
})

// Path SVG section

var path = anime.path('#path');

// Anime.js animation
anime({
    targets: '.path_object',
    translateX: path('x'),
    translateY: path('y'),
    rotate: path('angle'),
    duration: 5000,
    loop: true,
    easing: 'linear'
});


// Typewriter section

const text = "Detta är en skrivmaskinseffekt med anime.js!";
const container = document.querySelector('.typewriter_text');

// Dela texten i enskilda bokstäver och lägg till varje bokstav i sin egen span
container.innerHTML = text.split('').map(char => `<span>${char}</span>`).join('');

// Hämta alla span-element
const letters = container.querySelectorAll('span');

anime({
    targets: letters,
    opacity: [0, 1], // Startar som osynlig
    easing: 'easeInOutQuad',
    duration: 100, // Varje bokstav tar 100ms att visas
    delay: anime.stagger(200), // Fördröjning mellan varje bokstav
});
