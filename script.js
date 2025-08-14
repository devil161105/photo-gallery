const boxes = document.querySelectorAll('.box');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let currentIndex = 0;
let images = [];

// Store all image URLs
boxes.forEach(box => {
    images.push(box.style.backgroundImage.slice(5, -2));
});

// Open lightbox with clicked image
boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        currentIndex = index;
        showImage();
        lightbox.style.display = 'flex';
    });
});

function showImage() {
    lightboxImg.src = images[currentIndex];
}

// Next button
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
});

// Prev button
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
});

// Close button
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Close when clicking outside image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});
