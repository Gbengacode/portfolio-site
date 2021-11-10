const projectData = [
  {
    id: 1,
    name: 'Tonic',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: 'img/port1.png',
    technology: 'tech',
    livelink: 'https://gbengacode.github.io/Setup-mobile-version-porfolio',
    gitlink: 'https://github.com/Gbengacode/Setup-mobile-version-porfolio',
    lang1: 'html',
    lang2: 'Css',
    lang3: 'Javascript',
    className: 'portfolio-tab',
  },
  {
    id: 2,
    name: 'Multi-Post Stories',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: 'img/port2.png',
    technology: 'tech',
    lang1: 'html',
    lang2: 'Css',
    lang3: 'Javascript',
    livelink: 'https://gbengacode.github.io/Setup-mobile-version-porfolio',
    gitlink: 'https://github.com/Gbengacode/Setup-mobile-version-porfolio',
    className: 'invert',
  },
  {
    id: 3,
    name: 'Tonic',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: 'img/port3.png',
    technology: 'tech',
    lang1: 'html',
    lang2: 'Css',
    lang3: 'Javascript',
    livelink: 'https://gbengacode.github.io/Setup-mobile-version-porfolio',
    gitlink: 'https://github.com/Gbengacode/Setup-mobile-version-porfolio',
    className: 'portfolio-tab',
  },
];

const projectBtn = document.querySelectorAll('.project');
const modal = document.querySelector('.modal-holder');

const projectBtnArr = Array.from(projectBtn);

projectBtnArr.forEach((project) => {
  project.addEventListener('click', (e) => {
    const id = e.target.value;
    const info = projectData.find((data) => data.id === parseInt(id, 10));
    modal.innerHTML = ` <div class="modal-container">
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="modal-title">${info.name}</h2>
          <button type="button" class="close">&times;</button>
        </div>
        <div class="modal-body">
         <div class="modal-subtitle">
           
             <ul>
                 <li class="lead">Canopy</li>
                 <li>Backend</li>
                 <li>2015</li>
             </ul>
         </div>
         <img src="${info.image}" class="img-fluid">
         <div class="desc">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur tempore, fuga totam molestias quidem est esse eveniet magni suscipit ratione a nemo in, earum, voluptatum mollitia hic cumque quia id?</p>
           <div class="subdesc">
            <ul> 
                <li>${info.lang1}</li>
                <li>${info.lang2}</li>
                <li>${info.lang3}</li>
                
            </ul>
            <div class="btn-group">
                <a href=${info.livelink} class="btn">see live <i class="fa fa-external-link"></i></a>
                <a href=${info.gitlink} class="btn"><span>github</span> <i class="fa fa-github" aria-hidden="true"></i></a>
            </div>
          
         </div>
           
         </div>

        </div>
        <hr/>
      
      </div>
   
  </div>`;
    const test = modal.querySelector('.close');
    test.addEventListener('click', () => {
      modal.innerHTML = '';
    });
  });
});
