const letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

const passwordForm = document.getElementById("password-form");
const passOne = document.querySelector(".pg__password-one");
const passTwo = document.querySelector(".pg__password-two");

passwordForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let charactersArray = getCharactersArray();
  let numCharacters = document.getElementById("pass-length").value;
  let passwordOne = generatePassword(charactersArray, numCharacters);
  passOne.textContent = passwordOne;
  let passwordTwo = generatePassword(charactersArray, numCharacters);
  passTwo.textContent = passwordTwo;
});

function getCharactersArray() {
  let characters = [...letters];
  let checkBoxes = Array.from(
    document.querySelectorAll("input[type='checkbox']:checked"),
  ).map((cb) => cb.value);
  if (checkBoxes.includes("numbers")) characters.push(...numbers);
  if (checkBoxes.includes("symbols")) characters.push(...symbols);
  return characters;
}

function generatePassword(characters, passLength) {
  let password = "";
  for (let i = 0; i < passLength; i++) {
    let randomIdx = Math.floor(Math.random() * characters.length);
    password += characters[randomIdx];
  }
  return password;
}

passOne.addEventListener("click", () =>
  copyToClipboard(passOne.textContent, passOne),
);
passTwo.addEventListener("click", () =>
  copyToClipboard(passTwo.textContent, passTwo),
);

async function copyToClipboard(text, element) {
  if (!text) return;
  try {
    await navigator.clipboard.writeText(text);
    element.textContent = "Copied!";
    setTimeout(() => {
      element.textContent = text;
    }, 1000);
  } catch (err) {
    console.warn("Failed to copy", err);
  }
}
