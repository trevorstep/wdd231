import { getParkData, parkInfoLinks, getInfoLinks } from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import { mediaCardTemplate } from "./templates.mjs";


function Navigation(){
const menuButton =document.querySelector("#global-nav-toggle");
const nav = document.querySelector(".global-nav");

if (!menuButton || !nav) return;
  menuButton.addEventListener("click", () => {
  nav.classList.toggle("show");
  const isOpen = nav.classList.contains("show");
  
  menuButton.setAttribute("aria-expanded", isOpen);
  menuButton.setAttribute("aria-label", isOpen ? "Close Menu" : "Open Menu");
});
}

function setParkIntro(parkData) {
  const introEl = document.querySelector(".intro");
  introEl.innerHTML = `<h1>${parkData.fullName}</h1>
  <p>${parkData.description}</p>`;
}

function setParkInfoLinks(parkData) {
  const infoEl = document.querySelector(".info");
  // we have multiple links to build...so we map to transform the array of objects into an array of HTML strings.
  const html = parkData.map(mediaCardTemplate);
  // join the array of strings into one string and insert it into the section
  infoEl.insertAdjacentHTML("afterbegin", html.join(""));
}

async function init() {
  const parkData = await getParkData();
  // const links = getInfoLinks(parkData.images);
  await setHeaderFooter(parkData);
  Navigation();
  setParkIntro(parkData);
  setParkInfoLinks(parkInfoLinks);
}



init();