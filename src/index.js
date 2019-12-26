const lista = [];

const addItem = element => {
  lista.push(element);
};

const generateItem = element => {
  let star = element.fav ? 'star' : 'star_border';
  let starClass = element.fav ? '' : 'fav-icon';

  return `<span class="d-flex">
            <li id="${element.id}" value="${element.id}" class="${
    element.checked ? 'checked-item' : ''
  }">${element.value}
            </li>
            <i id="${
              element.id
            }" class="material-icons star ${starClass}">${star}
            </i>
          </span>`;
};

const listItem = () => {
  lista.map(item => {
    document.getElementById('lista').innerHTML += generateItem(item);
  });

  lista
    .filter(item => item.fav)
    .map(item => {
      document.getElementById('lista-fav').innerHTML += generateItem(item);
    });
};

const clearLists = () => {
  document.getElementById('lista').innerHTML = '';
  document.getElementById('lista-fav').innerHTML = '';
};

const bindEvents = () => {
  let starIcons = document.getElementsByClassName('star');

  for (let i = 0; i < starIcons.length; i++) {
    starIcons[i].addEventListener('click', e => {
      e.preventDefault();

      let item = lista.find(item => item.id == e.target.id);
      item.fav = !item.fav;

      clearLists();
      listItem();
      bindEvents();
    });
  }

  let items = document.querySelectorAll('li');

  for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', e => {
      e.preventDefault();

      let item = lista.find(item => item.id == e.target.id);
      item.checked = !item.checked;

      clearLists();
      listItem();
      bindEvents();
    });
  }
};

document.getElementById('formItem').addEventListener('submit', function(event) {
  event.preventDefault();

  var element = document.getElementById('text-item');

  if (element.value === '') {
    window.alert('Favor preencher com um valor válido');
    return;
  }

  let item = {
    id: lista.length + 1,
    value: element.value,
    checked: false,
    fav: false,
  };

  addItem(item);

  clearLists();
  listItem();
  bindEvents();

  element.value = '';
});
