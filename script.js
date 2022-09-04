var inputBox = document.querySelector("#input-text");
var translateBtn = document.querySelector("#translate-btn");
var outputText = document.querySelector("#output-text");

const baseURL = "https://api.funtranslations.com/translate/oldenglish.json";

function getTranslationURL(inputText) {
  return baseURL + "?" + "text=" + inputText;
}

function handleError(error) {
  alert("Something went wrong! Please try again later");
  console.log(error);
}

function translateText() {
  var inputText = inputBox.value;

  fetch(getTranslationURL(inputText))
    .then((response) => response.json())
    .then((json) => (outputText.innerHTML = json.contents.translated))
    .catch(handleError);
}

translateBtn.addEventListener("click", translateText);
