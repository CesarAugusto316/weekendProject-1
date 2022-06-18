// @ts-check

const messages = [
  "Mamá olvidé la contraseña, !ayuda!",
  "mi nombre es Cheems, y seré tu asistente.",
  "El alienígnea de LarnU se fué, porque...",
  "no había presupuesto tendrás que...",
  "...conformarte conmigo. !GUAU!!",
  "o irte a vivir a otro planeta donde...",
  "haya humanos que programen en Javascript.",
  "Te voy ayudar a recuperar tu clave si...",
  "...me esperas. Sufro de mucha ansiedad...",
  "cuando no programo sin mi VSCode.",
];

const cheemsImage = document.querySelector(".cheems");
const bubbleBox = document.querySelector(".bubble-box");

/**
 *
 * creates and prepends a HTMLElement
 * @param {string} p
 * @returns {HTMLParagraphElement} a reference to a <p> Element.
 */
function createMessage(p) {
  const messageEl = document.createElement("p");
  messageEl.classList.add("cheems-message");
  messageEl.textContent = p;
  bubbleBox?.prepend(messageEl);

  return messageEl;
}

/**
 * @description inserts and remove a HTMLParagraphElement
 * in the DOM, iterating infinitively over array of quotes
 * for Cheems.
 */
cheemsImage?.addEventListener("load", () => {
  let counter = 0;
  let p = createMessage(messages[counter]);

  setInterval(() => {
    p.remove();
    counter = ++counter % messages.length;
    p = createMessage(messages[counter]);
  }, 5_000);
});
