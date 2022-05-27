document.onload = () => {
  const elems = ['hi-co', 'hi-kw', 'hi-li', 'hi-ty'];
  for (const elem of elems) {
    document.registerElement(elem, {
      prototype: Object.create(HTMLElement.prototype),
    });
  }
};
