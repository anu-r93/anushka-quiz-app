const form = document.querySelector('[data-js="question-card"]');
const mainContainer = document.getElementsByClassName("main-container")[0];
const submitButton = document.querySelector('[data-js="submit-button"]');
const questionInputLength = document.querySelector(
  '[data-js="question-length"]'
);
const answerInputLength = document.querySelector('[data-js="answer-length"]');

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const formData = new FormData(form);

  const data = Object.fromEntries(formData);

  const section = document.createElement("section");
  section.className = "card-container";

  const heading = document.createElement("h4");
  heading.textContent = data.question;
  section.append(heading);

  const button = document.createElement("button");
  button.className = "answer";
  button.textContent = "SHOW ANSWER";

  let showAnswer = false;

  const answerButton = document.createElement("p");

  button.addEventListener("click", () => {
    if (showAnswer) {
      answerButton.style.display = "none";
      button.textContent = "SHOW ANSWER";
    } else {
      answerButton.style.display = "block";
      button.textContent = "HIDE ANSWER";
    }
    showAnswer = !showAnswer;
  });
  section.append(button);

  answerButton.textContent = data.answer;
  answerButton.style.display = "none";
  section.append(answerButton);

  const tagName = document.createElement("p");
  const article = document.createElement("article");
  article.className = "tag";
  tagName.textContent = data.tag;
  article.append(tagName);
  section.append(article);

  const bookmark = document.createElement("div");
  bookmark.className = "bookmark";
  const bookmarkImage = document.createElement("img");
  bookmarkImage.src = "resources/bookmark_transparent.png";
  let formToggleBookmark = false;
  bookmark.addEventListener("click", (event) => {
    if (formToggleBookmark) {
      event.target.setAttribute("src", "resources/bookmark_transparent.png");
    } else {
      event.target.setAttribute("src", "resources/bookmark_filled.png");
    }
    formToggleBookmark = !formToggleBookmark;
  });
  bookmark.append(bookmarkImage);
  section.append(bookmark);

  mainContainer.append(section);

  form.reset();
});

const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");
const maxLength = 150;

const getRemainingCount = (length) => {
  return maxLength - length;
};

questionElement.addEventListener("input", (event) => {
  const remaining = getRemainingCount(event.target.value.length);
  questionInputLength.textContent = remaining;
});

answerElement.addEventListener("input", (event) => {
  const remaining = getRemainingCount(event.target.value.length);
  answerInputLength.textContent = remaining;
});
