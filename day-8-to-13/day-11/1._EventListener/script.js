// ! DOM Manipulation

// TODO : Event Listeners

// element.addEventListener("click", function)

const buttonTwo = document.getElementById("btn-two");


const alertBtn = () => alert(`Hey ! You click ${buttonTwo.innerText}`)

buttonTwo.addEventListener("click", alertBtn);

// Mouseover handler

const buttonThree = document.getElementById("btn-three");

const changeBgColor = () => buttonThree.style.backgroundColor = 'brown';

buttonThree.addEventListener("mouseover", changeBgColor);

