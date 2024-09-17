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
 
 // Add event listeners to each link
 links.forEach(link => {
     link.addEventListener("click", (event) => {
         setActiveBgSize(event.target);  // Update the background size and position when clicked
 
         // Change text color for active link and reset others
         links.forEach(l => l.classList.remove("text-white"));
         link.classList.add("text-white");
     });
 });
 
 // Adjust background size once the page is fully loaded
 window.addEventListener('load', () => {
     setTimeout(() => {
         setActiveBgSize(links[0]);  // Set initial background for "Home" link
         links[0].classList.add("text-white");  // Set the "Home" link to active by adding the text-white class
     }, 100);  // Add a short delay to ensure layout is fully loaded
 });
 
    
    // Array teks dan ID untuk ditampilkan
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
 
    // Mulai menampilkan teks, teks pertama tampil tanpa animasi
    window.onload = () => {
        showText();  // Start the text animation loop
    };

    