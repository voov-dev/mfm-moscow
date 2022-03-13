const initMainNav = () => {
  let linkClassName = 'main-nav__link';
  let linkClassNameShowChild = 'main-nav__item--show-child';
  let findLinkClassName = new RegExp(linkClassName);
  // Слежение за всплывшим событием focus (нужно добавить класс, показывающий потомков)
  document.addEventListener('focus', function (event) {
    // Если событие всплыло от одной из ссылок гл. меню
    if (findLinkClassName.test(event.target.className)) {
      // Добавим классы, показывающие списки вложенных уровней, на всех родителей
      let parents = getParents(event.target, '.main-nav__item');
      for (let i = 0; i < parents.length; i++) {
        parents[i].classList.add(linkClassNameShowChild);
      }
    }
  }, true);

  // Слежение за всплывшим событием blur (нужно убрать класс, показывающий потомков)
  document.addEventListener('blur', function (event) {
    // Если событие всплыло от одной из ссылок гл. меню
    if (findLinkClassName.test(event.target.className)) {
      // Уберем все классы, показывающие списки 2+ уровней
      let parents = document.querySelectorAll('.' + linkClassNameShowChild);
      for (let i = 0; i < parents.length; i++) {
        parents[i].classList.remove(linkClassNameShowChild);
      }
    }
  }, true);
};

const getParents = (elem, selector) => {

  // Element.matches() polyfill
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (s) {
      let matches = (this.document || this.ownerDocument).querySelectorAll(s);
      let i = matches.length;
      // eslint-disable-next-line no-empty
      while (--i >= 0 && matches.item(i) !== this) {
      }

      return i > -1;
    };
  }

  // Setup parents array
  let parents = [];

  // Get matching parent elements
  for (; elem && elem !== document; elem = elem.parentNode) {

    // Add matching parents to array
    if (selector) {
      if (elem.matches(selector)) {
        parents.push(elem);
      }
    } else {
      parents.push(elem);
    }

  }

  return parents;
};

export {initMainNav};
