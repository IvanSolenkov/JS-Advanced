function createArticle() {
    let createTitleElement = document.querySelector('#createArticle input');
    let createContentElement = document.querySelector('#createArticle textarea');

    let titleValueElement = createTitleElement.value;
    let contentValueElement = createContentElement.value;

    if(titleValueElement && contentValueElement){
        let titleElement = document.createElement('h3');
        titleElement.textContent = titleValueElement;

        let contentElement = document.createElement('p');
        contentElement.textContent = contentValueElement;

        let articleElement = document.createElement('article');
        articleElement.appendChild(titleElement);
        articleElement.appendChild(contentElement);

        let articlesElement = document.getElementById('articles');
        articlesElement.appendChild(articleElement);

        createTitleElement.value = '';
        createContentElement.value = '';
    }
}