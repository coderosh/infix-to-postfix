class Stack<T = any> {
  #data: T[];
  #top: number;

  constructor() {
    this.#data = [];
    this.#top = 0;
  }

  push(item: T) {
    this.#data.push(item);
    this.#top++;
  }

  peek() {
    return this.#data[this.#top - 1];
  }

  pop() {
    if (this.isEmpty()) throw new Error(`Stack is empty`);

    this.#top--;
    return this.#data.pop()!;
  }

  isEmpty() {
    return this.#top === 0;
  }

  get top() {
    return this.#top;
  }

  get length() {
    return this.#top;
  }

  toArray() {
    return [...this.#data];
  }

  fromArray(data: any) {
    this.#data = data;
  }
}

export default Stack;
