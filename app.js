const triggerBtn = document.querySelector("#trigger-btn");

triggerBtn.addEventListener(
  "mousedown",
  () => (triggerBtn.style.transform = "rotate(180deg)")
);
triggerBtn.addEventListener(
  "mouseup",
  () => (triggerBtn.style.transform = "rotate(0deg)")
);

const s1 = document.querySelector("#slot1"),
  s2 = document.querySelector("#slot2"),
  s3 = document.querySelector("#slot3"),
  slot = document.querySelectorAll(".slot"),
  trigger = document.querySelector("#trigger"),
  userAttempts = document.querySelector("#attempts"),
  gameOverBox = document.querySelector("#game-over-container"),
  resultBox = document.querySelector("#result"),
  messageBox = document.querySelector("#message"),
  emoji = document.querySelector("#emoji"),
  continueBtn = document.querySelector("#continue"),
  playAgainBtn = document.querySelector("#play-again");

const slotItems = ["😃", "😺", "🍌", "🌵", "🍮", "🏦"];
let attempts = 0;
const totalAttempts = 30;

const updateAttempts = () => {
  userAttempts.innerHTML = totalAttempts - attempts;
};

updateAttempts();
const changeCombination = () => {
  if (attempts < totalAttempts) {
    slot.forEach((e) => {
      const random = Math.floor(Math.random() * 6);
      const item = slotItems[random];
      e.innerHTML = item;
    });
    attempts++;
    updateAttempts();
    if (s1.innerHTML === s2.innerHTML && s2.innerHTML === s3.innerHTML) {
      gameOverBox.classList.remove("hidden");
      resultBox.innerHTML = "You Won!";
      resultBox.style.color = "green";
      messageBox.innerHTML = `You took ${attempts} ${
        attempts === 1 ? "attempt" : "attempts"
      }`;
      emoji.innerHTML = `${s1.innerHTML} ${s1.innerHTML} ${s1.innerHTML}`;
    }
  } else {
    gameOverBox.classList.remove("hidden");
    resultBox.innerHTML = "You Lose";
    resultBox.style.color = "red";
    messageBox.innerHTML = `Try next time`;
    emoji.innerHTML = "😔";
  }
};

const resetGame = () => {
  gameOverBox.classList.add("hidden");
  attempts = 0;
  updateAttempts();
  slot.forEach((e) => {
    e.innerHTML = "-";
  });
};

playAgainBtn.addEventListener("click", resetGame);

trigger.addEventListener("click", changeCombination);
