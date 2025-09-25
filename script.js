const toggleBtn = document.getElementById("darkToggle");
const toggleBtnMobile = document.getElementById("darkToggleMobile");

function toggleDark() {
  document.documentElement.classList.toggle("dark");
  const isDark = document.documentElement.classList.contains("dark");
  if (toggleBtn) toggleBtn.textContent = isDark ? "☀️" : "🌙";
  if (toggleBtnMobile) toggleBtnMobile.textContent = isDark ? "☀️" : "🌙";
}

if (toggleBtn) toggleBtn.addEventListener("click", toggleDark);
if (toggleBtnMobile) toggleBtnMobile.addEventListener("click", toggleDark);

// Mobile 
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

const text = "Frontend Developer";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("role").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 120);
  }
}
window.onload = typeWriter;



window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.classList.add("bg-green-600", "text-white");
    nav.classList.remove("bg-white", "text-gray-700");
  } else {
    nav.classList.remove("bg-green-600", "text-white");
    nav.classList.add("bg-white", "text-gray-700");
  }
});

document.querySelectorAll("nav a").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});


const topBtn = document.createElement("button");
topBtn.innerText = "↑ Top";
topBtn.className = "hidden fixed bottom-6 right-6 bg-green-600 text-white px-4 py-2 rounded-full shadow hover:bg-green-700";
document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.classList.remove("hidden");
  } else {
    topBtn.classList.add("hidden");
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
