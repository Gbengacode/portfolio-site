export default (projectData) => {
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
                 <li class="lead">Project</li>
                 <li>2022</li>
             </ul>
         </div>
         <img src="${info.image}" class="img-fluid">
         <div class="desc">
            <p>${info.description}</p>
           <div class="subdesc">
            <ul> 
                <li>${info.lang1}</li>
                <li>${info.lang2}</li>
                <li>${info.lang3}</li>
                
            </ul>
            <div class="btn-group">
                <a href=${info.livelink} class="btn" target="_blank"><span>See live </span><i class="fa fa-external-link"></i></a>
                <a href=${info.gitlink} class="btn" target="_blank"><span>See source</span> <i class="fa fa-github" aria-hidden="true"></i></a>
            </div>
          
         </div>
           
         </div>

        </div>
      
      
      </div>
   
  </div>`;
      const test = modal.querySelector('.close');
      test.addEventListener('click', () => {
        modal.innerHTML = '';
      });
    });
  });
};