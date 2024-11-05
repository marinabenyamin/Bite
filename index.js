let myElement = document.getElementById('allCards');
const reviews = document.querySelectorAll('.review');
let currentReview = 0; 
let intervalId; 

function showReview() {
    
    reviews.forEach((review) => {
        review.classList.remove('active');
    });

    reviews[currentReview].classList.add('active');

    
    currentReview = (currentReview + 1) % reviews.length; 
}


function startMovement() {
    intervalId = setInterval(showReview, 2000); 
}


myElement.addEventListener('mouseenter', () => {
    clearInterval(intervalId); 
});


myElement.addEventListener('mouseleave', () => {
    startMovement();
});


showReview(); 
startMovement(); 
