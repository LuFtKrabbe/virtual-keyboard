import {
  KEYBOARD_EN_STANDART, KEYBOARD_EN_SHIFT, KEYBOARD_EN_CAPS, KEYBOARD_EN_SHIFT_CAPS,
} from './keyboards-lang-en.js';

import {
  KEYBOARD_RU_STANDART, KEYBOARD_RU_SHIFT, KEYBOARD_RU_CAPS, KEYBOARD_RU_SHIFT_CAPS,
} from './keyboards-lang-ru.js';

import Keys from './class-keys.js';

const KEYBOARD_ID = [
  ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
  ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'],
  ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
  ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
  ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'],
];

const specialKeys = [
  'Backspace', 'Tab', 'Delete', 'CapsLock', 'Enter', 'ShiftLeft', 'ShiftRight',
  'MetaLeft', 'ControlLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight',
  'ArrowUp', 'ArrowLeft', 'ArrowDown', 'ArrowRight',
];

let KEYBOARD_STANDART = [];
let KEYBOARD_CAPS = [];
let KEYBOARD_SHIFT = [];
let KEYBOARD_SHIFT_CAPS = [];

let currentLanguage = localStorage.getItem('language') ?? 'EN';

const textfield = document.createElement('textarea');
textfield.className = 'textfield';
document.body.append(textfield);

const keyboard = document.createElement('div');
keyboard.className = 'keyboard';
document.body.append(keyboard);

function setLocalStorage() {
  localStorage.setItem('language', currentLanguage);
}

function createKeyboard() {
  for (let i = 0; i < KEYBOARD_EN_STANDART.length; i += 1) {
    const keyRow = document.createElement('div');
    keyRow.className = 'key-row';
    keyboard.append(keyRow);
    for (let j = 0; j < KEYBOARD_EN_STANDART[i].length; j += 1) {
      const newKey = new Keys(KEYBOARD_EN_STANDART[i][j], KEYBOARD_ID[i][j]);
      keyRow.append(newKey.elem);
    }
  }
}

function setKeyboards() {
  if (currentLanguage === 'EN') {
    KEYBOARD_STANDART = KEYBOARD_EN_STANDART;
    KEYBOARD_CAPS = KEYBOARD_EN_CAPS;
    KEYBOARD_SHIFT = KEYBOARD_EN_SHIFT;
    KEYBOARD_SHIFT_CAPS = KEYBOARD_EN_SHIFT_CAPS;
  }

  if (currentLanguage === 'RU') {
    KEYBOARD_STANDART = KEYBOARD_RU_STANDART;
    KEYBOARD_CAPS = KEYBOARD_RU_CAPS;
    KEYBOARD_SHIFT = KEYBOARD_RU_SHIFT;
    KEYBOARD_SHIFT_CAPS = KEYBOARD_RU_SHIFT_CAPS;
  }
}

function changeSymbols() {
  const keyCapsLock = keyboard.querySelector('.key-capslock');
  const keyShiftLeft = keyboard.querySelector('#ShiftLeft');
  const keyShiftRight = keyboard.querySelector('#ShiftRight');
  const keyElements = keyboard.querySelectorAll('.key');

  if (keyCapsLock.matches('.on') && (keyShiftLeft.matches('.on') || keyShiftRight.matches('.on'))) {
    keyElements.forEach((key) => {
      const newKey = key;
      newKey.innerHTML = (KEYBOARD_SHIFT_CAPS.flat())[KEYBOARD_ID.flat().indexOf(key.id)];
      return newKey;
    });
  }

  if (!keyCapsLock.matches('.on') && (keyShiftLeft.matches('.on') || keyShiftRight.matches('.on'))) {
    keyElements.forEach((key) => {
      const newKey = key;
      newKey.innerHTML = (KEYBOARD_SHIFT.flat())[KEYBOARD_ID.flat().indexOf(key.id)];
      return newKey;
    });
  }

  if (keyCapsLock.matches('.on') && !(keyShiftLeft.matches('.on') || keyShiftRight.matches('.on'))) {
    keyElements.forEach((key) => {
      const newKey = key;
      newKey.innerHTML = (KEYBOARD_CAPS.flat())[KEYBOARD_ID.flat().indexOf(key.id)];
      return newKey;
    });
  }

  if (!keyCapsLock.matches('.on') && !(keyShiftLeft.matches('.on') || keyShiftRight.matches('.on'))) {
    keyElements.forEach((key) => {
      const newKey = key;
      newKey.innerHTML = (KEYBOARD_STANDART.flat())[KEYBOARD_ID.flat().indexOf(key.id)];
      return newKey;
    });
  }
}

