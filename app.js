let btn = document.querySelector('.btn');
let textInput = document.querySelector('.text__input');
let textOutput = document.querySelector('.text__output');
let serverURL = 'https://api.funtranslations.com/translate/minion.json';

const getTranslationURL = (text) => `${serverURL}?text=${text}`;

btn.addEventListener('click', () => {
  fetch(getTranslationURL(textInput.value))
    .then((response) => response.json())
    .then((data) => {
      textOutput.innerText = data.contents.translated;
      console.log(data.contents.translated);
    })
    .catch((error) => console.log(error));
});
