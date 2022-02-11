const projectSection = document.querySelector('.holder');
export default (projectData) => {
  projectData.forEach((project) => {
    projectSection.innerHTML += `<section class="port-card port-link">
<div class=${project.className}>
  <figure>
    <img src=${project.image} alt="portfolio image" />
  </figure>
  <div class="cover-title">
    <h2 class="portfolio-heading">${project.name}</h2>
    <ul>
      <li class="text-dark">Project</li>
    
      <li>
        2022
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
};