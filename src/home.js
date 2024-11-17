// home.js
export default function loadHome() {
  const homeDiv = document.createElement('div');
  homeDiv.classList.add("home-div");

  
  const heading = document.createElement("h1");
  heading.textContent = "Come on down for some delicious cuisine!";

  const subHeading = document.createElement("h2");
  subHeading.textContent = "Tasty and affordable!";

  const menuBtn = document.createElement("button");
  menuBtn.textContent = "Order Now";
  menuBtn.setAttribute("id", "orderNow");

  homeDiv.appendChild(heading);
  homeDiv.appendChild(subHeading);
  homeDiv.appendChild(menuBtn);

  return homeDiv;
}


