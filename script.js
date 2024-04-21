const bookmarkItem = document.querySelector('[data-js="bookmark-on-click"]');
const showAnswerElement = document.querySelector('[data-js="first--answer"]');
const displayAnswer = document.querySelector('[data-js="show--answer"]');

let toggleBookmark = false;

bookmarkItem.addEventListener("click", (event) => {
  // console.log(event);

  if (toggleBookmark) {
    event.target.setAttribute("src", "resources/bookmark_transparent.png");
  } else {
    event.target.setAttribute("src", "resources/bookmark_filled.png");
  }
  toggleBookmark = !toggleBookmark;
});

// ----------------------

let toggleAnswer = true;

showAnswerElement.addEventListener("click", () => {
  if (toggleAnswer) {
    showAnswerElement.textContent = "HIDE ANSWER";
    displayAnswer.style.display = "block";
  } else {
    showAnswerElement.textContent = "SHOW ANSWER";
    displayAnswer.style.display = "none";
  }
  toggleAnswer = !toggleAnswer;
});

// ----------------------
