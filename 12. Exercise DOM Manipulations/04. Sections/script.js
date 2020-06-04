function create(sentences) {
   let content = document.getElementById('content');

   for (let sentence of sentences) {
      let div = document.createElement('div');
      let p = document.createElement('p');
      p.style.display = 'none';

      p.textContent = sentence;
      div.appendChild(p);

      div.addEventListener('click',displayParagraph);

      content.appendChild(div);
   }

   function displayParagraph(event) {
      event.target.children[0].style.display = 'block';
   }
}