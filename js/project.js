const projectData = [
  {
    id: 1,
    name: 'Tonic',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: 'img/port1.png',
    technology: 'tech',
    livelink: 'dd',
    gitlink: 'Git',
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
    livelink: 'dd',
    gitlink: 'git',
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
    livelink: 'dd',
    gitlink: 'git',
    className: 'portfolio-tab',
  },
];

const projectSection = document.querySelector('.holder');
projectData.forEach((project) => {
  projectSection.innerHTML += `<section class="port-card port-link">
<div class=${project.className}>
  <figure>
    <img src=${project.image} alt="portfolio image" />
  </figure>
  <div class="cover-title">
    <h2 class="portfolio-heading">${project.name}</h2>

    <ul>
      <li class="text-dark">Canopy</li>
      <li>
        Back End Dev
      </li>
      <li>
        2015
      </li>
    </ul>

    <p>
     ${project.description}
    </p>
    <div class="badge">
      <ul>
        <li>${project.lang1}</li>
        <li>${project.lang2}</li>
        <li>${project.lang3}</li>
       
      </ul>
    </div>
    <div class="portfolio-btn-call">
      <button type="button" class= "project btn-white" value=${project.id}>See Project</button>
    </div>
  </div>
</div>
</section>
`;
});
