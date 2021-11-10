const ul = document.querySelector('.navbar > .menu-item');
let menuLists = document.querySelectorAll('.navbar > .menu-item > li');
const barIcon = document.querySelector('.fa-bars');
const timesIcon = document.querySelector('.fa-times');

const barIconCallBack = () => {
  barIcon.classList.add('hidden');
  timesIcon.classList.remove('hidden');
  ul.classList.remove('hidden');
  ul.classList.add('overlay');
};

const timesCallBack = () => {
  barIcon.classList.remove('hidden');
  timesIcon.classList.add('hidden');
  ul.classList.add('hidden');
};

barIcon.addEventListener('click', barIconCallBack);
timesIcon.addEventListener('click', timesCallBack);

menuLists = Array.from(menuLists);
menuLists.forEach((list) => {
  list.addEventListener('click', () => {
    ul.classList.add('hidden');
    barIcon.classList.remove('hidden');
    timesIcon.classList.add('hidden');
  });
});
