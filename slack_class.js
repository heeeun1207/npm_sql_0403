class KTMLElement {
  // 생성자  
  constructor(tagName, id, className) {
    this.tagName = tagName;
    this.id = id;
    this.className = className;
    this.style = {
      width: null,
      height: null,
      backgroundColor: null,
    }
  }

  set width(width) {
    if (typeof(width) === 'number') {
      this.style.width = width;
    } else {
      this.style.width = null;
    }
  }
}


const kdt = new KTMLElement('div', 'kdt', 'kdt');
kdt.style.width = '200px';
kdt.style.height = '200px';
kdt.style.backgroundColor = 'yellow';

const kdtElement = document.createElement(kdt.tagName);
kdtElement.id = kdt.id;
kdtElement.className = kdt.className;
kdtElement.style.width = kdt.style.width;
kdtElement.style.height = kdt.style.height;
kdtElement.style.backgroundColor = kdt.style.backgroundColor;

window.onload = function() {
  if (document.body) {
    document.body.appendChild(kdtElement);
  } else {
    console.error('error');
  }
}