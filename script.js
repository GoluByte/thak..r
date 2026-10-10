const loveBtn = document.getElementById("loveBtn");
const message = document.getElementById("message");
const heartsContainer = document.querySelector(".hearts-container");


// Button click
loveBtn.addEventListener("click", () => {

    message.classList.add("show");

    loveBtn.innerHTML = "I Love You Too ❤️";

    loveBtn.style.display = "none";

    createHeartExplosion();

});


// Create floating hearts
function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("floating-heart");

    const hearts = [
        "❤️",
        "💗",
        "💕",
        "💖",
        "💘",
        "💓"
    ];

    heart.innerHTML =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        15 + Math.random() * 25 + "px";

    heart.style.animationDuration =
        5 + Math.random() * 5 + "s";

    heartsContainer.appendChild(heart);


    setTimeout(() => {
        heart.remove();
    }, 10000);
}


// Continuously create hearts
setInterval(createHeart, 500);


// Heart explosion
function createHeartExplosion() {

    for (let i = 0; i < 30; i++) {

        const heart = document.createElement("div");

        heart.classList.add("floating-heart");

        heart.innerHTML = "❤️";

        heart.style.left = "50%";

        heart.style.bottom = "45%";

        heart.style.fontSize =
            15 + Math.random() * 25 + "px";

        heart.style.animationDuration =
            2 + Math.random() * 2 + "s";

        heart.style.transform =
            `translate(${Math.random() * 500 - 250}px,
             ${Math.random() * -500}px)`;

        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 4000);
    }
}