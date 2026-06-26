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

const skillBtn = document.getElementById("skill");
const stackBtn = document.getElementById("stack");
const skillStackDesc = document.getElementById("s-t");

function stack() {
    stackBtn.style.backgroundColor = "#050515";
    stackBtn.style.color = "white";
    stackBtn.style.transform = "scale(1.05)";
    stackBtn.style.zIndex = "900";

    skillBtn.style.backgroundColor = "#050515";
    skillBtn.style.color = "white";
    skillBtn.style.transform = "scale(1)";
    skillBtn.style.zIndex = "0";

    skillStackDesc.innerHTML = `
        <div class="item-card">
            <div class="item-card-header">
                <i class="fa-brands fa-html5" style="color: #e34f26;"></i>
                <h4>HTML5</h4>
            </div>
            <p>Structural Semantics & Markup Layouts</p>
        </div>
        <div class="item-card">
            <div class="item-card-header">
                <i class="fa-brands fa-css3-alt" style="color: #1572b6;"></i>
                <h4>CSS3</h4>
            </div>
            <p>Custom Keyframes, Layouts & Theming</p>
        </div>
        <div class="item-card">
            <div class="item-card-header">
                <i class="fa-brands fa-js" style="color: #f7df1e;"></i>
                <h4>JavaScript</h4>
            </div>
            <p>Asynchronous DOM Logic & Basic Animations</p>
        </div>
        <div class="item-card">
            <div class="item-card-header">
                <i class="fa-brands fa-java" style="color: #007396;"></i>
                <h4>Java</h4>
            </div>
            <p>Java Fundamentals</p>
        </div>
        <div class="item-card">
            <div class="item-card-header">
                <i class="fa-brands fa-python" style="color: #3776ab;"></i>
                <h4>Python</h4>
            </div>
            <p>Python Fundamentals</p>
        </div>
        <div class="item-card">
            <div class="item-card-header">
                <i class="fa-solid fa-gamepad" style="color: #92cd41;"></i>
                <h4>Pygame</h4>
            </div>
            <p>2D Engine Physics & Pixel Frame States</p>
        </div>
        <div class="item-card">
            <div class="item-card-header">
                <i class="fa-brands fa-linux" style="color: #f8981d;"></i>
                <h4>Linux Bash</h4>
            </div>
            <p>Basic Linux Commands (TBH I'm not a linux nerd It just happens that I daily drive Debian)</p>
        </div>
    `;
}

function skill() {
    stackBtn.style.backgroundColor = "#050515";
    stackBtn.style.color = "white";
    stackBtn.style.transform = "scale(1)";
    stackBtn.style.zIndex = "0";

    skillBtn.style.backgroundColor = "#050515";
    skillBtn.style.color = "white";
    skillBtn.style.transform = "scale(1.05)";
    skillBtn.style.zIndex = "900";

    skillStackDesc.innerHTML = `
        <div class="item-card">
            <h4>Responsive Design</h4>
            <p>Responsive &amp; Adaptive Layout Design</p>
        </div>
        <div class="item-card">
            <h4>OOP Concepts</h4>
            <p>Object-Oriented Programming &amp; Design</p>
        </div>
        <div class="item-card">
            <h4>Debugging</h4>
            <p>Troubleshooting &amp; Debugging Code</p>
        </div>
        <div class="item-card">
            <h4>Core Syntax</h4>
            <p>Fundamental Syntax Understanding</p>
        </div>
        <div class="item-card">
            <h4>Systems</h4>
            <p>Systems &amp; Network Fundamentals</p>
        </div>
        <div class="item-card">
            <h4>Logic</h4>
            <p>Complex Problem Solving Skills</p>
        </div>
    `;
}

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