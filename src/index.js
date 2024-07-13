let addToy = false;

document.addEventListener('DOMContentLoaded', () => {
  const addBtn = document.querySelector('#new-toy-btn');
  const toyFormContainer = document.querySelector('.container');
  addBtn.addEventListener('click', () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = 'block';
    } else {
      toyFormContainer.style.display = 'none';
    }
  });
});

//Fetch Andy's toys
let toysContainer = document.getElementById('toy-collection');
window.addEventListener('load', () => {
  fetch('http://localhost:3000/toys')
    .then((response) => response.json())
    .then((data) => {
      for (let toy of data) {
        let cardContainer = document.createElement('div');
        cardContainer.classList.add('card');
        toysContainer.appendChild(cardContainer);
      }
    });
});
