export default class Keys {
  constructor(value, id) {
    this.elem = document.createElement('div');
    this.elem.className = 'key';
    this.elem.innerHTML = value;
    this.elem.setAttribute('id', `${id}`);

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
