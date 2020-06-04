function addItem() {
    let newItemText = document.getElementById('newItemText');
    let newItemValue = document.getElementById('newItemValue');
    let dropdownMenu = document.getElementById('menu');

    let firstElementValue = newItemText.value;
    let secondElementValue = newItemValue.value;

    let option = document.createElement('option');

    option.textContent = firstElementValue;
    option.value = secondElementValue;

    dropdownMenu.appendChild(option);

    newItemText.value = '';
    newItemValue.value = '';
}