import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";
    this.emojisEl = document.querySelector("#emojis");
    
    this.emit(Application.events.READY);
  }
  setEmojis(emojis) {
    this.emojis = emojis;
    const paragraphWithEmojis = document.createElement("p");
    paragraphWithEmojis.innerText = this.emojis;
    this.emojisEl.innerHTML = "";
    this.emojisEl.appendChild(paragraphWithEmojis);
   
  }

  addBananas() {
    const monkeys = this.emojis;
    this.emojis = monkeys.map((monkey) => monkey + this.banana);
    this.setEmojis(this.emojis);
  }
}
