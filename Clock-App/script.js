const $clock = document.querySelector("#clock");

class Clock {
  // Weak JavaScript typing, we do not have to declare attributes' type:
  #hour; // "#" means that property is private. "_" for protected.
  #minute;
  #second;

  constructor() {
    let d = new Date(); // Javascript does not have its own internal clock, but uses that
                        // of the user's computer.
    this.#hour = d.getHours();
    this.#minute = d.getMinutes();
    this.#second = d.getSeconds();
    this.#setFormat();
  }

  // #setFormat() {
  //   for (let i = 0; i < 3; i++) {
  //     if (this[i] < 10) {
  //       this[i] = "0" + this[i];
  //     }
  //   }
  // }

  // If we implement setFormat() as in the first implementation, the attributes will not be
  // modified. On the other hand, passing parameters by value or by reference to a function
  // works the same as in Java.
  #setFormat() {
    if (this.#hour < 10) {
      this.#hour = "0" + this.#hour; // Dynamic JavaScript typing, Number was converted to String.
    }
    if (this.#minute < 10) {
      this.#minute = "0" + this.#minute;
    }
    if (this.#second < 10) {
      this.#second = "0" + this.#second;
    }
  }

  // Arrow functions are so useful for "one-liners" functions, so they are practical for
  // callbacks too.
  toString = () => `${this.#hour} : ${this.#minute} : ${this.#second}`;
}

// In this case we will have a "Anonymous-arrow" function used for a callback:
// setInterval(() => $h1.innerHTML = new Clock().toString(), 1000);
setInterval("$clock.innerHTML = new Clock().toString()", 1000); // 1000 ms = 1 s.
