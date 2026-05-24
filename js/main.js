const glow = document.querySelector(".cursor-glow");

/* CURSOR GLOW */

document.addEventListener("mousemove", (e) => {

  glow.animate({
    left: `${e.clientX}px`,
    top: `${e.clientY}px`
  }, {
    duration: 300,
    fill: "forwards"
  });

});


/* SCROLL REVEAL */

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if(entry.isIntersecting){
      entry.target.classList.add("active");
    }

  });

}, {
  threshold:0.15
});

reveals.forEach((el) => observer.observe(el));


/* ACTIVE NAVBAR */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach((section) => {

    const sectionTop = section.offsetTop - 200;

    if(scrollY >= sectionTop){
      current = section.getAttribute("id");
    }

  });

  navLinks.forEach((link) => {

    link.classList.remove("active");

    if(link.getAttribute("href").includes(current)){
      link.classList.add("active");
    }

  });

});


/* TYPEWRITER */

const text = [
  "Frontend Developer",
  "UI Designer",
  "Creative Developer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

  if(count === text.length){
    count = 0;
  }

  currentText = text[count];

  letter = currentText.slice(0, ++index);

  document.querySelector(".tag").textContent = letter;

  if(letter.length === currentText.length){

    setTimeout(() => {

      index = 0;
      count++;

      setTimeout(type, 200);

    }, 1500);

  }else{

    setTimeout(type, 90);

  }

})();