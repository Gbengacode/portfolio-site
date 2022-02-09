const links = document.querySelectorAll('.navbar li a');

const linksArr = Array.from(links);
linksArr.forEach((link) => {
  link.addEventListener('click', (e) => {
    linksArr.forEach((l) => l.parentElement.classList.remove('active'));
    e.target.parentElement.classList.add('active');
  });
});