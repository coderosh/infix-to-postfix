import infixToPostfix, { History } from "./infixToPostfix";

const inputEl = document.querySelector("input")!;
const tbodyEl = document.querySelector("tbody")!;
const answer = document.querySelector("#answer")!;

function createHtml(history: History[]) {
  let html = "";
  for (const h of history) {
    html += `<tr>
        <td>${h.char}</td>
        <td>${h.stack.join("")}</td>
        <td>${h.postfix.join("")}</td>
        </tr>`;
  }

  return html;
}

inputEl.addEventListener("keyup", (e: any) => {
  const { history, postfix } = infixToPostfix(e.target.value);

  tbodyEl.innerHTML = createHtml(history);
  answer.innerHTML = `Answer: ${postfix.join("")}`;
});
