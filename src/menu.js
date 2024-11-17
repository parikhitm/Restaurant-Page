// menu.js
import hamburgerImage from "./images/hamburger.png";
import cheeseburgerImage from "./images/cheeseburger.png";
import doublecheeseburgerImage from "./images/double-cheeseburger.png";
import steakImage from "./images/steak.png";
import bbqRibsImage from "./images/ribs.png";
import sandwichImage from "./images/grilled-cheese.png";
import saladImage from "./images/caesar-salad.png";
import friesImage from "./images/french-fries.png";


export default function loadMenu() {
  const menuDiv = document.createElement('div');
  const heading = document.createElement("h1");
  const menuFormDiv = document.createElement("div");

  menuDiv.classList.add("menu-div");
  menuFormDiv.classList.add("menu-form-div");
  heading.classList.add("menu-heading");

  heading.textContent = "Menu";  

// Hamburger Item
const hamburger = document.createElement("img");
hamburger.src = hamburgerImage;
hamburger.classList.add("item-image");

const hamburgerDiv = document.createElement("div");
hamburgerDiv.classList.add("menu-items");

hamburgerDiv.appendChild(hamburger);

const hamburgerInfo = document.createElement("div");
hamburgerInfo.classList.add("item-info");

const hamburgerName = document.createElement("div");
hamburgerName.classList.add("item-name");
hamburgerName.innerHTML = `<p>Hamburger:</p>
                    <span>$2.49</span>`;
const hamburgerPara = document.createElement("p");
hamburgerPara.textContent = "Buns, patty, tomato, onions, lettuce, and our secret family recipe.";

  menuDiv.appendChild(heading);
  menuDiv.appendChild(menuFormDiv);
  menuFormDiv.appendChild(hamburgerDiv);
  hamburgerDiv.appendChild(hamburgerInfo);
  hamburgerInfo.appendChild(hamburgerName);
  hamburgerInfo.appendChild(hamburgerPara);



// Cheeseburger Item
const cheeseburger = document.createElement("img");
cheeseburger.src = cheeseburgerImage;
cheeseburger.classList.add("item-image");

const cheeseburgerDiv = document.createElement("div");
cheeseburgerDiv.classList.add("menu-items");

cheeseburgerDiv.appendChild(cheeseburger);

const cheeseburgerInfo = document.createElement("div");
cheeseburgerInfo.classList.add("item-info");

const cheeseburgerName = document.createElement("div");
cheeseburgerName.classList.add("item-name");
cheeseburgerName.innerHTML = `<p>Cheeseburger:</p>
                    <span>$2.99</span>`;
const cheeseburgerPara = document.createElement("p");
cheeseburgerPara.textContent = "Similar to our hamburger, but with cheese.";

  menuFormDiv.appendChild(cheeseburgerDiv);
  cheeseburgerDiv.appendChild(cheeseburgerInfo);
  cheeseburgerInfo.appendChild(cheeseburgerName);
  cheeseburgerInfo.appendChild(cheeseburgerPara);



// Double Cheeseburger Item
const doublecheeseburger = document.createElement("img");
doublecheeseburger.src = doublecheeseburgerImage;
doublecheeseburger.classList.add("item-image");

const doublecheeseburgerDiv = document.createElement("div");
doublecheeseburgerDiv.classList.add("menu-items");

doublecheeseburgerDiv.appendChild(doublecheeseburger);

const doublecheeseburgerInfo = document.createElement("div");
doublecheeseburgerInfo.classList.add("item-info");

const doublecheeseburgerName = document.createElement("div");
doublecheeseburgerName.classList.add("item-name");
doublecheeseburgerName.innerHTML = `<p>Double Cheeseburger:</p>
                    <span>$3.49</span>`;
const doublecheeseburgerPara = document.createElement("p");
doublecheeseburgerPara.textContent = "Similar to our hamburger, but with cheese.";

  menuFormDiv.appendChild(doublecheeseburgerDiv);
  doublecheeseburgerDiv.appendChild(doublecheeseburgerInfo);
  doublecheeseburgerInfo.appendChild(doublecheeseburgerName);
  doublecheeseburgerInfo.appendChild(doublecheeseburgerPara);






// Steak Item
const steak= document.createElement("img");
steak.src = steakImage;
steak.classList.add("item-image");

const steakDiv = document.createElement("div");
steakDiv.classList.add("menu-items");

steakDiv.appendChild(steak);

const steakInfo = document.createElement("div");
steakInfo.classList.add("item-info");

const steakName = document.createElement("div");
steakName.classList.add("item-name");
steakName.innerHTML = `<p>Steak:</p>
                    <span>$11.99</span>`;
const steakPara = document.createElement("p");
steakPara.textContent = "Similar to our hamburger, but with cheese.";

  menuFormDiv.appendChild(steakDiv);
  steakDiv.appendChild(steakInfo);
  steakInfo.appendChild(steakName);
  steakInfo.appendChild(steakPara);






// BBQ Ribs Item
const bbqRibs= document.createElement("img");
bbqRibs.src = bbqRibsImage;
bbqRibs.classList.add("item-image");

const bbqRibsDiv = document.createElement("div");
bbqRibsDiv.classList.add("menu-items");

bbqRibsDiv.appendChild(bbqRibs);

const bbqRibsInfo = document.createElement("div");
bbqRibsInfo.classList.add("item-info");

const bbqRibsName = document.createElement("div");
bbqRibsName.classList.add("item-name");
bbqRibsName.innerHTML = `<p>BBQ Ribs:</p>
                    <span>$8.99</span>`;
const bbqRibsPara = document.createElement("p");
bbqRibsPara.textContent = "Similar to our hamburger, but with cheese.";

  menuFormDiv.appendChild(bbqRibsDiv);
  bbqRibsDiv.appendChild(bbqRibsInfo);
  bbqRibsInfo.appendChild(bbqRibsName);
  bbqRibsInfo.appendChild(bbqRibsPara);




// Grilled Cheese Sandwich Item
const sandwich= document.createElement("img");
sandwich.src = sandwichImage;
sandwich.classList.add("item-image");

const sandwichDiv = document.createElement("div");
sandwichDiv.classList.add("menu-items");

sandwichDiv.appendChild(sandwich);

const sandwichInfo = document.createElement("div");
sandwichInfo.classList.add("item-info");

const sandwichName = document.createElement("div");
sandwichName.classList.add("item-name");
sandwichName.innerHTML = `<p>Grilled Cheese Sandwich:</p>
                    <span>$4.99</span>`;
const sandwichPara = document.createElement("p");
sandwichPara.textContent = "Similar to our hamburger, but with cheese.";

  menuFormDiv.appendChild(sandwichDiv);
  sandwichDiv.appendChild(sandwichInfo);
  sandwichInfo.appendChild(sandwichName);
  sandwichInfo.appendChild(sandwichPara);





// Caesar Salad Item
const salad= document.createElement("img");
salad.src = saladImage;
salad.classList.add("item-image");

const saladDiv = document.createElement("div");
saladDiv.classList.add("menu-items");

saladDiv.appendChild(salad);

const saladInfo = document.createElement("div");
saladInfo.classList.add("item-info");

const saladName = document.createElement("div");
saladName.classList.add("item-name");
saladName.innerHTML = `<p>Caesar Salad:</p>
                    <span>$7.99</span>`;
const saladPara = document.createElement("p");
saladPara.textContent = "Similar to our hamburger, but with cheese.";

  menuFormDiv.appendChild(saladDiv);
  saladDiv.appendChild(saladInfo);
  saladInfo.appendChild(saladName);
  saladInfo.appendChild(saladPara);




// French Fries Item
const fries= document.createElement("img");
fries.src = friesImage;
fries.classList.add("item-image");

const friesDiv = document.createElement("div");
friesDiv.classList.add("menu-items");

friesDiv.appendChild(fries);

const friesInfo = document.createElement("div");
friesInfo.classList.add("item-info");

const friesName = document.createElement("div");
friesName.classList.add("item-name");
friesName.innerHTML = `<p>French Fries:</p>
                    <span>$1.99</span>`;
const friesPara = document.createElement("p");
friesPara.textContent = "Similar to our hamburger, but with cheese.";

  menuFormDiv.appendChild(friesDiv);
  friesDiv.appendChild(friesInfo);
  friesInfo.appendChild(friesName);
  friesInfo.appendChild(friesPara);


  return menuDiv;
}