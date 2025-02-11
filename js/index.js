const title = document.querySelector('.title');
const text = 'Happy Valentines Day Francheska!';

// Split the text into two parts: one for the first line and one for the second line
const firstLine = 'Happy Valentines Day';
const secondLine = 'Francheska!';

// Add the first part of the text
for (let index = 0; index < firstLine.length; index++) {
  if (firstLine[index] !== ' ') {
    title.innerHTML += `<span>${firstLine[index]}<span/>`;
  } else {
    title.innerHTML += `<span style='margin-right: 15px;'><span/>`;
  }
}

// Add a line break between the two parts
title.innerHTML += `<br />`;

// Add the second part of the text
for (let index = 0; index < secondLine.length; index++) {
  if (secondLine[index] !== ' ') {
    title.innerHTML += `<span>${secondLine[index]}<span/>`;
  } else {
    title.innerHTML += `<span style='margin-right: 15px;'><span/>`;
  }
}

const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 3;
  element.style.animationDelay = `${randomDelay}s`;
});

const button = document.querySelector('.btn');
button.addEventListener('click', () => {
  const newParagraph = document.createElement('p');
  newParagraph.innerText = "Hi Ysabel!"; // Paragraph content
  newParagraph.classList.add('new-paragraph');
  document.body.appendChild(newParagraph); // Append to the body
});
