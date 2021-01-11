/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(timeString) {
  const splitTime = timeString.split(':');
  const convertTime = parseInt(splitTime);

  if (convertTime < 12) {
    return "Good Morning"
  }
  else if (convertTime > 12 && convertTime < 17) {
    return "Good Afternoon"
  }
  else {
    return "Good Evening"
  }
}

function displayMessage(message) {
  document.getElementById('greeting').innerText = message;
}
