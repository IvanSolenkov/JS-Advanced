function addItem() {
    let newLi = document.createElement('li');
    newLi.textContent = document.getElementById('newText').value;
    document.getElementById('items').appendChild(newLi);
    document.getElementById('newText').value = '';
}