"use strict";

// Use querySelector() to return the node that represents the first element with a specific css selector.
//node represents an object

let firstParagraph = document.querySelector(".pick-me"); //querySelector selects the first element

console.dir(firstParagraph); // Use console.dir to check out all the properties of the node (object)

firstParagraph.style.color = "green"; // modify the color property of the specified node

// Use querySelectorAll to return a NodeList of all the elements with a specific css selector.
let unicornParagraphs = document.querySelectorAll(".unicorn");

console.dir(unicornParagraphs); // use console.dir to check out all the properties of the node (object)

// use a loop to change the font-size property of every node in the NodeList
unicornParagraphs.forEach((paragraph) => {
  paragraph.style.fontSize = "32px";
});

//to create an instance of the element for the specified tag
let newDiv = document.createElement("div"); //within the newDiv variable, I have created a new div element

newDiv.setAttribute("class", "new-div"); //Add an attribute to an element

newDiv.innerText = "Hello from the new text div!"; //add text to the new div element

console.log(newDiv);

let mainContent = document.querySelector(".main-content");

//append the element we made (newDiv) to the existing element (mainContent)
mainContent.append(newDiv);

console.log(mainContent);

// attach an event listener to a specific element with an anonymous function
newDiv.addEventListener("click", () => {
  //when newDiv hears this click, it will log the callback function, we can NEVER remove the functionality with an anonymous function
  newDiv.style.backgroundColor = "green";
});

// When the paragraph with the class of pick-me is clicked, toggle the class of bolder, which has the property of font-weight: bolder. Use a named function.
const bolder = () => {
  firstParagraph.classList.toggle("strong");
};

firstParagraph.addEventListener("click", bolder); //adding eventlistener

firstParagraph.removeEventListener("click", bolder); //removing eventlistener

let someVariableName = document.querySelector(".js"); //creating a new node

someVariableName.classList.add("another");

someVariableName.classList.remove("another");

//========================================================================
//form submission

let signInForm = document.querySelector(".sign-in");

signInForm.addEventListener("submit", (event) => {
  //common to see "e" or "event"
  event.preventDefault();
  let data = new FormData(signInForm); //the form element is "sign In form"
  //   console.log(data.get("username")); //to log all the details of the information for the username
  let username = data.get("username"); //holds data for usernames
  let password = data.get("password"); //holds data for passwords
  let usernameParagraph = document.querySelector(".username");
  usernameParagraph.innerText = username;
  let passwordParagraph = document.querySelector(".password");
  passwordParagraph.innerText = password;
});

//========================================================================
//form submission

let money = document.querySelector(".money");

let total = 0;

money.addEventListener("click", () => {
  let amount = parseInt(money.getAttribute("data-amount"));
  total += amount;
  let totalParagraph = document.querySelector(".total");
  totalParagraph.innerText = total;
});
