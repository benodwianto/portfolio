// back to top
window.onscroll = function() {
    const top = document.getElementById("to-top");

    if (window.pageYOffset > 100) {
        top.classList.remove("hidden");
        top.classList.add("flex");
    } else {
        top.classList.add("hidden");
        top.classList.remove("flex");
        top.classList.add("hidden");
    }
}
 
 // Get the background and links
const activeBg = document.getElementById("active-bg");
const links = document.querySelectorAll("nav a");

// Set initial background size based on the first link's size
const setActiveBgSize = (link) => {
    const linkWidth = link.offsetWidth;  // Get the width of the clicked link
    const linkPosition = link.offsetLeft; // Get the position of the clicked link
    activeBg.style.width = `${linkWidth}px`;  // Set background width equal to link width
    activeBg.style.transform = `translateX(${linkPosition}px)`;  // Move background to link position
};

// Array to store the sections corresponding to each link
const sections = document.querySelectorAll("section");

// Add event listeners to each link for manual clicking
links.forEach(link => {
    link.addEventListener("click", (event) => {
        setActiveBgSize(event.target);  // Update the background size and position when clicked

        // Change text color for active link and reset others
        links.forEach(l => l.classList.remove("text-white"));
        link.classList.add("text-white");
    });
});

// IntersectionObserver to detect the current section in view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const currentSection = entry.target.getAttribute('id'); // Get the current section's ID
            const activeLink = document.querySelector(`a[href="#${currentSection}"]`); // Select the corresponding link

            // Update background and link styling
            if (activeLink) {
                setActiveBgSize(activeLink);  // Adjust background
                links.forEach(l => l.classList.remove("text-white"));
                activeLink.classList.add("text-white");  // Highlight active link
            }
        }
    });
}, {
    threshold: [0.1, 0.3, 0.5, 0.7], // Multiple thresholds for better accuracy
    rootMargin: '0px 0px -50%' // Extends the observer's viewport to trigger earlier for longer content
});

// Observe each section
sections.forEach(section => {
    observer.observe(section);
});
  
    // text chaange
    const texts = [
        { id: 'text-1', delay: 1000 },
        { id: 'text-2', delay: 2000 },
        { id: 'text-3', delay: 3000 },
        { id: 'text-4', delay: 4000 },
    ];
    
    let currentIndex = 0;
 
    // Fungsi untuk menampilkan teks secara bertahap
    function showText() {
        // Sembunyikan semua teks sebelum menampilkan teks berikutnya
        texts.forEach((text, index) => {
            const currentText = document.getElementById(text.id);
            if (index === currentIndex) {
                currentText.classList.remove('opacity-0', 'hidden');
                currentText.classList.add('opacity-100');
            } else {
                currentText.classList.remove('opacity-100');
                currentText.classList.add('opacity-0', 'hidden');
            }
        });
 
        // Naikkan indeks untuk menampilkan teks berikutnya
        currentIndex++;
 
        // Reset index to loop back to the first text after all texts are shown
        if (currentIndex >= texts.length) {
            currentIndex = 0;  
        }
 
        // Apply delay for the next text
        setTimeout(showText, texts[currentIndex].delay);
    }
 
    window.onload = () => {
        showText();  // Start the text animation loop
    };

// hambureger menu
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function (){
    hamburger.classList.toggle("hamburger-active");
    navMenu.classList.toggle("hidden");
});

// close-hamburger-menu
window.addEventListener('click', function(e) {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove("hamburger-active");
        navMenu.classList.add("hidden");
    }
});

//navbar desktop
window.addEventListener('resize', function() {
    const navDesktop = document.getElementById('nav-desktop');
    
    if (window.innerWidth >= 768) {
        navDesktop.style.display = 'flex';  
    } else {
        navDesktop.style.display = 'none';  
    }
});

window.dispatchEvent(new Event('resize'));


// dark mode
document.getElementById("toggle-mode").addEventListener("change", function () {
    const sunIcon = document.querySelector(".sun-icon");
    const moonIcon = document.querySelector(".moon-icon");

    if (this.checked) {
        // Animasi dari sun ke moon
        sunIcon.classList.add("hidden");
        sunIcon.classList.remove("visible");

        moonIcon.classList.remove("hidden");
        moonIcon.classList.add("visible");
    } else {
        // Animasi dari moon ke sun
        moonIcon.classList.add("hidden");
        moonIcon.classList.remove("visible");

        sunIcon.classList.remove("hidden");
        sunIcon.classList.add("visible");
    }

    // Ganti mode gelap atau terang
    document.documentElement.classList.toggle('dark');
});


