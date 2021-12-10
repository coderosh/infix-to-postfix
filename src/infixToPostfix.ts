import Stack from "./Stack";

const precedence = {
  "+": 1,
  "-": 1,
  "*": 2,
  "/": 2,
  $: 3,
  "^": 3,
} as { [key: string]: any };

const isOperator = (char: string) => Object.keys(precedence).includes(char);

export interface History {
  stack: string[];
  postfix: string[];
  char: string;
}

function infixToPostfix(str: string) {
  const arr = str.split("").filter((a) => a !== " ");
  const postfix: string[] = [];
  const history: History[] = [];
  const stack = new Stack<string>();

  if (arr.length === 0) return { history, postfix };

  for (const char of arr) {
    if (isOperator(char) || char === "(") {
      if (stack.isEmpty()) {
        stack.push(char);
      } else {
        while (true) {
          if (precedence[stack.peek()] >= precedence[char]) {
            postfix.push(stack.pop());
          } else {
            stack.push(char);
            break;
          }
        }
      }
    } else if (char === ")") {
      let topChar = stack.pop();
      while (topChar !== "(") {
        postfix.push(topChar);
        if (stack.isEmpty()) break;
        topChar = stack.pop();
      }
    } else {
      postfix.push(char);
    }

    history.push({ stack: stack.toArray(), postfix: [...postfix], char });
  }

  while (!stack.isEmpty()) postfix.push(stack.pop());
  history.push({ stack: [], postfix: [...postfix], char: "" });

  return { history, postfix };
}

export default infixToPostfix;
