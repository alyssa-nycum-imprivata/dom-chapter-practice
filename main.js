// Number One

const blogHeader = document.querySelector(".article__header");
blogHeader.textContent = "Welcome to the Alyssa Blog";

// Number Two

const headers = document.querySelectorAll(".article__header");
for (let i = 0; i < headers.length; i++) {
headers[i].classList.add("important");
}

// Number Three

const element = document.querySelector(".dashed");
element.classList.remove("dashed");

// Number Four

const footer = document.querySelector(".article__footer");
footer.classList.add("goldenrod");




