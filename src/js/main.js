import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

function parkIntroTemplate(info) {
    return `<h1>${info.name}</h1>`;

}

function parkInfoTemplate(info) {
    return `<a href="/" class="hero-banner__title">${info.name}</a>
  <p class="hero-banner__subtitle">
    <span>${info.designation}</span>
    <span>${info.states}</span>
  </p>`;
}



function setHeaderInfo(data) {
    // insert data into disclaimer section
    const disclaimer = document.querySelector(".disclaimer > a");
    disclaimer.href = data.url;
    disclaimer.innerHTML = data.fullName;
    // update the title of the site. Notice that we can select things in the head just like in the body with querySelector
    document.querySelector("head > title").textContent = data.fullName;
    // set the banner image
    document.querySelector(".hero-banner__image").src = data.images[0].url;

    document.querySelector(".hero-banner__content").innerHTML =
        parkInfoTemplate(data);
}




setHeaderInfo(parkData);
parkInfoTemplate(parkData);


// OR if you want to use your template:
document.querySelector("#intro").innerHTML = parkIntroTemplate(parkData);