function changeLanguage() {
  const keyAltLeft = keyboard.querySelector('#AltLeft');
  const keyAltRight = keyboard.querySelector('#AltRight');
  const keyShiftLeft = keyboard.querySelector('#ShiftLeft');
  const keyShiftRight = keyboard.querySelector('#ShiftRight');
  const keyMetaLeft = keyboard.querySelector('#MetaLeft');

  if (keyMetaLeft.matches('.push-key')) {
    if (currentLanguage === 'EN') {
      currentLanguage = 'RU';
    } else {
      currentLanguage = 'EN';
    }
    setKeyboards();
    changeSymbols();
  }

  if (keyAltLeft.matches('.push-key') || keyAltRight.matches('.push-key')) {
    if (currentLanguage === 'EN') {
      currentLanguage = 'RU';
    } else {
      currentLanguage = 'EN';
    }
    setKeyboards();
    changeSymbols();
  }

  if (keyShiftLeft.matches('.push-key') || keyShiftRight.matches('.push-key')) {
    if (currentLanguage === 'EN') {
      currentLanguage = 'RU';
    } else {
      currentLanguage = 'EN';
    }
    setKeyboards();
    changeSymbols();
  }
}

createKeyboard();
setKeyboards();
changeSymbols();

function pasteSymbolMouse(symbol) {
  const current = textfield.selectionStart;
  const firstPart = textfield.value.slice(0, textfield.selectionStart);
  const secondPart = textfield.value.slice(textfield.selectionStart);
  textfield.value = firstPart + symbol + secondPart;
  textfield.selectionStart = current + 1;
  textfield.selectionEnd = textfield.selectionStart;
}

function pasteSymbolKeyboard(symbol) {
  const current = textfield.selectionStart;
  const firstPart = textfield.value.slice(0, textfield.selectionStart);
  const secondPart = textfield.value.slice(textfield.selectionStart);
  textfield.value = firstPart + symbol.innerHTML + secondPart;
  textfield.selectionStart = current + 1;
  textfield.selectionEnd = textfield.selectionStart;
}

function pasteSymbolTab() {
  const current = textfield.selectionStart;
  const firstPart = textfield.value.slice(0, textfield.selectionStart);
  const secondPart = textfield.value.slice(textfield.selectionStart);
  textfield.value = `${firstPart}\t${secondPart}`;
  textfield.selectionStart = current + 1;
  textfield.selectionEnd = textfield.selectionStart;
}

function pasteSymbolEnter() {
  const current = textfield.selectionStart;
  const firstPart = textfield.value.slice(0, textfield.selectionStart);
  const secondPart = textfield.value.slice(textfield.selectionStart);
  textfield.value = `${firstPart}\n${secondPart}`;
  textfield.selectionStart = current + 1;
  textfield.selectionEnd = textfield.selectionStart;
}

function pasteSymbolSpace() {
  const current = textfield.selectionStart;
  const firstPart = textfield.value.slice(0, textfield.selectionStart);
  const secondPart = textfield.value.slice(textfield.selectionStart);
  textfield.value = `${firstPart} ${secondPart}`;
  textfield.selectionStart = current + 1;
  textfield.selectionEnd = textfield.selectionStart;
}

