AOS.init();
emailjs.init("user_Vdmt0caMSMBOhMowO7oMK");
const menu = document.querySelector(".menu");
const navOpen = document.querySelector(".hamburger");
const navClose = document.querySelector(".close");

const navLeft = menu.getBoundingClientRect().left;
navOpen.addEventListener("click", () => {
  console.log(navLeft);
  if (!menu.classList.contains("show")) {
    menu.classList.add("show");
    document.body.classList.add("show");
    navBar.classList.add("show");
  }
});

navClose.addEventListener("click", () => {
  if (menu.classList.contains("show")) {
    menu.classList.remove("show");
    document.body.classList.remove("show");
    navBar.classList.remove("show");
  }
});

// Fixed Nav
const navBar = document.querySelector(".nav");
const navHeight = navBar.getBoundingClientRect().height;
// window.addEventListener("scroll", () => {
//   const scrollHeight = window.pageYOffset;
//   if (scrollHeight > navHeight) {
//     navBar.classList.add("fix-nav");
//   } else {
//     navBar.classList.remove("fix-nav");
//   }
// });

const header = document.querySelector(".hero");

const headerObserver = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      navBar.classList.remove("fix-nav");
    } else {
      navBar.classList.add("fix-nav");
    }
  },
  {
    root: null,
    threshold: [0.4],
    rootMargin: `-${navHeight}px`,
  }
);
headerObserver.observe(header);

// Scroll To
const links = [...document.querySelectorAll(".scroll-link")];
links.map((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const fixNav = navBar.classList.contains("fix-nav");
    let position = element.offsetTop - navHeight;

    window.scrollTo({
      top: position,
      left: 0,
    });

    navBar.classList.remove("show");
    menu.classList.remove("show");
    document.body.classList.remove("show");
  });
});

if (!document.body.classList.contains("ar")) {
  const str1 = "Najaf invesment commission";
  const str2 = "ministry of agriculture";

  new TypeIt("#type1", {
    speed: 120,
    loop: true,
    waitUntilVisible: true,
  })
    .type(str1, { delay: 400 })
    .pause(500)
    .delete(str1.length)
    .type(str2, { delay: 400 })
    .pause(500)
    .delete(str2.length)
    .go();
} else {
  const arStr1 = "هيئة النجف الاستثمارية";
  const arStr2 = "وزارة الزراعة";

  new TypeIt("#type2", {
    speed: 120,
    loop: true,
    waitUntilVisible: true,
  })
    .type(arStr1, { delay: 400 })
    .pause(500)
    .delete(arStr1.length)
    .type(arStr2, { delay: 400 })
    .pause(500)
    .delete(arStr2.length)
    .go();
}

gsap.from(".logo", { opacity: 0, duration: 1, delay: 0.5, y: -10 });
gsap.from(".hamburger", { opacity: 0, duration: 1, delay: 0.5, x: 20 });
// gsap.from(".banner", { opacity: 0, duration: 1, delay: 0.5, x: -200 });
// gsap.from(".hero h3", { opacity: 0, duration: 1, delay: 0.5, y: -50 });
gsap.from(".hero h1", { opacity: 0, duration: 1, delay: 0.5, y: -45 });
gsap.from(".hero h4", { opacity: 0, duration: 1, delay: 0.5, y: -30 });
gsap.from(".hero a", { opacity: 0, duration: 1, delay: 0.5, y: 50 });
gsap.from(".nav-item", {
  opacity: 0,
  duration: 1,
  delay: 1.2,
  y: 30,
  stagger: 0.2,
});
// gsap.from(".icons span", {
//   opacity: 0,
//   duration: 1,
//   delay: 4,
//   x: -30,
//   stagger: 0.2,
// });

const hero = document.querySelector(".hero");
let i = 0;
const imgs = [
  "./images/najaf3.jpg",
  "./images/najaf4.jpg",
  "./images/landini12.jpg",
  "./images/najaf9.jpg",
  "./images/transworldCard.png",
  "./images/god.jpg",
];
const interval = setInterval(() => {
  i++;
  if (i > imgs.length - 1) {
    i = 0;
  }
  hero.style.background = `url(${imgs[i]})`;
  hero.style.backgroundSize = "cover";
}, 5000);
// form submition

const form = document.querySelector(".form");
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const textarea = document.querySelector("#textarea");
const subject = document.querySelector("#subject");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const template = {
    name: nameInput.value,
    email: email.value,
    textarea: textarea.value,
    subject: subject.value,
  };
  emailjs.send("service_6qjv6ok", "template_dblp03d", template).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
      alert("SUCCESS");
    },
    function (error) {
      console.log("FAILED...", error);
    }
  );
  nameInput.value = "";
  subject.value = "";
  textarea.value = "";
  email.value = "";
});

const model = document.querySelector(".model");
const modelImg = document.querySelector(".model__img");
const modelImgs = document.querySelectorAll(".grid__item img");

modelImgs.forEach((img) => {
  img.addEventListener("click", (e) => {
    model.classList.remove("hidden");
    const src = img.getAttribute("src");
    modelImg.src = src;
  });
});

model.addEventListener("click", (e) => {
  if (!e.target.classList.contains("model")) return;
  model.classList.add("hidden");
});
