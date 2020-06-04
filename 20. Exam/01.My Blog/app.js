function solve(){
  let author = document.getElementById('creator');
  let title = document.getElementById('title');
  let category = document.getElementById('category');
  let content = document.getElementById('content');

  let button = document.getElementsByTagName('button')[0];

  let createNewArticle = document.querySelector('.site-content main section h2');

  let article = document.createElement('article');

  let archiveSection = document.querySelector('.archive-section ul');

  button.addEventListener('click', createButton);
  function buttonArchived(){
    let li = document.createElement('li');

    li.textContent = title.value;
    let ul = document.createElement('ul');
    archiveSection.appendChild(li);
    archiveSection.appendChild(ul);
    article.innerHTML = '';
  }

  function buttonDelete() {

  }
  function createButton(e) {

    e.preventDefault();

    let h1 = document.createElement('h1');
    h1.textContent = title.value;

    let p1 = document.createElement('p');
    p1.textContent = 'Creator: ';

    let strong = document.createElement('strong');
    strong.textContent = category.value;

    let p2 = document.createElement('p');
    p2.textContent = 'Category: ';
    
    let strongCreator = document.createElement('strong');
    strongCreator.textContent = author.value;

    let p3 = document.createElement('p');
    p3.textContent = content.value;

    let div = document.createElement('div');
    div.classList.add('button');

    let buttonArchive = document.createElement('button');
    buttonArchive.textContent = 'Archive';
    buttonArchive.classList.add('btn');

    let buttonDelete = document.createElement('button');
    buttonDelete.classList.add('btn');
    buttonDelete.textContent = 'Delete';

    createNewArticle.appendChild(article);
    article.appendChild(h1);
    article.appendChild(p1);
    p1.appendChild(strong);
    article.appendChild(p2);
    p2.appendChild(strongCreator);
    article.appendChild(p3);
    article.appendChild(div);
    div.appendChild(buttonArchive);
    div.appendChild(buttonDelete);

    buttonArchive.addEventListener('')
  }
}