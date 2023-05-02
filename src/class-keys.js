export default class Keys {
  constructor(value, id) {
    this.elem = document.createElement('div');
    this.elem.className = 'key';
    this.elem.innerHTML = value;
    this.elem.setAttribute('id', `${id}`);
  }
}
