//const myHeading = document.querySelector("h1");
//myHeading.textContent = "Love Sunny forever";
const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/sunny-love-2.jfif") {
    myImage.setAttribute("src", "images/sunny-love.jfif");
  } else {
    myImage.setAttribute("src", "images/sunny-love-2.jfif");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `${myName} love Sunny forever`;
    }
  }

if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `${storedName} love Sunny forever`;
  }

  myButton.onclick = () => {
    setUserName();
  };