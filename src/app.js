const KEYBOARD_EN = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'],
  ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
  ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&uarr;', 'Shift'],
  ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', '&larr;', '&darr;', '&rarr;', 'Ctrl'],
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

    if (value === 'Backspace') { this.elem.classList.add('key-backspace'); }
    if (value === 'Tab') { this.elem.classList.add('key-tab'); }
    if (value === 'Del') { this.elem.classList.add('key-delete'); }
    if (value === 'CapsLock') { this.elem.classList.add('key-capslock'); }
    if (value === 'Enter') { this.elem.classList.add('key-enter'); }
    if (value === 'Shift') { this.elem.classList.add('key-shift'); }
    if (value === 'Ctrl') { this.elem.classList.add('key-ctrl'); }
    if (value === 'Win') { this.elem.classList.add('key-win'); }
    if (value === 'Alt') { this.elem.classList.add('key-alt'); }
    if (value === 'Space') { this.elem.classList.add('key-space'); }
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

window.addEventListener('keydown', (event) => {
  const keys = keyboard.querySelectorAll('.key');
  keys.forEach((key) => {
    if (event.key === key.innerHTML) { key.classList.add('push-key'); }
  });
});

window.addEventListener('keyup', (event) => {
  const keys = keyboard.querySelectorAll('.key');
  keys.forEach((key) => {
    if (event.key === key.innerHTML) { key.classList.remove('push-key'); }
  });
});

keyboard.addEventListener('mousedown', (event) => {
  if (event.target.matches('.key')) {
    event.target.classList.add('push-key');
  }
});

keyboard.addEventListener('mouseup', (event) => {
  if (event.target.matches('.key')) {
    event.target.classList.remove('push-key');
  }
});

keyboard.addEventListener('mouseout', (event) => {
  if (event.target.matches('.key')) {
    event.target.classList.remove('push-key');
  }
});
