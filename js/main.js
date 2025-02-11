window.onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('Happy Valentines Day To My Pretty Girl 💓').split('');
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300); // 1000ms delay
      } else {
        // Add a paragraph after the title is fully displayed
        const paragraph = document.createElement('p');  // Create a new paragraph element
        paragraph.innerText = "You mean the world to me. 💖";  // Set the paragraph text
        document.body.appendChild(paragraph);  // Append the paragraph to the body
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};