function removeSymbolBackspace() {
  if (textfield.selectionStart !== 0) {
    const current = textfield.selectionStart;
    const firstPart = textfield.value.slice(0, textfield.selectionStart - 1);
    const secondPart = textfield.value.slice(textfield.selectionStart);
    textfield.value = firstPart + secondPart;
    textfield.selectionStart = current - 1;
    textfield.selectionEnd = textfield.selectionStart;
  }
}

function removeSymbolDelete() {
  if (textfield.selectionStart !== 0) {
    const current = textfield.selectionStart;
    const firstPart = textfield.value.slice(0, textfield.selectionStart);
    const secondPart = textfield.value.slice(textfield.selectionStart + 1);
    textfield.value = firstPart + secondPart;
    textfield.selectionStart = current;
    textfield.selectionEnd = textfield.selectionStart;
  }
}

function findKeyElement(event) {
  const keyElements = Array.from(keyboard.querySelectorAll('.key'));
  return keyElements.find((key) => (event.code === key.id));
}

window.addEventListener('keydown', (event) => {
  const notPrevent = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'ShiftLeft'];
  if (!notPrevent.includes(event.code)) { event.preventDefault(); }

  console.log(event);

  if (findKeyElement(event)) {
    findKeyElement(event).classList.add('push-key');

    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
      findKeyElement(event).classList.add('on');
      changeSymbols();
    }

    if (event.code === 'AltLeft' || event.code === 'AltRight') {
      findKeyElement(event).classList.add('on');
    }

    if (!specialKeys.includes(event.code)) { pasteSymbolKeyboard(findKeyElement(event)); }
    if (event.code === 'Backspace') { removeSymbolBackspace(); }
    if (event.code === 'Tab') { pasteSymbolTab(); }
    if (event.code === 'Delete') { removeSymbolDelete(); }
    if (event.code === 'Enter') { pasteSymbolEnter(); }
    if (event.code === 'Space') { pasteSymbolSpace(); }
  }
});

window.addEventListener('keyup', (event) => {
  if (findKeyElement(event)) {
    findKeyElement(event).classList.remove('push-key');
    textfield.focus();
  }

  if (event.code === 'CapsLock') {
    keyboard.querySelector('.key-capslock').classList.toggle('on');
    changeSymbols();
  }

  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    findKeyElement(event).classList.remove('on');
    changeSymbols();
    changeLanguage();
  }

  if (event.code === 'AltLeft' || event.code === 'AltRight') {
    findKeyElement(event).classList.remove('on');
    changeLanguage();
  }
});

keyboard.addEventListener('mousedown', (event) => {
  event.preventDefault();

  if (event.target.matches('.key')) {
    event.target.classList.add('push-key');

    if (!specialKeys.includes(event.target.id)) { pasteSymbolMouse(event.target.innerHTML); }

    if (event.target.id === 'Backspace') { removeSymbolBackspace(); }
    if (event.target.id === 'Delete') { removeSymbolDelete(); }
    if (event.target.id === 'Tab') { pasteSymbolTab(); }
    if (event.target.id === 'Enter') { pasteSymbolEnter(); }
    if (event.target.id === 'Space') { pasteSymbolSpace(); }
    if (event.target.id === 'MetaLeft') { changeLanguage(); }

    if (event.target.id === 'ArrowLeft' || event.target.id === 'ArrowRight') { pasteSymbolMouse(event.target.innerHTML); }
    if (event.target.id === 'ArrowUp' || event.target.id === 'ArrowDown') { pasteSymbolMouse(event.target.innerHTML); }
  }
});

keyboard.addEventListener('mouseup', (event) => {
  if (event.target.matches('.key')) {
    event.target.classList.remove('push-key');
  }
  textfield.focus();
});

keyboard.addEventListener('mouseout', (event) => {
  if (event.target.matches('.key')) {
    event.target.classList.remove('push-key');
  }
});

window.addEventListener('beforeunload', setLocalStorage);
