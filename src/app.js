const KEYBOARD_EN = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'],
  ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
  ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'Shift'],
  ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', '←', '↓', '→', 'Ctrl'],
];

const specialKeys = ['Backspace', 'Tab', 'Delete', 'CapsLock', 'Enter', 'ShiftLeft',
  'ShiftRight', 'ControlLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight',
  'ArrowUp', 'ArrowLeft', 'ArrowDown', 'ArrowRight',
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
    if (value === '↑') { this.elem.classList.add('key-arrow'); }
    if (value === '←') { this.elem.classList.add('key-arrow'); }
    if (value === '↓') { this.elem.classList.add('key-arrow'); }
    if (value === '→') { this.elem.classList.add('key-arrow'); }
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
  keyboard.querySelectorAll('.key-shift')[0].setAttribute('id', 'ShiftLeft');
  keyboard.querySelectorAll('.key-shift')[1].setAttribute('id', 'ShiftRight');
  keyboard.querySelectorAll('.key-ctrl')[0].setAttribute('id', 'ControlLeft');
  keyboard.querySelectorAll('.key-ctrl')[1].setAttribute('id', 'ControlRight');
  keyboard.querySelectorAll('.key-alt')[0].setAttribute('id', 'AltLeft');
  keyboard.querySelectorAll('.key-alt')[1].setAttribute('id', 'AltRight');
  keyboard.querySelectorAll('.key-arrow')[0].setAttribute('id', 'ArrowUp');
  keyboard.querySelectorAll('.key-arrow')[1].setAttribute('id', 'ArrowLeft');
  keyboard.querySelectorAll('.key-arrow')[2].setAttribute('id', 'ArrowDown');
  keyboard.querySelectorAll('.key-arrow')[3].setAttribute('id', 'ArrowRight');

  keyboard.querySelector('.key-backspace').setAttribute('id', 'Backspace');
  keyboard.querySelector('.key-tab').setAttribute('id', 'Tab');
  keyboard.querySelector('.key-delete').setAttribute('id', 'Delete');
  keyboard.querySelector('.key-capslock').setAttribute('id', 'CapsLock');
  keyboard.querySelector('.key-enter').setAttribute('id', 'Enter');
  keyboard.querySelector('.key-space').setAttribute('id', 'Space');
}

createKeyboard();

function findKeyElement(event) {
  const keyElements = Array.from(keyboard.querySelectorAll('.key'));
  if (specialKeys.includes(event.code)) {
    return keyElements.find((key) => (event.code === key.id));
  }
  return keyElements.find((key) => (event.key === key.innerHTML));
}

window.addEventListener('keydown', (event) => {
  findKeyElement(event).classList.add('push-key');
});

window.addEventListener('keyup', (event) => {
  findKeyElement(event).classList.remove('push-key');
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
