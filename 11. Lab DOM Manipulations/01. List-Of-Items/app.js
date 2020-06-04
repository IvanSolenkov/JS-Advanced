function addItem() {
    let newLi = document.createElement('li');
    newLi.textContent = document.getElementById('newItemText').value;
    document.getElementById('items').appendChild(newLi);
    document.getElementById('newItemText').value = '';
}