// navigation responsiveness
document.querySelector('.menu-toggle').addEventListener('click', function() {
    if (window.innerWidth <= 900) {
        document.getElementById('nav-div').classList.toggle('open');
    }
});

document.querySelectorAll('.right-nav').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 900) {
            document.getElementById('nav-div').classList.remove('open');
        }
    });
});

// skill & stack
const skillBtn = document.getElementById("skill");
const stackBtn = document.getElementById("stack");
const skillStackDesc = document.getElementById("s-t");
const skillTxt = document.getElementById("skill-txt");
const stackTxt = document.getElementById("stack-txt");

function stack() {
    stackBtn.style.transform = "translateX(5px)";
    stackBtn.style.transform = "scale(1.05)";
    stackBtn.style.zIndex = "900";

    skillBtn.style.transform = "translateX(-5px)";
    skillBtn.style.transform = "scale(1)";
    skillBtn.style.zIndex = "0";

    skillStackDesc.style.borderColor = "white";
    skillStackDesc.style.borderRadius = " 8px 0 0 0";

    skillStackDesc.innerHTML = "<div><ul><li>HTML</li><li>CSS</li><li>JavaScript</li><li>Java</li><li>Python</li><li>Pygame</li></ul></div><div><ul><li>Linux</li></ul></div>";
}

function skill() {
    stackBtn.style.transform = "translateX(-5px)";
    stackBtn.style.transform = "scale(1)";
    stackBtn.style.zIndex = "0";

    skillBtn.style.transform = "translateX(5px)";
    skillBtn.style.transform = "scale(1.05)";
    skillBtn.style.zIndex = "900";

    skillStackDesc.style.borderColor = "black";
    skillStackDesc.style.borderRadius = " 0 8px 0 0";

    skillStackDesc.innerHTML = '<div ><ul><li>Responsive &amp; Adaptive Layout Design</li><li>Object-Oriented Programming (OOP) &amp; Design</li><li>Troubleshooting &amp; Debugging</li><li>Fundamental Syntax Understanding</li><li>Systems &amp; Network Fundamentals</li><li>Problem Solving</li></ul></div>';
}

// carousel
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const prevBtn2 = document.getElementById('bottom-btn-left2');
let currentIndex = 0;

function updateCarousel() {
    track.style.transform = 'translateX(' + (-currentIndex * 100) + '%)';
}

nextBtn.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarousel();
});

[prevBtn, prevBtn2].forEach(btn => {
    btn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = slides.length - 1;
        }
        updateCarousel();
    });
});

window.addEventListener('resize', updateCarousel);

// carousel button resp
const bottomBtn1 = document.getElementById('bottom-btn-left1');
const bottomBtn2 = document.getElementById('bottom-btn-left2');
function bottomButtonResp() {

    if (window.innerWidth > 700) {
        bottomBtn1.style.display = "inline-block";
        bottomBtn2.style.display = "none";
    }
    else if (window.innerWidth <= 700) {
        bottomBtn1.style.display = "none";
        bottomBtn2.style.display = "inline-block";
    } 

}

bottomButtonResp();
window.addEventListener('resize', bottomButtonResp);