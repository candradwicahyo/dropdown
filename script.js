window.onload = () => {
  
  function dropDown() {
    window.addEventListener('click', event => {
      const container = document.querySelector('.dropdown-list');
      if (event.target.className == 'dropdown') container.classList.toggle('active');
      
      // list
      const span = document.querySelector('.dropdown span');
      const list = container.querySelectorAll('ul li');
      list.forEach(li => {
        li.addEventListener('click', function() {
          const value = this.dataset.value;
          span.textContent = value;
        });
      });
    });
  }
  
  dropDown();
  
}