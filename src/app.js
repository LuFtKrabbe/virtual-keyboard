const KEYBOARD_EN = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace'],
  ['tab', 'q', 'w', 'e', 'r', 't', 'y', 'i', 'o', 'p', '[', ']', '\\', 'del'],
  ['caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'enter'],
  ['shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'up', 'shift'],
  ['ctrl', 'win', 'alt', 'space', 'alt', 'ctrl', 'left', 'down', 'right', 'ctrl'],
];

const textfield = document.createElement('textarea');
textfield.className = 'textfield';
document.body.append(textfield);

const keyboard = document.createElement('div');
keyboard.className = 'keyboard';
document.body.append(keyboard);

class Keys {
  constructor(value) {
    this.elem = document.createElement('div');
    this.elem.className = 'key';
    this.elem.innerHTML = value;
  }
}

function createKeyboard() {
  for (let i = 0; i < KEYBOARD_EN.length; i += 1) {
    const keyRow = document.createElement('div');
    keyRow.className = 'key-row';
    keyboard.append(keyRow);
    for (let j = 0; j < KEYBOARD_EN[i].length; j += 1) {
      const newKey = new Keys(KEYBOARD_EN[i][j]);
      keyRow.append(newKey.elem);
    }
  }
}

createKeyboard();
