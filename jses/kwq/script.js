"use strict";

run(main);

function* main() {
  const sectionChoose = $("#choose-lang");
  const sectionPlay = $("#play");
  const sectionResults = $("#results");
  
  const alphabetical = $("#alphabetical");
  const choices = $("#choices");

  const buttons = [];
  for (const id in DATA) {
    const button = document.createElement("button");
    button.id = id;
    button.innerText = DATA[id].title;
    buttons.push(button);
  }

  shuffle(buttons);
  choices.append(...buttons);
  
  const result = $("#result");
  const playAgain = $("#play-again");

  while (true) {
    sectionChoose.style.display = "block";
    sectionResults.style.display = "none";
    sectionPlay.style.display = "none";

    const events = yield new Any(...(buttons.map(b => new Click(b))));

    sectionChoose.style.display = "none";
    sectionPlay.style.display = "block";

    const { keywords, source, insensitive } = (() => {
      for (const event of events) {
        if (event) {
          const id = event.target.id;
          const keywords = DATA[id].keywords;
          const source = DATA[id].source;
          const insensitive = DATA[id].insensitive || false;

          return { keywords, source, insensitive };
        }
      }
    })();

    const start = new Date();
    
    const { got, total } = yield* play(
      keywords, source, insensitive, alphabetical.checked,
    );
    
    const end = new Date();

    const elapsed = formatTime(start, end);
    const percent = Math.round(100 * got / total);
    
    result.innerText = `${got}/${total} (${percent}%) in ${elapsed}`;
    sectionResults.style.display = "block";
    
    showMissed();

    yield new Click(playAgain);
  }
}


function* play(wordlist, from, insensitive, alphabetical) {
  const inputKw = $("#kw");
  const giveUp = $("#give-up");
  const answers = $("#answers");
  const source = $("#source");

  inputKw.focus();
  
  answers.replaceChildren();
  source.innerText = from;

  // Initialize answers
  const total = wordlist.length;
  for (const i of order(0, total, !alphabetical)) {
    const kw = wordlist[i];
    
    const element = document.createElement("span");
    element.id = `answer-${i}`;
    element.classList.add("answer", "hidden");
    element.innerText = kw;
    
    answers.append(element, " ");
  }

  // Play!
  let got = 0;
  while (got < total) {
    const [input, stop] = yield new Any(
      new Input(inputKw),
      new Click(giveUp),
    );

    if (stop) break;

    const kw = inputKw.value; 
    const i = wordlist.findIndex(w => w === (
      insensitive ? kw.toLowerCase() : kw
    ));
    
    if (i == -1) continue;
    
    const element = $(`#answer-${i}`);
    if (!element.classList.contains("hidden")) continue;

    element.classList.remove("hidden");
    got += 1;
    inputKw.value = "";
  }

  return { got, total };
}


// Highlight every word that was missed.
function showMissed() {
  for (const child of $("#answers").children) {
    if (child.classList.contains("hidden")) {
      child.classList.remove("hidden");
      child.classList.add("missed");
    }
  }
}


// Format the given `start` and `end` dates into an elapsed time such as
// `1min 20s`
function formatTime(start, end) {
  const elapsed = end - start;
  const sec = Math.floor(elapsed / 1000) % 60;
  const min = Math.floor(elapsed / 60000);

  if (min > 0) {
    return `${min}min ${sec}s`;
  } else {
    return `${sec}s`;
  }
}


// Produce a range of values including `from` up to but excluding `to`, and
// shuffles it if `random` is true.
function order(from, to, random) {
  const length = to - from;
  const values = Array.from({ length }, (_, i) => i + from);

  if (random) shuffle(values);
  return values;
}

// Shuffle the given list.
function shuffle(list) {
  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(i * Math.random())
    const tmp = list[i];
    list[i] = list[j];
    list[j] = tmp;
  }
}

